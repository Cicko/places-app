/**
 *
 * @author Rudolf Cicko
 * @email rudolf.cicko@wtl.de
 * @date 07.01.19
 *
 */
import { Navigation } from 'react-native-navigation';
import { getIconImage }from '../../util';
import colors from '../../../app/theme/colors';
import HomeInfo from '../../../screens/home';

/**
 * Navigation Service class that manages all navigation operations.
 */
class NavigationService {

    constructor() {
        getIconImage('arrow-back').then((img) => {
            this.navIcons = {
                backButton: img,
            }
        });
    }

    showBackButtonIf(condition, componentId) {
        if (condition) {
            this.hideBackButton(componentId);
        } else {
            this.showBackButton(componentId);
        }
    }

    hideBackButton(componentId) {
        Navigation.mergeOptions(componentId, {
            topBar: {
                leftButtons: [],
            },
        })
    }

    showBackButton(componentId) {
        Navigation.mergeOptions(componentId, {
            topBar: {
                leftButtons: {
                    id: 'backButton',
                    icon: this.navIcons.backButton,
                    text: 'caca',
                    color: colors.primary.main,
                },
            },
        });
    }
}

export default new NavigationService;
