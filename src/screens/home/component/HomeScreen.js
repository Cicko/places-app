/**
 *
 * @author Rudolf Cicko
 * @email rudolf.cicko@wtl.de
 * @date 04.01.19
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ScrollView } from 'react-native';
import { noop, isEmpty } from 'lodash';
import { Navigation } from 'react-native-navigation';
import { StoreService } from '../../../lib/services';
import List from '../../../app/components/List';
import action from'../../../app/store/global/screen/action'
import { buttonClick } from '../store/actions';
import colors from '../../../app/theme/colors';
import items from '../../categories';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundDefault,
  },
});


class HomeScreen extends Component {

    static propTypes = {
        text: PropTypes.string,
    };

    /**
     * Simple constructor where also the screen is bind to the Navigation lifecycle.
     * @param props
     */
    constructor(props) {
        super(props);
        // Navigation.events().bindComponent(this);
    }

    static getTrigger(functionName) {
        return `App/Src/Screens/Home/Component/HomeScreen.${functionName}`;
    }

  handleListItemPress = (item) => {
    if (!isEmpty(item.categories)) {
        /*
      if (this.showBanner()) {
        AdMobInterstitial.requestAd().then(() => {
          AdMobInterstitial.showAd();
        });
      }
      */
      StoreService.dispatch(action.changeScreen(item.category), 'HomeScreen.handleListItemPress');
      /*
      NavigationService.push(TheHomeScreen.id, {
        title: item.name,
        passProps: {
          items: item.categories,
          color: item.color,
        },
      });
      */
    } else {
      StoreService.dispatch(action.changeScreen(item.category), 'HomeScreen.handleListItemPress');
      /*
      if (this.checkShowBanner()) {
        this.showBanner();
      } else {
        openMap({query: item.category + ' near me'});
      }
      */
    }
  };

    render() {
        return (
          <ScrollView style={styles.container} bounces={false}>
            <List
              items={isEmpty(this.props.items) ? items : this.props.items}
              onPress={this.handleListItemPress}
              color={this.props.color}
              onAddNew={noop}
            />
          </ScrollView>
        );
    }
}

export default HomeScreen;
