import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import HomeUI from '../Components/HomeUI';
import axios from 'axios';
import LottieView from 'lottie-react-native';
import {Metrics, Colors, Fonts} from '../../Themes';
import {
  Header,
  Body,
  Title,
  Left,
  Icon,
  Container,
  Content,
  Right,
} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      response: null,
      error: false,
    };
  }

  //   https://api.covid19india.org/data.json
  // State-district-wise	https://api.covid19india.org/state_district_wise.json
  // State-district-wise V2	https://api.covid19india.org/v2/state_district_wise.json

  componentWillMount = () => {
    this.getIndiaData();
  };

  getIndiaData = async () => {
    try {
      const [response, stateDistrictWiseResponse, ,] = await Promise.all([
        axios.get('https://api.covid19india.org/data.json'),
        axios.get('https://api.covid19india.org/state_district_wise.json'),
      ]);
      this.setState({
        loading: false,
        response: response.data,
        stateDistrictWiseResponse: stateDistrictWiseResponse.data,
      });
    } catch (err) {
      this.setState({error: true, loading: false});
    }
  };

  render() {
    let {loading, error} = this.state;
    return (
      <Container>
        <Header>
          <Left style={{paddingLeft: 20}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.toggleDrawer()}
            >
              <Icon name="md-menu" size={30} color={Colors.blueBell} />
            </TouchableOpacity>
          </Left>
          <Body>
            <Title
              style={{
                ...Fonts.style.f28b,
                color: Colors.blueBell,
              }}
            >
              {'Home'}
            </Title>
          </Body>
          <Right />
        </Header>
        <Content>
          {loading && !error ? (
            <LottieView
              source={require('../../../../assets/Animations/17686-wash-your-hands-regularly.json')}
              autoPlay
              loop
              style={{
                width: Metrics.screenWidth,
              }}
            />
          ) : error ? (
            <View style={styles.errorView}>
              <Text style={{...Fonts.style.f18b, color: Colors.richGardenia}}>
                {'Something Went Wrong'}
              </Text>
              <TouchableOpacity
                style={styles.retryButton}
                onPress={this.getIndiaData}
              >
                <Text style={{...Fonts.style.f20m, color: Colors.blueBell}}>
                  {'Retry'}
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <HomeUI
              data={this.state.response}
              stateDistrictWiseResponse={this.state.stateDistrictWiseResponse}
              {...this.props}
            />
          )}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  errorView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Metrics.screenHeight / 3,
  },
  retryButton: {
    borderRadius: 4,
    paddingVertical: 10,
    borderWidth: 1,
    paddingHorizontal: 30,
    margin: 20,
    borderColor: Colors.endingNavyBlue,
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 6,
  },
});
