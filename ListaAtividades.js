import React, { Component } from 'react';
import { AppRegistry, Text, View, CheckBox, StyleSheet, SectionList } from 'react-native';

export default class ListaAtividades extends Component {
    render() {
      return (
        <View style={styles.container}>
            <SectionList
                sections={[
                    {comodo: 'Quarto', data: [{descricao: 'Varrer'}, {descricao:'Arrumar Cama'}]},
                    {comodo: 'Cozinha', data: [{descricao:'Lavar Louça'}]},

                ]}
                renderItem={({item}) => <ItemAtividade descricao={item.descricao} />}
                renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>
                {section.comodo}</Text>}
                keyExtractor={(item, index) => index}
            />
        </View>
      );
    }
}

class ItemAtividade extends Component{
    render(){
        return (
            <View style={styles.item}>
                <View style={{flex: 1}}>
                    <CheckBox/>
                </View>
                <View style={{flex: 10}}>
                    <Text style={{fontSize: 18}}>{this.props.descricao}</Text>
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