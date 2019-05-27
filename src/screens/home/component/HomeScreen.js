/**
 *
 * @author Rudolf Cicko
 * @email rudolf.cicko@wtl.de
 * @date 04.01.19
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    ScrollView,
    BackHandler,
    View,
    Platform,
} from 'react-native';
import { isEmpty, get } from 'lodash';
import { Navigation } from 'react-native-navigation';
import openMap from 'react-native-open-maps';
import {
    AdMobInterstitial,
    AdMobBanner,
} from 'react-native-admob';
import changeNavigationBarColor, {
    HideNavigationBar,
} from 'react-native-navigation-bar-color';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { StoreService, NavigationService } from '../../../lib/services';
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
    adBannerContainer: {
        backgroundColor: colors.navDrawerBackground,
        justifyContent: 'center',
        flexDirection: 'row',
        height: 50,
    },
});

const NUM_SCREENS_BETWEEN_ADS = 2;
const ADS_DISABLED = false;
const AD_REQUEST_TIME_LIMIT = 2000;

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

        changeNavigationBarColor(colors.navDrawerBackground, true);
        if (Platform.OS === 'ios') {
            HideNavigationBar();
        }
        this.state = {
            adBannedError: null,
            itemToOpen: null,
        };

        if (!ADS_DISABLED) {
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
    }

    componentWillMount() {
        this.navigationEventListener = Navigation.events().bindComponent(this);
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        // Not mandatory
        if (this.navigationEventListener) {
            this.navigationEventListener.remove();
        }
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    shouldComponentUpdate(newProps) {
        NavigationService.showBackButtonIf(newProps.actualScreen === null, HomeInfo.id);
        return true;
    }

    async navigationButtonPressed({ buttonId }) {
        if (buttonId === 'backButton') {
            this.handleBackPress();
        }
    }

    handleBackPress = () => {
        StoreService.dispatch(action.changeScreen(null, true), 'HomeScreen.handleListItemPress');
        return true;
    };

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
        } else {
            // StoreService.dispatch(action.changeScreen(item), 'HomeScreen.handleListItemPress');
            if (this.checkShowBanner() && !ADS_DISABLED) {
              this.showBanner(item);
            } else {
              openMap({query: item.category + ' near me'});
            }
        }
    };

    checkShowBanner = () => this.props.changedScreens === 2
        || (this.props.changedScreens % NUM_SCREENS_BETWEEN_ADS === 0 && this.props.changedScreens > NUM_SCREENS_BETWEEN_ADS);

    showBanner = (item, cb) => {
        let adRequestingTooLong = true;
        let timeout = false;

        AdMobInterstitial.requestAd().then(() => {
            adRequestingTooLong = false;
            if (!timeout) {
                AdMobInterstitial.showAd();
                this.setState({
                    itemToOpen: item,
                });
            }
        });
        setTimeout(() => {
            if (adRequestingTooLong) {
                timeout = true;
                openMap(item);
            }
        }, AD_REQUEST_TIME_LIMIT);
    };

    renderBanner = () =>
        <View style={styles.adBannerContainer}>
            <AdMobBanner
                adSize="banner"
                adUnitID="ca-app-pub-0073961265435848/7977965787"
            />
        </View>;

    render() {
        return <ScrollView style={styles.container} bounces={false}>
                <List
                    items={get(this.props, 'actualScreen.categories', items)}
                    onPress={this.handleListItemPress}
                    color={this.props.color}
                    banner={this.renderBanner()}
                />
            </ScrollView>;
    }
}

export default compose(
    connect(state => ({
        actualScreen: get(state, 'screen.actualScreen', screenState.actualScreen),
        changedScreens: get(state, 'screen.changedScreens', screenState.changedScreens),
    })),
  // withTranslations,
)(HomeScreen);
