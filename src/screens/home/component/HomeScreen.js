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
import openMap from 'react-native-open-maps';
import {
  AdMobInterstitial,
} from 'react-native-admob';
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

const NUM_SCREENS_BETWEEN_ADS = 4;
const ADS_DISABLED = true;

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

        this.state = {
            adBannedError: null,
            itemToOpen: null,
        };

        AdMobInterstitial.setAdUnitID('ca-app-pub-0073961265435848/9332367917');
        AdMobInterstitial.addEventListener('adClosed', () => {
            if (this.state.itemToOpen) {
                openMap({query: this.state.itemToOpen.category + ' near me'});
                this.setState({
                    itemToOpen: null,
                })
            }
        });
    }

    componentWillMount() {
        this.navigationEventListener = Navigation.events().bindComponent(this);
    }

    componentWillUnmount() {
        // Not mandatory
        if (this.navigationEventListener) {
            this.navigationEventListener.remove();
        }
    }

    async navigationButtonPressed({ buttonId }) {
        StoreService.dispatch(action.changeScreen(null, true), 'HomeScreen.handleListItemPress');
    }

    static getTrigger(functionName) {
        return `App/Src/Screens/Home/Component/HomeScreen.${functionName}`;
    }

    handleListItemPress = (item) => {
        if (!isEmpty(item.categories)) {
            if (this.checkShowBanner() && !ADS_DISABLED) {
                AdMobInterstitial.requestAd().then(() => {
                    AdMobInterstitial.showAd();
                });
            }
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
            // StoreService.dispatch(action.changeScreen(item), 'HomeScreen.handleListItemPress');
            if (this.checkShowBanner() && !ADS_DISABLED) {
              this.showBanner();
            } else {
              openMap({query: item.category + ' near me'});
            }
        }
    };

    checkShowBanner = () => this.props.changedScreens === 2
        || (this.props.changedScreens % NUM_SCREENS_BETWEEN_ADS === 0 && this.props.changedScreens > NUM_SCREENS_BETWEEN_ADS);

    showBanner = () => {
        AdMobInterstitial.requestAd().then(() => {
            AdMobInterstitial.showAd();
            this.setState({
                itemToOpen: item,
            })
        });
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
        changedScreens: get(state, 'screen.changedScreens', screenState.changedScreens),
    })),
  // withTranslations,
)(HomeScreen);
