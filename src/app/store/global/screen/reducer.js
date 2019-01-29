/**
 *
 * @author Rudolf Cicko
 * @email rudolf.cicko@wtl.de
 * @date 11/11/2018
 *
 */
import { CHANGE_SCREEN, RESET_CHANGE_SCREEN_COUNT } from './constants';
import initialState from './state';

function screen(state = initialState, action = { type: 'none' }) {
    switch(action.type) {
        case CHANGE_SCREEN:
            return {
                ...state,
                actualScreen: action.payload.screen,
                changedScreens: state.changedScreens + 1,
            };
        case RESET_CHANGE_SCREEN_COUNT:
            return {
                ...state,
                changedScreens: 0,
            };
        default:
            return state;
    }
}

export default screen;
