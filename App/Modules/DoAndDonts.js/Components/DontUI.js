import React from 'react';
import {Text, View} from 'react-native';
import {Fonts, Colors} from '../../Themes';

const dont = [
  "DON'T Shake hands",
  "DON'T Have a close contact with anyone, if you're experiencing cough and fever.",
  "DON'T Touch your eyes, nose and mouth",
  "DON'T Sneeze or cough into palms of your hands",
  "DON'T Spit in Public",
  "DON'T Travel unnecessarily, particularly to any affected region",
  "DON'T Participate in large gatherings, including sitting in groups at canteens",
  "DON'T Visit gyms, clubs and crowded places etc",
  "DON'T Spread rumours or panic",
];

const DontUI = ({params}) => (
  <View>
    <Text
      style={{
        ...Fonts.style.f38b,
        textAlign: 'center',
        color: Colors.georgiaPeach,
      }}>
      {"DONT's"}
    </Text>
    {dont.map((object) => {
      return renderText(object);
    })}
  </View>
);

const renderText = (text) => (
  <View style={{marginVertical: 10, marginHorizontal: 24}}>
    <View>
      <Text
        style={{
          ...Fonts.style.f18r,
          color: Colors.sasquathSocks,
        }}>
        {'• ' + text}
      </Text>
    </View>
  </View>
);

export default DontUI;
