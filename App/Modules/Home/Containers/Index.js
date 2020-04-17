import React, {Component} from 'react';
import {View} from 'react-native';
import HomeUI from '../Components/HomeUI';
import axios from 'axios';
import LottieView from 'lottie-react-native';
import {datamock, districtDataMock} from './data';
import {Metrics, ApplicationStyles, Colors, Fonts} from '../../Themes';
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

  componentWillMount = async () => {
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
      console.log(err);
    }
  };

  render() {
    return (
      <Container>
        <Header>
          <Left style={{paddingLeft: 20}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon name="md-menu" size={30} color={Colors.blueBell} />
            </TouchableOpacity>
          </Left>
          <Body>
            <Title
              style={{
                ...Fonts.style.f28b,
                color: Colors.blueBell,
              }}>
              {'Home'}
            </Title>
          </Body>
          <Right />
        </Header>
        <Content>
          {this.state.loading ? (
            <LottieView
              source={require('../../../../assets/Animations/17686-wash-your-hands-regularly.json')}
              autoPlay
              loop
              style={{
                width: Metrics.screenWidth,
              }}
            />
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
