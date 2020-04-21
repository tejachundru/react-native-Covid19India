import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import StateDistrictUI from '../Components/StateDistrictUI';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Header, Body, Title, Container, Content, Left} from 'native-base';
import {Colors, Fonts} from '../../Themes';

export default class StateDistrictContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: this.props.route.params.districtWiseResponse,
      stateData: this.props.route.params.stateData,
    };
  }

  render() {
    return (
      <Container>
        <Header>
          <Left style={{paddingLeft: 20}}>
            <TouchableOpacity onPress={() => this.props.navigation.pop()}>
              <Icon name={'angle-left'} size={40} color={Colors.shipOfficer} />
            </TouchableOpacity>
          </Left>
          <Body>
            <Title
              style={{
                ...Fonts.style.f28b,
                color: Colors.blueBell,
                marginRight: 20,
              }}>
              {'State'}
            </Title>
          </Body>
        </Header>
        <Content>
          <StateDistrictUI
            stateData={this.state.stateData}
            districtWiseResponse={this.state.response}
            {...this.props}
          />
        </Content>
      </Container>
    );
  }
}
