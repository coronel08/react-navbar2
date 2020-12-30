import React, {Component, useState} from 'react';
import Item from './Item';

class Items extends Component{
// create state for how many lists to make
    state = {
        items:[
            {id:1, value:0},
            {id:2, value:10},
            {id:3, value:0}
        ]
    };

    handleDelete = itemId => {
        const items = this.state.items.filter(item => item.id !== itemId);
        this.setState({items:items});
    };

// render 3 to do list by passing state in map
    render(){
        return (
            <React.Fragment>
                {this.state.items.map(item => (
                    <Item 
                        key={item.id} 
                        value={item.value}
                        onDelete={this.handleDelete}
                        id={item.id}
                    >
                        <div className='card-footer text-muted'>
                            Footer passed by children.prop For item Number <b className='badge badge-pill badge-warning'>{item.id}</b>
                        </div>
                    </Item>
                ))}
            </React.Fragment>
        );
    }
}

export default Items
