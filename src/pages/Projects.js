import React,{Component, useState} from 'react'

class Projects extends Component{
// Binding even handler in react, replaced by arrow function in handleIncrement
    // constructor(){
    //     super();
    //     this.handleIncrement=this.handleIncrement.bind(this);
    // }

    state={
        count:0
    };

// handling an event, naming convention to use handle___.
// the setState method replaces state constructor
    handleIncrement = () =>{
        this.setState({count:this.state.count + 1});
    }

    render(){
        return(
            <React.Fragment>
                <div className='projects text-center'>
                    <h1>Todo List</h1>
                    <div style={this.styleTodo} className='card mb-2'>
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
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    styleTodo={
        left: '250px',
        width: 'fit-content'
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

export default Projects
