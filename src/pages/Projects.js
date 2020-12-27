import React,{Component} from 'react'

class Projects extends Component{
    state={
        count:0
    };

    render(){
        return(
            <React.Fragment>
                <div className='projects'>
                    <h1>Cartable</h1>
                    <span>Test</span>
                    <button>Increment</button>
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
