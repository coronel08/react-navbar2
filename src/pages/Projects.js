import React,{Component, useState} from 'react'

class Projects extends Component{
    state={
        count:0
    };

// handling an event, naming convention to use handle___.
    handleIncrement(){
        alert(this.state.count);
    }

    render(){
        return(
            <React.Fragment>
                <div className='projects'>
                    <h1>Todo List</h1>
                    <span style={this.styleBox} className={this.styleBadge()}>
                        {this.styleCount()}
                    </span>
                    <button onClick={this.handleIncrement} className="btn btn-primary">Increment</button>
                </div>
            </React.Fragment>
        );
    }

    styleBox={
        border:'2px solid orange',
        fontSize:15,
        fontStyle:"italic"
    }

    styleBadge(){
        let classes='badge m-3 badge-';
        classes += this.state.count === 0 ? "warning":"info";
        return classes;
    }

    styleCount(){
        const{count} = this.state;
        return count === 0 ? 'No Items':count;
    }


}

export default Projects
