/**
 *
 * @author Rudolf Cicko
 * @email rudolf.cicko@wtl.de
 * @date 10.01.19
 *
 */

import { combineReducers } from 'redux';
import home from '../../screens/home/store/reducer';
import favourites from '../../screens/favourites/store/reducer';

export default combineReducers({
  home,
  favourites,
});
