import React, {PureComponent} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  Platform,
  StyleSheet,
} from 'react-native';
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
import {Fonts, Colors} from '../../Themes';
import DoUI from '../Components/DoUI';
import DontUI from '../Components/DontUI';

const {width: screenWidth} = Dimensions.get('window');

export default class DoContainer extends PureComponent {
  constructor(props) {
    super(props);
  }

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
              {'D*D'}
            </Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View
          // style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}
          >
            <DoUI />
            <DontUI />
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});
