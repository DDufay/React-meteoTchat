import React  from 'react';
import { View, Text, Image, TextInput, Button } from 'react-native';
import globalStyle from '../Style';
import { StackNavigator } from "react-navigation";
import Chat from './Chat';

class about extends React.Component {
    static navigationOptions = {
        title: 'Tchat',
        tabBarIcon: () => {
          return <Image source={require('./icons/user.png')}/>
      }
    };

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    setName(name) {
        this.setState({name})
    }

    submit() {
        this.props.navigation.navigate('chat', {name: this.state.name})
    }

    render () {
        return (
            <View style={globalStyle.container}>
                <Text style={globalStyle.title}>Entrer votre nom</Text>
                <TextInput
                    style={globalStyle.input}
                    placeholder='Dylan'
                    onChangeText={(text) => this.setName(text)}
                    onSubmitEditing={() => this.submit()}
                />
                <Button color="#A2273C" onPress={() => this.submit()} title="Valider"/>
            </View>
        )
    }
}

const navigationOptions = {
    headerStyle: globalStyle.header,
    headerTitleStyle: globalStyle.headerTitle,
};

export default StackNavigator({
    About: {
        screen: about,
        navigationOptions
    },
    chat: {
        screen: Chat,
        navigationOptions
    },
});
