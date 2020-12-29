import React,{Component, useState} from 'react'

class Item extends Component{
// Binding even handler in react, replaced by arrow function in handleIncrement
    // constructor(){
    //     super();
    //     this.handleIncrement=this.handleIncrement.bind(this);
    // }

    state={
        count:this.props.value
    };

// handling an event, naming convention to use handle___.
// the setState method replaces state constructor
    handleIncrement = () =>{
        this.setState({count:this.state.count + 1});
    }

// delete button here takes delete event from parents @ Items.jsx
    render(){
        return(
            <React.Fragment>
                <div className='item text-center'>
                    <div style={this.styleTodo} className='card m-2'>
                        <h5 className={this.styleCardHeader()}>{this.styleCount()}</h5>
                        <div className='card-body'>
                            <button
                                onClick={() => {
                                    this.handleIncrement();
                                }}
                                className='btn btn-lg btn-outline-secondary'
                            >
                                Increment
                            </button>
                            <button 
                                className='btn btn-lg btn-outline-danger ml-4'
                                onClick={this.props.onDelete}
                                
                            >
                                Delete
                            </button>
                        </div>
                        {this.props.children}
                    </div>
                </div>
            </React.Fragment>
        );
    }

    styleTodo={
        left: '200px',
        width: '60%',
    }

// Conditional for count, 0 show no items else show count
    styleCount(){
        const{count} = this.state;
        return count === 0 ? 'No Items':count;
    }

// Conditional styling if 0 style in warning, else primary 
    styleCardHeader(){
        let classes = 'card-header h4 text-white bg-';
        classes += this.state.count === 0 ? 'warning':'primary';
        return classes;
    }


}

export default Item
