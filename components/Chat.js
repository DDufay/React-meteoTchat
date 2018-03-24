import React  from 'react';
import { Image } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Backend from './Backend';

export default class Chat extends React.Component {
    static navigationOptions = {
        title: 'Tchat',
        tabBarIcon: () => {
          return <Image source={require('./icons/user.png')}/>
      }
    };

    constructor (props) {
        super(props);
        this.state = {
            name: this.props.navigation.state.params.name,
            messages: []
        };
    }

    render () {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={(message) => {
                    Backend.sendMessage(message);
                }}
                user={{
                    _id: Backend.getUid(),
                    name: this.state.name
                }}
            />
        )
    }

    componentDidMount() {
        Backend.loadMessages((message) => {
            this.setState((previousState) => {
                return {
                    messages: GiftedChat.append(previousState.messages, message),
                };
            });
        });
    }
    componentWillUnmount() {
        Backend.closeChat();
    }
}
