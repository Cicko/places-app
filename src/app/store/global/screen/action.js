/**
 *
 * @author Rudolf Cicko
 * @email rudolf.cicko@wtl.de
 * @date 11/11/2018
 *
 */

import { CHANGE_SCREEN, RESET_CHANGE_SCREEN_COUNT } from './constants';

/**
 * Action dispatched when we change screen.
 * @param screen : screen object to which we go.
 * @param toHomeScreen : Boolean : True when we go back to the home screen.
 * @returns {{type: string, payload: {screen: *, isHomeScreen: *}}}
 */
function changeScreen(screen, toHomeScreen = false) {
    return {
        type: CHANGE_SCREEN,
        payload: {
            screen,
            isHomeScreen: toHomeScreen,
        },
    };
}

function resetChangeScreenCount() {
    return {
        type: RESET_CHANGE_SCREEN_COUNT,
    }
}


export default {
    changeScreen,
    resetChangeScreenCount,
}
