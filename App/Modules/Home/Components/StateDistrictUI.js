import React, {useState} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import {Fonts, Colors, Metrics} from '../../Themes';
import {stateCodesMap} from '../../Utils';
import {Item} from 'native-base';

const StateDistrictUI = (props) => {
  let [districtWise, sortdistrictWise] = useState(
    props.districtWiseResponse.districtData,
  );
  let stateData = props.stateData;

  let renderTextItem = (type, itemNo, delta, color) => {
    return (
      <View style={styles.textView}>
        <Text style={{...Fonts.style.f16m, color: Colors.sarawakWhitePepper}}>
          {type}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{...Fonts.style.f18b, color: Colors.white}}>
            {itemNo}
          </Text>
          <Text style={{...Fonts.style.f12b, color: color}}>
            {delta > 0 ? '  ↑ ' + delta : ''}
          </Text>
        </View>
      </View>
    );
  };

  let renderStateTextItem = (type, itemNo, delta) => {
    return (
      <View>
        <Text style={{...Fonts.style.f14m, color: Colors.honeyGlow}}>
          {type}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{...Fonts.style.f18b, color: Colors.white}}>
            {itemNo}
          </Text>
          <Text style={{...Fonts.style.f12b, color: Colors.georgiaPeach}}>
            {delta > 0 ? '  ↑ ' + delta : ''}
          </Text>
        </View>
      </View>
    );
  };

  const renderStateData = (item, index, district) => {
    let {delta = {}} = item;
    return (
      <View style={styles.item}>
        <View style={{flex: 0.6}}>
          <Text
            numberOfLines={2}
            style={{...Fonts.style.f20m, color: Colors.white}}
          >
            {district}
          </Text>
        </View>
        <View style={{flex: 0.4}}>
          {renderStateTextItem(
            'Confirmed',
            item.confirmed,
            Object.keys(delta).length > 0 ? delta.confirmed : '',
          )}
        </View>
      </View>
    );
  };

  const renderIndiaData = () => {
    let {
      state,
      confirmed,
      deltaconfirmed,
      active,
      recovered,
      deltarecovered,
      deaths,
      deltadeaths,
    } = stateData;
    return (
      <View style={styles.indianData}>
        <View style={styles.indiaTextContainer}>
          <Text style={styles.titleFont}>{state}</Text>
          <View>
            <View style={styles.rowAround}>
              {renderTextItem(
                'Confirmed',
                confirmed,
                deltaconfirmed,
                Colors.georgiaPeach,
              )}
              {renderTextItem('Active', active)}
            </View>
            <View style={styles.rowAround}>
              {renderTextItem(
                'Recovered',
                recovered,
                deltarecovered,
                Colors.sweetGarden,
              )}
              {renderTextItem('Deaths', deaths, deltadeaths, Colors.silver)}
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <FlatList
        ListHeaderComponent={renderIndiaData()}
        data={Object.keys(districtWise)}
        renderItem={({item, index}) =>
          renderStateData(districtWise[item], index, item)
        }
        keyExtractor={(item) => item.id}
        // stickyHeaderIndices={[0]}
      />
    </View>
  );
};

export default StateDistrictUI;

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.shipOfficer,
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 20,
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
  textView: {
    padding: 4,
    borderColor: Colors.white,
    borderWidth: 0.5,
    borderRadius: 5,
    margin: 2,
    width: Metrics.screenWidth / 2.5,
  },
  rowAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  sortIconView: {
    borderRadius: 3,
    marginRight: 30,
    borderWidth: 2,
    padding: 4,
    borderColor: Colors.honeyGlow,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  indianData: {
    padding: 20,
  },
  indiaTextContainer: {
    backgroundColor: Colors.shipOfficer,
    padding: 10,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 12,
  },
  titleFont: {
    ...Fonts.style.f23b,
    color: Colors.white,
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  sheetText: {
    ...Fonts.style.f20m,
  },
  sheetItem: {
    paddingVertical: 10,
    paddingHorizontal: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
