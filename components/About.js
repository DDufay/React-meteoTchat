import React  from 'react';
import { View, Text, Image } from 'react-native';
import globalStyle from '../Style';

export default class about extends React.Component {
    static navigationOptions = {
      tabBarIcon: () => {
          return <Image source={require('./icons/user.png')}/>
      }
    };

    render () {
        return (
            <View style={globalStyle.container}>
                <Text style={globalStyle.title}>Futur tchat </Text>
            </View>
        )
    }
}
