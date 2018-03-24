import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/fr'
import globalStyle from '../../Style';
import FadeInView from '../animation/fadeInView';
moment.locale('fr');

export default class Row extends React.Component {

    static propTypes = {
        main: PropTypes.object,
        index: PropTypes.number
    };

    day() {
        let day = moment(this.props.main.dt * 1000).format('ddd');
        return (
            <Text style={[style.white, style.bold]}>{day.toUpperCase()}</Text>
        )
    }

    date() {
        let date = moment(this.props.main.dt * 1000).format('DD/MM HH');
        return (
            <Text style={style.white}>{date} H</Text>
        )
    }

    icon(size = 50) {
        const type = this.props.main.weather[0].main.toLowerCase();
        let image;
        switch (type) {
            case 'clouds':
                image = require('./icons/cloudy.png');
                break;
            case 'rain':
                image = require('./icons/rain.png');
                break;
            default:
                image = require('./icons/sunny.png');
        }
        return (
            <Image source={image} style={{height: size, width: size}}/>
        )
    }

    render() {
        if (0 === this.props.index) {
            return (
                <FadeInView delay={this.props.index * 50}>
                    <View style={[style.view, style.flex, style.firstView]}>
                        <View style={style.flex}>
                            { this.icon(90) }
                            <Text style={style.marginText}>{this.day()} {this.date()}</Text>
                        </View>
                        <Text style={style.temp}>{Math.round(this.props.main.main.temp)}°C</Text>
                    </View>
                </FadeInView>
            )
        }else {
            return (
                <FadeInView>
                    <View style={[style.view, style.flex]}>
                        <View style={style.flex}>
                            { this.icon() }
                            <Text style={style.marginText}>{this.day()} {this.date()}</Text>
                        </View>
                        <Text style={style.temp}>{Math.round(this.props.main.main.temp)}°C</Text>
                    </View>
                </FadeInView>
            )
        }
    }
}

const style = StyleSheet.create({
    white: {
        color: globalStyle.white
    },
    bold: {
        fontWeight: 'bold'
    },
    firstView: {
      backgroundColor: globalStyle.color,
    },
    view: {
        backgroundColor: globalStyle.blue,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#202340',
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'space-between'
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    temp: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 22
    },
    marginText: {
        marginLeft: 10,
    }
});