import React from 'react';
import { StyleSheet, TextInput, Image, Button, View } from 'react-native';
import  globalStyle  from '../Style';
import { StackNavigator } from 'react-navigation';
import List from './List';

class Search extends React.Component {
    static navigationOptions = {
        title: 'Rechercher une ville',
        tabBarIcon: () => {
            return <Image source={require('./icons/home.png')}/>
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            city: 'Paris'
        }
    }

    setCity (city) {
        this.setState({city})
    }

    submit() {
        this.props.navigation.navigate('Result', {city: this.state.city})
    }

    render () {
        return (
            <View style={globalStyle.container}>
                <TextInput
                    style={globalStyle.input}
                    onChangeText={(text) => this.setCity(text)}
                    onSubmitEditing={() => this.submit()}
                    value={this.state.city}
                />
                <Button color="#A2273C" onPress={() => this.submit()} title="Rechercher une ville"/>
            </View>
        )
    }
}

const navigationOptions = {
    headerStyle: globalStyle.header,
    headerTitleStyle: globalStyle.headerTitle,
}

export default StackNavigator({
    Search: {
        screen: Search,
        navigationOptions
    },
    Result: {
        screen: List,
        navigationOptions
    }
});
