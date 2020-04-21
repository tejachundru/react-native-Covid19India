import React, {useState, useRef} from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {Fonts, Colors, Metrics} from '../../Themes';
import Icon from 'react-native-vector-icons/FontAwesome';
import RBSheet from 'react-native-raw-bottom-sheet';

export const addtimeZone = (date) => {
  return `${date.slice(6, 10)}-${date.slice(3, 5)}-${date.slice(
    0,
    2,
  )}T${date.slice(11)}+05:30`;
};

function timeDiffCalc(dateFuture, dateNow) {
  let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;
  const days = Math.floor(diffInMilliSeconds / 86400);
  diffInMilliSeconds -= days * 86400;
  const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
  diffInMilliSeconds -= hours * 3600;
  const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
  diffInMilliSeconds -= minutes * 60;
  let difference = '';
  if (days > 0) {
    difference += days === 1 ? `${days} day ` : `${days} days `;
  } else if (hours > 0) {
    difference +=
      hours === 0 || hours === 1 ? `${hours} hour ` : `${hours} hours `;
  } else {
    difference +=
      minutes === 0 || hours === 1
        ? `${minutes} minutes`
        : `${minutes} minutes`;
  }
  return difference;
}

const HomeUI = (props) => {
  const refRBSheet = useRef();

  let [statewise, sortStateWise] = useState(
    props.data.statewise.sort((a, b) => b.confirmed - a.confirmed),
  );
  let stateDistrictWiseResponse = props.stateDistrictWiseResponse;

  let renderTextItem = (type, itemNo, delta, color) => {
    return (
      <View style={styles.textView}>
        <Text style={{...Fonts.style.f20m, color: Colors.sarawakWhitePepper}}>
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

  let renderStateTextItem = (type, itemNo, delta, color) => {
    return (
      <View>
        <Text style={{...Fonts.style.f14m, color: Colors.honeyGlow}}>
          {type}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{...Fonts.style.f16b, color: Colors.white}}>
            {itemNo}
          </Text>
          <Text style={{...Fonts.style.f10m, color: color}}>
            {delta > 0 ? ' ↑ ' + delta : ''}
          </Text>
        </View>
      </View>
    );
  };

  const renderStateData = (item) => {
    let {
      state,
      confirmed,
      deltaconfirmed,
      active,
      recovered,
      deltarecovered,
      deaths,
      deltadeaths,
    } = item;
    if (state === 'Total') {
      return renderListHeader();
    } else if (!(item.confirmed > 0)) {
      return null;
    }

    let difference = isNaN(Date.parse(addtimeZone(item.lastupdatedtime)))
      ? ''
      : `${timeDiffCalc(
          new Date(addtimeZone(item.lastupdatedtime)),
          new Date(),
        )}`;

    let stateName = item.state;
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
            {state}
          </Text>
          <Text style={{...Fonts.style.f12m, color: Colors.honeyGlow}}>
            {'Last Updated' + '\n' + difference + ' ago'}
          </Text>
        </View>
        <View style={{flex: 0.6}}>
          <View style={styles.rowAround}>
            {renderStateTextItem(
              'Confirmed',
              confirmed,
              deltaconfirmed,
              Colors.georgiaPeach,
            )}
            {renderStateTextItem('Active', active, '')}
          </View>
          <View style={styles.rowAround}>
            {renderStateTextItem(
              'Recovered',
              recovered,
              deltarecovered,
              Colors.sweetGarden,
            )}
            {renderStateTextItem('Deaths', deaths, deltadeaths, Colors.silver)}
          </View>
        </View>
      </TouchableOpacity>
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
    } = statewise[0];
    return (
      <View style={styles.indianData}>
        <View style={styles.indiaTextContainer}>
          <Text style={styles.titleFont}>{'India'}</Text>
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
