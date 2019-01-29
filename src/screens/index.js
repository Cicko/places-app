/**
 *
 * @author Rudolf Cicko
 * @email rudolf.cicko@wtl.de
 * @date 04.01.19
 *
 */
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { StoreService } from '../lib/services';
import HomeScreen from './home';
import FavouritesScreen from './favourites';

function registerScreens () {
    // TODO: Take a look there https://github.com/wix/react-native-navigation/tree/master/integration/redux

  /*
    Navigation.registerComponent('navigation.playground.ReduxScreen', () => (props) => (
    <Provider store={StoreService.getStore()}>
      <ReactReduxContext {...props} />
    </Provider>
    ), () => ReactReduxContext);
    */
    Navigation.registerComponentWithRedux(HomeScreen.id, () => HomeScreen.component, Provider, StoreService.getStore());
    Navigation.registerComponentWithRedux(FavouritesScreen.id, () => FavouritesScreen.component, Provider, StoreService.getStore());
}

export {
    registerScreens,
}
