import React from 'react';
import About from './components/About';
import Search from './components/Search';
import { TabNavigator } from 'react-navigation';
import { View, StatusBar, StyleSheet } from 'react-native';

const Tabs = TabNavigator({
    Search: { screen: Search },
    About: { screen: About }
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        indicatorStyle: {
            height: 2,
            backgroundColor: '#FFF'
        },
        style: {
            backgroundColor: '#A2273C',
            borderTopWidth: 1,
            borderColor: '#3F101C'
        }
    }
});

export default class App extends React.Component {

    render() {
        return (
            <View style={styles.view}>
                <StatusBar hidden={true}/>
                <Tabs/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   view: {
       flex: 1
   }
});
