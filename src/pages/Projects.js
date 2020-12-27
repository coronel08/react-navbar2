import React,{Component} from 'react'

class Projects extends Component{
    state={
        count:0
    };

    styles={
        border:'2px solid orange',
        fontSize:15,
        fontStyle:"italic"
    };

    render(){
        let classes='badge m-3 badge-';
        classes += this.state.count === 0 ? "warning":"info";

        return(
            <React.Fragment>
                <div className='projects'>
                    <h1>Todo List</h1>
                    {/* Span tag inherits Classname and Inline Styles */}
                    <span style={this.styles} className={classes}>
                        {this.styleCount()}
                    </span>
                    <button className="btn btn-primary">Increment</button>
                </div>
            </React.Fragment>
        );
    }

    styleCount(){
        const{count} = this.state;
        return count === 0 ? 'No Items':count;
    }


}

export default Projects
