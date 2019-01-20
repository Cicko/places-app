/**
 *
 * @author Rudolf Cicko
 * @email rudolf.cicko@wtl.de
 * @date 26-July-2018
 *
 */

import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import colors from '../../theme/colors';
import { LIST_ITEM_HEIGHT } from './constants';

const styles = StyleSheet.create({
    container: {

    },
    listItemContainer: {
        height: LIST_ITEM_HEIGHT,
    },
    buttonContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 20,
    },
    button: {
        backgroundColor: colors.primary.main,
        borderRadius: 50,
        height: 50,
        width: 50,
        justifyContent: 'center',
        flexDirection: 'column',
    },
    addIcon: {
        color: colors.backgroundDefault,
        fontSize: 30,
        textAlign: 'center',
        paddingTop: 3,
    },
});

/**
 * Generic class to implement a list.
 */
class List extends Component {
    static propTypes = {
        items: PropTypes.any,
        onPress: PropTypes.func,
        color: PropTypes.string,
        onAddNew: PropTypes.func,
    };

    static defaultProps = {
        color: colors.backgroundDefault,
        onAddNew: noop,
    };

    /**
     * Render method
     */
    render() {
        return (
          <View style={[{ backgroundColor: this.props.color}, styles.container]}>
            {this.props.items.map((item) => (
                <View
                    key={item.name}
                    style={styles.listItemContainer}>
                    <ListItem
                        imageSource={item.imageSource}
                        onPress={this.props.onPress}
                        item={item}/>
                </View>
            ))}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={this.props.onAddNew}>
                    <Icon style={styles.addIcon} name={"md-add"}/>
                </TouchableOpacity>
            </View>
          </View>
        );
    }
}

export default List;
