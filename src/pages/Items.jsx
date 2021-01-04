import React, {Component, useState} from 'react';
import Item from './Item';

class Items extends Component{
// get props from app parent state.
    render(){
        return (
            <React.Fragment>
                {/* reset button */}
                <button 
                    onClick={this.props.onReset}
                    className='btn btn-success btn-lg m-3'
                >
                    Reset All
                </button>
                {/* get parent props and map */}
                {this.props.items.map(item => (
                    <Item
                        key={item.id}
                        onDelete={this.props.onDelete}
                        onIncrement={this.props.onIncrement}
                        item={item}
                    />
                ))}
            </React.Fragment>
        );
    }
}

export default Items
