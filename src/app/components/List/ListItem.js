/**
 *
 * @author Rudolf Cicko
 * @email rudolf.cicko@wtl.de
 * @date 26-July-2018
 *
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';
import { upperFirst, get } from 'lodash';
import LinearGradient from 'react-native-linear-gradient';
// import { CachedImage } from 'react-native-cached-image';

const marginItems = 7;

const styles = StyleSheet.create({
    container: {
        marginTop: marginItems,
        marginLeft: marginItems,
        marginRight: marginItems,
    },
    imageBackground: {
        alignItems: 'stretch',
    },
    overImageContainer: {
        width: '100%',
        height: '100%',
    },
    gradient: {
        opacity: 0.9,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    titleContainer: {
        flex: 5,
    },
    title: {
        color: 'white',
        fontFamily: 'Avenir',
        fontSize: 21,
        textAlign: 'center',
    },
    bottomContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
    },
    bottomLeftContainer: {
        flex: 2,
    },
    distance: {
        color: 'white',
        fontSize: 17,
    },
    bottomRightContainer: {
        flex: 1,
    },
    rating: {
        textAlign: 'right',
        width: '20%',
    },
});
/**
 * ListItem class
 */
class ListItem extends Component {
    static propTypes = {
        item: PropTypes.object,
        onPress: PropTypes.func,
    };

    handlePress = () => {
        this.props.onPress(this.props.item);
    };

    /**
     * Render method to show
     */
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={get(this.props.item, 'image', {uri: ''})}
                    style={styles.imageBackground}
                    borderRadius={7}
                >
                  <LinearGradient
                    style={styles.gradient}
                    locations={[0, 0.5, 0.9]}
                    colors={['black', 'transparent', 'black']}
                  >
                        <TouchableOpacity onPress={this.handlePress}>
                            <View style={styles.overImageContainer}>
                                <View style={styles.titleContainer}>
                                    <Text
                                        adjustsFontSizeToFit
                                        style={styles.title}
                                        minimumFontScale={0.5}
                                    > {upperFirst(this.props.item.name)} </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                  </LinearGradient>
                </ImageBackground>
            </View>
        );
    }
}

export default ListItem;
