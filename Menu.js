import React, { Component } from 'react';
import { AppRegistry, Text, View, CheckBox, StyleSheet, SectionList, Button, FlatList } from 'react-native';

export default class Menu extends Component {
    _handlePress(id){
        alert('Pressed! Id = ' + id);
    }
    _add_onClick(){
        alert('Adding');
    }

    render() {
      return (
        <View style={styles.container}>
            <View>
                <FlatList
                    data={this.props.itensMenu}
                    renderItem={
                        ({item}) => <Button
                            onPress={() => this._handlePress(item.key.id)}
                            title={item.key.title}
                            color="#841584" 
                            accessibilityLabel={item.key.accessibilityLabel}
                        />
                    }
                />
            </View>
            {this.props.canAdd &&
                <View>
                    <Button 
                        onPress={() => this._add_onClick()}
                        title='+'
                        color='limegreen'
                        accessibilityLabel='Add Menu'
                    />
                </View>
            }
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})