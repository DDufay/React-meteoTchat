import React from 'react';
import { Image, ActivityIndicator, ListView } from 'react-native';
import globalStyle from '../Style';
import axios from 'axios';
import WeatherRow from './weather/Row';

export default class List extends React.Component {
    static navigationOptions = ({navigation}) =>
    {
        return {
            title: `Météo / ${navigation.state.params.city}`,
            tabBarIcon: () => {
                return <Image source={require('./icons/home.png')}/>
            }
        }
    };

    constructor (props) {
        super(props);
        this.state = {
            city: this.props.navigation.state.params.city,
            report: null
        };
        setTimeout(() =>{
        this.fetchWeather();
        }, 1000);
    }

    fetchWeather () {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&mode=json&units=metric&ctn=10&appid=682299d7e3d9fe950e9e890212377a99`)
        .then((response) => {
            this.setState({report: response.data})
        })
    }

    render () {
        if (this.state.report === null) {
            return (
            <ActivityIndicator color={globalStyle.color} size="large"/>
            )
        } else {
            const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
            return (
                <ListView
                    dataSource={ds.cloneWithRows(this.state.report.list)}
                    renderRow={(row, j, index) => <WeatherRow main={row} index={parseInt(index, 10)}/> }
                />
            )
        }
    }
}