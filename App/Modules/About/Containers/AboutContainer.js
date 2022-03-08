import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Linking} from 'react-native';
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

const terminology = {
  ASYMPTOMATIC:
    'Presenting no symptoms of disease. In the case of COVID-19, this means absence of fever, dry cough, sore throat, shortness of breath and body aches, among other less common symptoms. Notably, it is recommended that individuals do not get tested unless they exhibit symptoms because of the risk of false negatives. In other words, most tests will not be accurate unless symptoms are present.',
  'CASE FATALITY RATE':
    'The ratio of deaths from COVID-19 to the total number of individuals diagnosed with the disease.',
  'CLINICAL TRIAL':
    'research experiments on human participants designed to answer questions about new treatments; in the case of COVID-19 and coronaviruses, the safety and efficacy of a potential vaccine.',
  'COMMUNITY SPREAD':
    'the spread of a contagious disease in a geographic area in which there is no knowledge of how someone contracted the disease. In other words, no known contact can be traced to other infected individuals.',
  'CONFIRMED POSITIVE CASE':
    'in contrast to a presumptive positive case, this is confirmation from the Centers for Disease Control and Prevention (CDC) of a positive COVID-19 test in an individual.',
  'CONTACT TRACING':
    'identifying and monitoring people who may have come into contact with an infectious person. In the case of COVID-19, monitoring usually involves self-quarantine as an effort to control the spread of disease.',
  CORONAVIRUS:
    'a family of viruses that include SARS (severe acute respiratory syndrome) and MERS (Middle East respiratory syndrome) as well as other respiratory illnesses. A coronaviruses, also known as a CoV, is typically spread between animals and humans—an event known as zoonotic transfer—and they are named for the term “corona”—Latin for crown—which refers to the shape of the virus when observed microscopically.',
  'COVID-19':
    'COVID-19 stands for novel coronavirus disease 2019, which refers to the year of its initial detection. COVID-19 is the illness related to the current pandemic; the illness is caused by the virus SARS-CoV-2 (severe acute respiratory syndrome coronavirus 2).',
  EPIDEMIC:
    'a widespread occurrence of an infectious disease in a community or geographic area.',
  EPIDEMIOLOGY:
    'a branch of medicine which deals largely with public health, including the incidence, distribution, analysis and control of diseases.',
  'FLATTENING THE CURVE':
    'an attempt to create a more gradual uptick of cases, rather than a steep rise, in an effort to avoid overburdening the health care system all once. Notably, “flattening the curve” does not necessarily decrease the projected number of cases, but spreads them out over a period of time.',
  IMMUNOSUPPRESSED:
    'an individual who experiences reduced efficacy of the immune system as a result of health conditions not related to COVID-19 disease. People who are immunosuppressed are at greater risk for hospitalization and severe sickness from the SARS-CoV-2 virus.',
  'INCUBATION PERIOD':
    'the time between when an individual is first exposed to the virus and the appearance of symptoms. A person’s level of contagion before symptoms arise is not known, although most experts believe people are most contagious after they begin exhibiting symptoms.',
  'INDEX CASE': 'the first documented case of an infectious disease.',
  'INDEX PATIENT':
    'the first person infected with a disease in an epidemic. Interchangeable with the term “patient zero.',
  LOCKDOWN:
    'an emergency measure in which individuals are restricted from certain areas in an attempt to control exposure or transmission of disease. In a lockdown during an epidemic, individuals are encouraged to stay home.',
  'NOVEL CORONAVIRUS':
    'a new strain of coronavirus, or nCoV, that has never been detected in humans.',
  PANDEMIC:
    'a worldwide spread of an infectious disease, with larger reach than an epidemic. Until COVID-19, the last pandemic was the H1N1 influenza outbreak in 2009.',
  'PATIENT ZERO':
    'the first individual infected with a disease during an epidemic.',
  'PERSON-TO-PERSON TRANSMISSION':
    'when a virus is spread between people, including physical contact or coughing and sneezing. This is in contrast to when a virus is spread via animals or through contaminated objects or surfaces.',
  PPE: 'personal protective equipment, or PPE, is specialised clothing and equipment used as a safeguard against health hazards including exposure to infectious diseases through physical contact or airborne particles. PPE is designed to protect parts of the body typically exposed in normal attire, including the nose, mouth, eyes, hands and feet. Notably, N95 respirators are considered ideal for health care workers who may be exposed to SARS-CoV-2.',
  PUI: 'person under investigation, or a PUI, is an individual who is suspected of potentially having COVID-19.',
  RESPIRATOR:
    'a device designed to protect individuals from inhaling something hazardous in the air, in this case, particulate that may be contaminated with the SARS-CoV-2 virus.',
  'SARS-CoV2':
    'the virus fully defined as “severe acute respiratory syndrome coronavirus 2” causes the disease COVID-19.',
  SCREENING:
    'the act of verifying symptoms and potential exposure before testing for the virus.',
  'SELF-ISOLATION': 'the act of separating oneself from others.',
  'SELF-QUARANTINE':
    'the act of refraining from any contact with other individuals for a period of time—in the case of COVID-19, two weeks—to observe whether any symptoms of the disease will arise after potential exposure.',
  'SOCIAL DISTANCING':
    'the act of remaining physically apart in an effort to stem transmission of COVID-19. Social distancing can include a move to remote work, the cancellation of events and remaining at least six feet away from other individuals.',
  'SUPER-SPREADER':
    'a highly contagious individual who can spread an infectious disease to a large number of uninfected people through a network of contacts.',
  SYMPTOMATIC:
    'showing symptoms of COVID-19, which can include a fever, dry cough, shortness of breath and body aches. Health officials believe the risk of transmitting the virus is highest when an individual is symptomatic.',
  VACCINE:
    'a biological preparation of organisms that provides immunity to a particular infectious disease. Currently, there is no vaccine for COVID-19.',
  VENTILATOR:
    'a machine designed to move air in and out of the lungs for a patient who is physically unable to breathe or who is not breathing well. Because COVID-19 can cause severe lower respiratory infection, ventilators are a critical machine for patients with severe disease.',
};

