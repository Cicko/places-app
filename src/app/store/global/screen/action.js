/**
 *
 * @author Rudolf Cicko
 * @email rudolf.cicko@wtl.de
 * @date 11/11/2018
 *
 */

import { CHANGE_SCREEN, RESET_CHANGE_SCREEN_COUNT } from './constants';

function changeScreen(screen) {
    return {
        type: CHANGE_SCREEN,
        payload: {
            screen,
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
