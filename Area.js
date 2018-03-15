import React, { Component } from 'react';
import { AppRegistry, Text, View, CheckBox, StyleSheet, SectionList, Button, FlatList } from 'react-native';

import Menu from './Menu';
import ListaAtividades from './ListaAtividades'

export default class Area extends Component {
    titulo = 'Cozinha'
    itensMenu = [
        {key: {id: 1, title: 'Geladeira', accessibilityLabel: 'Geladeira'}},
        {key: {id: 2, title: 'Armário', accessibilityLabel: 'Abrir Armário'}},
        {key: {id: 3, title: 'Balcão', accessibilityLabel: 'Balcão'}},
        {key: {id: 4, title: 'Forno', accessibilityLabel: 'Forno'}},
        {key: {id: 5, title: 'Microondas', accessibilityLabel: 'Microondas'}}
    ]


    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={{fontSize: 18, textAlign: 'center'}}>{this.titulo}</Text>
                </View>
                <View style={{flex: 4}}>
                    <Menu itensMenu={this.itensMenu} canAdd={true} />
                </View>
                <View style={{flex: 7}}>
                    <ListaAtividades />
                </View>
            </View>
        );
    }
}