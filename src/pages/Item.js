import React,{Component, useState} from 'react'

class Item extends Component{
    render(){
        return(
            <React.Fragment>
                <div className='card m-2' style={this.styleTodo} >
                    <h5 className={this.styleCardHeader()}>{this.styleCount()}</h5>
                    <div className='card-body'>
                        {/* Increment Button takes props from App.js */}
                        <button
                            onClick={() => this.props.onIncrement(this.props.item)}
                            className='btn btn-lg btn-outline-secondary'
                        >
                            Increment
                        </button>
                        {/* Delete button */}
                        <button 
                            onClick={() => this.props.onDelete(this.props.item.id)}
                            className='btn btn-lg btn-outline-danger ml-4'
                        >
                            Delete
                        </button>
                    </div>
                    {this.props.children}
                </div>
            </React.Fragment>
        );
    }

    // passed in divs style, keeeps from touching navbar
    styleTodo={
        left: '200px',
        width: '60%',
    }

// Conditional for count, 0 show no items else show count
    styleCount(){
        const{value} = this.props.item;
        return value === 0 ? 'No Items':value;
    }

// Conditional styling if 0 style in warning, else primary 
    styleCardHeader(){
        let classes = 'card-header h4 text-white bg-';
        classes += this.props.item.value === 0 ? 'warning':'primary';
        return classes;
    }


}

export default Item
