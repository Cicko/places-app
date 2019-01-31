/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { Navigation } from 'react-native-navigation';
import { defaultOptions, rootOptions } from './config/navigation';
import { registerScreens } from './screens';
import { Platform } from 'react-native';
import getRegistrationId from './lib/util/navigation/getRegistrationId';
import getIconImage from './lib/util/icon/getIconImage';
import { StoreService } from './lib/services';

if (Platform.OS === 'android') {
    alert = (title) => {
        Navigation.showOverlay({
            component: {
                name: 'navigation.playground.alert',
                passProps: {
                    title
                },
                options: {
                    overlay: {
                        interceptTouchOutside: true
                    }
                }
            }
        });
    };
}

function start() {
    StoreService.createStore();
    registerScreens();
    Navigation.events().registerAppLaunchedListener(async () => {
        Navigation.setDefaultOptions(defaultOptions);

        // await Navigation.showModal({
        //   stack: {
        //     children: [
        //       {
        //         component: {
        //           name: 'navigation.playground.ModalScreen'
        //         }
        //       }
        //     ]
        //   }
        // });
        Promise.all([
            getIconImage('list'),
            getIconImage('star'),
            getIconImage('arrow-back'),
        ]).then((imgs) => {
            Navigation.setRoot({
                root: {
                    bottomTabs: {
                        children: [
                            {
                                stack: {
                                    children: [
                                        {
                                            component: {
                                                id: 'Home',
                                                name: 'EasyMove.Screens.Home',
                                                text: 'Home',
                                                passProps: {
                                                    text: 'Props passed through navigator',
                                                    myFunction: () => 'Hello from a function!',
                                                },
                                                options: {
                                                    bottomTab: {
                                                        icon: imgs[0],
                                                    },
                                                    topBar: {
                                                        title: {
                                                            text: 'Places',
                                                        },
                                                        backButton: {
                                                            visible: true,
                                                        },
                                                        leftButtons: [
                                                            {
                                                                id: 'sideMenu',
                                                                icon: imgs[2],
                                                                disableIconTint: true
                                                            },
                                                        ],
                                                        icon: imgs[0],
                                                    },
                                                },
                                            },
                                        }

                                    ],
                                },
                            },
                            {
                                component: {
                                    name: 'EasyMove.Screens.Favourites',
                                    id: 'Favourites',
                                    passProps: {
                                        text: 'This is tab 2',
                                    },
                                    options: {
                                        bottomTab: {
                                            icon: imgs[1],
                                        }
                                    }
                                },
                            },
                        ],
                    },
                }
            });
        });
    });
}

export {
    start,
}
