import React from 'react';
import { Channel } from './Channel';


export class ChannelList extends React.Component {
    handleClick = (id) => {
        this.props.onSelectChannel(id);
    }
    render() {


        let list = `There is no channels to show`;
        if (this.props.channels && this.props.channels.map) {
            list = this.props.channels.map
                ((c,index) => <Channel key={index} id={c.id} name={c.name} participants={c.participants} onClick={this.handleClick}></Channel>)
        }
        return (
        
                <div className="channel-list">
                    ‍             {list}
                </div>
        );
    }
}