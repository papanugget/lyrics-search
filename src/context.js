import React from 'react';

const Context = React.createContext();

export class Provider extends React.Component {
    state = {
        track_list: [
            { track: { track_name: 'abc'}},
            { track: { track_name: 'def'}},
            { track: { track_name: 'ghi'}},
        ],
        heading: 'Top 10 Tracks'
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}
export const Consumer = Context.Consumer;