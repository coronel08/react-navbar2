import { render } from '@testing-library/react';
import React, {Component} from 'react'

class About extends Component {
    state={
        listitems:[
            {
                id: 0,
                context:'Primary',
                modifier: 'list-group-item list-group-item-primary'
            },
            {
                id: 1,
                context:'Secondary',
                modifier: 'list-group-item list-group-item-secondary'
            },
            {
                id: 2,
                context:'Success',
                modifier: 'list-group-item list-group-item-success'
            },
            {
                id: 3,
                context: 'Danger',
                modifier: 'list-group-item list-group-item-danger'
            },
            {
                id: 4,
                context: 'Warning',
                modifier: 'list-group-item list-group-item-warning'
            }
        ]
    };

    // Conditional Rendering, if list is empty do this, else iterate items
    renderItems(){
        if (this.state.listitems.length === 0){
            return (
                <div class='alert alert-danger p-3' role='alert'>
                    There are no items to list
                </div>
            );
        } else{
            return (
                <ul className='list-group'>
                    {this.state.listitems.map(listitem => (
                        <li key={listitem.id} className={listitem.modifier}>
                            {listitem.context}
                        </li>
                    ))}
                </ul>
            );
        }
    }

    render(){
        return (
            <React.Fragment>
                <div className='about'>
                    <h1>About</h1>
                    <ul className='list-group m-3'>
                        {this.renderItems()}
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default About