export default class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderTextView = () => {
    return Object.keys(terminology).map((item) => {
      return (
        <View>
          <Text style={{...Fonts.style.f16m, color: Colors.fieryFuchsia}}>
            {item}
          </Text>
          <Text style={{...Fonts.style.f14r}}>{terminology[item] + '\n'}</Text>
        </View>
      );
    });
  };

  render() {
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
              {'About'}
            </Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={{flex: 1, margin: 20}}>
            <Text
              style={{...Fonts.style.f18b, color: Colors.highligterLavender}}
            >
              {'Some Common terminology you hear about the COVID-19\n'}
            </Text>
            {this.renderTextView()}
            <Text
              style={{...Fonts.style.f18b, color: Colors.highligterLavender}}
            >
              {'Where do we get the data ?'}
            </Text>
            <Text style={{...Fonts.style.f14r}}>
              {
                'A volunteer-driven database for COVID-19 stats & patient tracing in India.\n\nAPI:'
              }
            </Text>
            <Text
              style={{color: 'blue', ...Fonts.style.f14b}}
              onPress={() => Linking.openURL('https://api.covid19india.org')}
            >
              https://api.covid19india.org
            </Text>
            <Text style={{...Fonts.style.f14r}}>
              {'\nYou can check more on their site:'}
            </Text>
            <Text
              style={{color: 'blue', ...Fonts.style.f14b}}
              onPress={() => Linking.openURL('https://www.covid19india.org/')}
            >
              https://www.covid19india.org
            </Text>
            <Text
              style={{...Fonts.style.f18b, color: Colors.highligterLavender}}
            >
              {'\nAnimations here are from ?'}
            </Text>
            <Text style={{...Fonts.style.f14r}}>
              {'These animations are form Lottie \n'}
            </Text>
            <Text
              style={{color: 'blue', ...Fonts.style.f14b}}
              onPress={() =>
                Linking.openURL(
                  'https://lottiefiles.com/coronavirus-animations',
                )
              }
            >
              {'Lottie Corona Animations'}
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}
