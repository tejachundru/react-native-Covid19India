import React, {Component} from 'react';
import {View} from 'react-native';
import HomeUI from '../Components/HomeUI';
import {create} from 'apisauce';
import LottieView from 'lottie-react-native';
import {datamock} from './data';
import {Metrics, ApplicationStyles, Colors} from '../../Themes';

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
  // Travel history	https://api.covid19india.org/travel_history.json
  // Raw data	https://api.covid19india.org/raw_data.json
  // States Daily changes	https://api.covid19india.org/states_daily.json
  // States Daily in csv	http://api.covid19india.org/states_daily_csv/confirmed.csv

  componentDidMount = async () => {
    const api = create({
      baseURL: 'https://api.covid19india.org',
      headers: {Accept: 'application/json'},
    });
    api
      .get('/data.json')
      .then((response) => {
        this.setState({
          response: response.data,
          loading: false,
        });
      })
      .catch((error) => {
        console.log('this is error', error);
      });
  };

  render() {
    return (
      <View
        style={{
          ...ApplicationStyles.screen.safeContainer,
        }}>
        {this.state.loading ? (
          <LottieView
            source={require('../../../../assets/Animations/17971-hand-washing.json')}
            autoPlay
            loop
            style={{
              width: Metrics.screenWidth,
            }}
          />
        ) : (
          <HomeUI
            data={this.state.response}
            districtData={this.state.districtData}
          />
        )}
      </View>
    );
  }
}
