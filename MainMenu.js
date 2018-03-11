import React, { Component } from 'react';
import { AppRegistry, Text, View, CheckBox, StyleSheet, SectionList, Button } from 'react-native';

import ListaAtividades from './ListaAtividades';
import Menu from './Menu';

export default class MainMenu extends Component {
    itensMenu = [
        {key: {id: 1, title: 'Cômodos', accessibilityLabel: 'teste'}},
        {key: {id: 2, title: 'Avulsos', accessibilityLabel: 'teste2'}}
    ]

    render() {
      return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <Menu itensMenu={this.itensMenu} canAdd={false} />
            </View>
            <View style={{flex: 11}}>
                <ListaAtividades />
            </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    menu: {
        flex: 2,
        backgroundColor: '#eee'
    }
})