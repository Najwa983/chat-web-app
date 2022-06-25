import React from 'react';
import { ChannelList } from './ChannelList';
import './chat.scss';
import { MessagesPanel } from './MessagesPanel';
export class Chat extends React.Component {

    state = {
        channels: [{ id: 1, name: 'first', participants: 10 }]
    }
    componentDidMount() {
        this.loadChannels();
    }

    loadChannels = async () => {
        fetch('http://localhost:8080/getChannels', ).then(async response => {
                let data = await response.json();
                this.setState({ channels: data.channels });
            })
    }
    // The front end needs to handle these events as well. To capture the events we have to use the same event name that the back end emits and vice versa. When the client hits the channel, an event must be sent to the back end to calculate the number of participants and broadcast to all the current sockets that a new user entered the channel.
    handleChannelSelect = id => {
        this.socket.emit('channel-join', id, ack => {
        });
    }    

    
    render() {
        return (

            <div className="chat-app">‍
                <ChannelList channels={this.state.channels} onselectchannel={this.handleChannelSelect}></ChannelList>
                <MessagesPanel />
            </div>


        );
    }
}