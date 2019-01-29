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
import { noop, isEmpty, get } from 'lodash';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { StoreService } from '../../../lib/services';
import List from '../../../app/components/List';
import action from'../../../app/store/global/screen/action'
import screenState from'../../../app/store/global/screen/state';
import colors from '../../../app/theme/colors';
import items from '../../categories';
import HomeInfo from '../';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundDefault,
  },
});


class HomeScreen extends Component {

    static propTypes = {
        text: PropTypes.string,
        color: PropTypes.string,
        actualScreen: PropTypes.object,
    };

    static defaultProps = {
        items: [],
        color: colors.backgroundDefault,
        actualScreen: null,
    };

    /**
     * Simple constructor where also the screen is bind to the Navigation lifecycle.
     * @param props
     */
    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
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
      StoreService.dispatch(action.changeScreen(item), 'HomeScreen.handleListItemPress');
      Navigation.push(HomeInfo.id, {
        component: {
          name: HomeInfo.id,
          passProps: {
            items: item.categories,
            color: item.color,
          },
          options: {
            topBar: {
              title: {
                text: item.name,
              }
            }
          }
        },
      });
    } else {
      StoreService.dispatch(action.changeScreen(item), 'HomeScreen.handleListItemPress');
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
        console.log(this.props.actualScreen);
        return (
          <ScrollView style={styles.container} bounces={false}>
            <List
              items={get(this.props, 'actualScreen.categories', items)}
              onPress={this.handleListItemPress}
              color={this.props.color}
              onAddNew={noop}
            />
          </ScrollView>
        );
    }
}

export default compose(
  connect(state => ({
    actualScreen: get(state, 'screen.actualScreen', screenState.actualScreen),
  })),
  // withTranslations,
)(HomeScreen);
