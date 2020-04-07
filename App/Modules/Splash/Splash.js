import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';

class Splash extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <LottieView
          source={require('../../../Assets/Animations/17902-covid19.json')}
          autoPlay
          loop
        />
      </View>
    );
  }
}

export default Splash;
