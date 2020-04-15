import * as React from 'react';
import {Text, View, SafeAreaView} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import {Metrics, Colors, Fonts} from '../../Themes';
import LottieView from 'lottie-react-native';

export default class DoUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Hand Wash',
          text:
            'Practice frequent hand washing. Wash hands with soap and water or use alcohol-based hand rub. Wash hands even if they are visibly clean.',
          animations: require('../../../../assets/Animations/17855-clean-hands-coronavirus.json'),
        },
        {
          title: 'Cover your Nose & Mouth',
          text:
            'Cover your nose and mouth with handkerchief/tissue while sneezing and coughing.',

          animations: require('../../../../assets/Animations/17859-sneeze-coronavirus.json'),
        },
        {
          title: 'Wear a Mask',
          text:
            'If you feel unwell (fever, difficulty in breathing and coughing) or a person who is caring for the sick or going out. wear a mask to cover your mouth and nose.',
          animations: require('../../../../assets/Animations/17857-doctor-with-mask-coronavirus.json'),
        },
        {
          title: 'Social Distancing',
          text:
            'Maintain a safe distance from persons during interaction, especially with those having flu-like symptoms.',
          animations: require('../../../../assets/Animations/18389-social-distancing.json'),
        },
        {
          title: 'Call Helplines',
          text:
            'For any fever/flu-like signs/symptoms, please call State helpline number or the 24x7 helpline number of the Ministry of Health & Family Welfare at 011-23978046.',
          animations: require('../../../../assets/Animations/4452-dr-consultation.json'),
        },
        {
          title: 'Stay Home',
          text:
            'Stay Home & Stay safe. \n Break the Chain \n Flatten the curve',
          animations: require('../../../../assets/Animations/18168-stay-safe-stay-home.json'),
        },
      ],
    };
  }

  _renderItem = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: Colors.keppel,
          borderRadius: 5,
          height: 250,
          padding: 50,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,

          elevation: 8,
        }}>
        <LottieView ref={this.setAnim} source={item.animations} loop autoPlay />
      </View>
    );
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: 20,
        }}>
        {/* DO"S */}
        <Text
          style={{
            ...Fonts.style.f38b,
            textAlign: 'center',
            color: Colors.magentaPurple,
          }}>
          {"DO's"}
        </Text>
        <Carousel
          layout={'default'}
          ref={(ref) => (this.carousel = ref)}
          data={this.state.carouselItems}
          sliderWidth={Metrics.screenWidth}
          itemWidth={Metrics.screenWidth - 100}
          renderItem={this._renderItem}
          onSnapToItem={(index) => this.setState({activeIndex: index})}
        />
        <View style={{margin: 20}}>
          <View style={{alignItems: 'center', height: 130}}>
            <Text
              style={{
                ...Fonts.style.f23b,
                textAlign: 'center',
                color: Colors.endingNavyBlue,
              }}>
              {this.state.carouselItems[this.state.activeIndex].title}
            </Text>
            <Text
              style={{
                ...Fonts.style.f18r,
                textAlign: 'center',
                color: Colors.magentaPurple,
              }}>
              {this.state.carouselItems[this.state.activeIndex].text}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
