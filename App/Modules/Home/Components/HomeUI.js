import React, {useState, useRef} from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {Fonts, Colors, Metrics} from '../../Themes';
import {stateCodesMap} from '../../Utils';
import Icon from 'react-native-vector-icons/FontAwesome';
import RBSheet from 'react-native-raw-bottom-sheet';

const HomeUI = (props) => {
  const refRBSheet = useRef();

  let [statewise, sortStateWise] = useState(props.data.statewise);
  let stateDistrictWiseResponse = props.stateDistrictWiseResponse;

  let renderTextItem = (type, itemNo) => {
    return (
      <View style={styles.textView}>
        <Text style={{...Fonts.style.f20m, color: Colors.sarawakWhitePepper}}>
          {type}
        </Text>
        <Text style={{...Fonts.style.f18b, color: Colors.sweetGarden}}>
          {itemNo}
        </Text>
      </View>
    );
  };

  const sortConfirmed = () => {
    sortStateWise([...statewise.sort((a, b) => b.confirmed - a.confirmed)]);
  };

  const sortActive = (data) => {
    sortStateWise([...statewise.sort((a, b) => b.active - a.active)]);
  };

  const sortRecovered = (data) => {
    sortStateWise([...statewise.sort((a, b) => b.recovered - a.recovered)]);
  };

  const sortDeaths = (data) => {
    sortStateWise([...statewise.sort((a, b) => b.deaths - a.deaths)]);
  };

  let renderStateTextItem = (type, itemNo) => {
    return (
      <View>
        <Text style={{...Fonts.style.f14m, color: Colors.honeyGlow}}>
          {type}
        </Text>
        <Text style={{...Fonts.style.f18b, color: Colors.white}}>{itemNo}</Text>
      </View>
    );
  };

  const renderStateData = (item) => {
    if (item.statecode === 'TT') {
      return renderListHeader();
    } else if (!(item.confirmed > 0)) {
      return null;
    }
    let difference = new Date(new Date() - new Date(item.lastupdatedtime));
    difference = difference.getHours()
      ? difference.getHours() + ' hr'
      : difference.getMinutes() + ' m';
    let stateName = stateCodesMap[item.statecode];
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('District', {
            stateData: item,
            districtWiseResponse: stateDistrictWiseResponse[stateName],
          });
        }}
        style={styles.item}>
        <View style={{flex: 0.4}}>
          <Text
            numberOfLines={2}
            style={{...Fonts.style.f20m, color: Colors.white}}>
            {stateCodesMap[item.statecode]}
          </Text>
          <Text style={{...Fonts.style.f12m, color: Colors.honeyGlow}}>
            {'Last Updated' + '\n' + difference + ' ago'}
          </Text>
        </View>
        <View style={{flex: 0.6}}>
          <View style={styles.rowAround}>
            {renderStateTextItem('Confirmed', item.confirmed)}
            {renderStateTextItem('Active', item.active)}
          </View>
          <View style={styles.rowAround}>
            {renderStateTextItem('Recovered', item.recovered)}
            {renderStateTextItem('Deaths', item.deaths)}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderIndiaData = () => {
    return (
      <View style={styles.indianData}>
        <View style={styles.indiaTextContainer}>
          <Text style={styles.titleFont}>{'India'}</Text>
          <View>
            <View style={styles.rowAround}>
              {renderTextItem('Confirmed', statewise[0].confirmed)}
              {renderTextItem('Active', statewise[0].active)}
            </View>
            <View style={styles.rowAround}>
              {renderTextItem('Recovered', statewise[0].recovered)}
              {renderTextItem('Deaths', statewise[0].deaths)}
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderListHeader = () => {
    return (
      <View style={styles.iconContainer}>
        <Text
          style={{
            ...Fonts.style.f23b,
            color: Colors.white,
          }}>
          {'State Data'}
        </Text>
        <TouchableOpacity
          onPress={() => refRBSheet.current.open()}
          style={styles.sortIconView}>
          <Icon name="sort-amount-desc" size={20} color={Colors.white} />
        </TouchableOpacity>
      </View>
    );
  };

  const onSheetItemClick = (sheetItem) => {
    switch (sheetItem) {
      case 'Confirmed':
        sortConfirmed();
        break;
      case 'Active':
        sortActive();
        break;
      case 'Recovered':
        sortRecovered();
        break;
      case 'Deaths':
        sortDeaths();
        break;
    }
  };

  const renderSheetItem = (sheetItem) => {
    return (
      <TouchableOpacity
        onPress={() => {
          refRBSheet.current.close();
          onSheetItemClick(sheetItem);
        }}
        style={styles.sheetItem}>
        <Text style={styles.sheetText}>{sheetItem}</Text>
        <Icon name="sort-amount-desc" size={20} color={Colors.georgiaPeach} />
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <FlatList
        ListHeaderComponent={renderIndiaData()}
        data={statewise}
        renderItem={({item}) => renderStateData(item)}
        keyExtractor={(item) => item.id}
        stickyHeaderIndices={[1]}
      />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: '#25252570',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <View>
          {renderSheetItem('Confirmed')}
          {renderSheetItem('Active')}
          {renderSheetItem('Recovered')}
          {renderSheetItem('Deaths')}
        </View>
      </RBSheet>
    </View>
  );
};

export default HomeUI;

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
    padding: 10,
    borderColor: Colors.white,
    borderWidth: 0.5,
    borderRadius: 5,
    margin: 7,
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
    ...Fonts.style.title,
    color: Colors.white,
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginTop: 4,
    marginBottom: 5,
    backgroundColor: 'grey',
    borderRadius: 8,
  },
  sheetText: {
    ...Fonts.style.f20m,
    color: Colors.fieryFuchsia,
  },
  sheetItem: {
    paddingVertical: 10,
    paddingHorizontal: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
