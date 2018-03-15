import React, { Component } from 'react';
import { Text, View, CheckBox, StyleSheet, TextInput } from 'react-native';

export default class Atividade extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: 'teste',
            data: '',
            hora: '',
            descricao: '',
            concluido: false
        }
    }

    render() {
      return (
        <View style={styles.container}>
            <View>
                <Text>Nome:</Text>
                <TextInput 
                    onChangeText={() => this.setState((text) => {return {nome: text.value}})}
                    value={this.state.nome}
                />
            </View>
            <View>
            </View>
            <View>
            </View>
            <View>
            </View>
            <View>
            </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(250,250,250,1.0)',
    },
    item: {
        padding: 10,
        height: 44,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#eee',
        borderRadius: 4,
        borderStyle: 'solid',
        borderWidth: 1,
        alignItems: 'center',
        marginBottom: 2
    },
})