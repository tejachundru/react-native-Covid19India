import React from 'react';
import {Text, View, ScrollView, FlatList, StyleSheet} from 'react-native';
import {Fonts, Colors, Metrics} from '../../Themes';
import {stateCodesMap} from '../../Utils';
import {Col} from 'native-base';

const HomeUI = (props) => {
  let {statewise} = props.data;

  let india = statewise[0];

  let renderTextItem = (type, itemNo) => {
    return (
      <View
        style={{
          padding: 10,
          borderColor: Colors.white,
          borderWidth: 0.5,
          borderRadius: 5,
          margin: 7,
          width: Metrics.screenWidth / 2.5,
        }}>
        <Text style={{...Fonts.style.f18b, color: Colors.sarawakWhitePepper}}>
          {type}
        </Text>
        <Text style={{...Fonts.style.f18b, color: Colors.sweetGarden}}>
          {itemNo}
        </Text>
      </View>
    );
  };

  let renderStateTextItem = (type, itemNo) => {
    return (
      <View>
        <Text style={{...Fonts.style.f12m, color: Colors.honeyGlow}}>
          {type}
        </Text>
        <Text style={{...Fonts.style.f12b, color: Colors.white}}>{itemNo}</Text>
      </View>
    );
  };

  const renderStateData = (item) => {
    if (item.statecode === 'TT') {
      return null;
    }
    let difference = new Date(new Date() - new Date(item.lastupdatedtime));
    difference = difference.getHours()
      ? difference.getHours() + ' hr'
      : difference.getMinutes() + ' m';
    return (
      <View style={styles.item}>
        <View style={{flex: 0.4}}>
          <Text
            numberOfLines={2}
            style={{...Fonts.style.f18b, color: Colors.white}}>
            {stateCodesMap[item.statecode]}
          </Text>
          <Text style={{...Fonts.style.f10m, color: Colors.honeyGlow}}>
            {'Last Updated' + '\n' + difference + ' ago'}
          </Text>
        </View>
        <View style={{flex: 0.6}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            {renderStateTextItem('Confirmed', item.confirmed)}
            {renderStateTextItem('Active', item.active)}
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            {renderStateTextItem('Recovered', item.recovered)}
            {renderStateTextItem('Deaths', item.deaths)}
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      {/* INDIAN DATA */}
      <View
        style={{
          padding: 20,
          backgroundColor: Colors.sarawakWhitePepper,
        }}>
        <View
          style={{
            backgroundColor: Colors.shipOfficer,
            padding: 10,
            borderRadius: 5,
            shadowColor: 'white',
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.4,
            shadowRadius: 8,
            elevation: 12,
          }}>
          <Text
            style={{
              ...Fonts.style.title,
              color: Colors.white,
              textAlign: 'center',
            }}>
            {'India'}
          </Text>
          <View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              {renderTextItem('Confirmed', india.confirmed)}
              {renderTextItem('Active', india.active)}
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              {renderTextItem('Recovered', india.recovered)}
              {renderTextItem('Deaths', india.deaths)}
            </View>
          </View>
        </View>
      </View>

      {/* States Data */}
      <FlatList
        contentContainerStyle={{backgroundColor: Colors.sarawakWhitePepper}}
        data={statewise}
        renderItem={({item}) => renderStateData(item)}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
};

export default HomeUI;

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.shipOfficer,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
