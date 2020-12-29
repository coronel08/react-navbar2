import React, {Component, useState} from 'react';
import Projects from './Projects';

class Items extends Component{
// create state for how many lists to make
    state = {
        items:[
            {id:1, value:0},
            {id:2, value:1},
            {id:3, value:0}
        ]
    };

// render 3 to do list by passing state in map
    render(){
        return (
            <React.Fragment>
                {this.state.items.map(item => (
                    < Projects 
                        key={item.id}
                        value={item.value}
                    />
                ))}
            </React.Fragment>
        );
    }
}

export default Items
