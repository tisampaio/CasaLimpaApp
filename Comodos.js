import React, { Component } from 'react';
import { AppRegistry, Text, View, CheckBox, StyleSheet, SectionList, Button, FlatList } from 'react-native';

import Menu from './Menu';

export default class Comodos extends Component {
    itensMenu = [
        {key: {id: 1, title: 'Cozinha', accessibilityLabel: 'Abrir Cozinha'}},
        {key: {id: 2, title: 'Quarto', accessibilityLabel: 'Abrir Quarto'}},
        {key: {id: 3, title: 'Sala', accessibilityLabel: 'Abrir Sala'}},
        {key: {id: 4, title: 'Banheiro', accessibilityLabel: 'Abrir Banheiro'}},
        {key: {id: 5, title: 'Varanda', accessibilityLabel: 'Abrir Varanda'}}
    ]

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={{fontSize: 18, textAlign: 'center'}}>Cômodos</Text>
                </View>
                <View style={{flex: 11}}>
                    <Menu itensMenu={this.itensMenu} canAdd={true} />
                </View>
            </View>
        );
    }
}