# Getting Started with Create React App
This project has a Navbar, Todo List, and a couple of test files that were used to practice React. 


Used this [youtube tutorial](https://www.youtube.com/watch?v=CXa0f4-dWi4&t=125s) for navbar2
Following [this tutorial](https://vegibit.com/create-a-react-element-from-scratch/) to make a to do list


## Table of Contents
* [CSS Notes](#CSS-Notes)
* [React Notes](#React-notes)
* [Folder Src](#Folder-src)
* [Todo List](#Todo-list)
* [Learn More](#Learn-more)


# CSS Notes
Check [Readme for Video site](https://github.com/coronel08/website-vid-project) I made.


## React Notes
Notes on learning Javascript and React.


#### React Switch vs Router
[Router vs Switch explained](https://medium.com/@jenniferdobak/react-router-vs-switch-components-2af3a9fc72e)
[Router and Switch example](https://reactrouter.com/web/api/Switch)
A switch is helpfull with **nested routes**, will only render the first matched.


#### React Hashrouter vs Browserrouter
**Hash Router**: for small applications that dont need backend. Has # in url 
**Browser Router**: recommended when we have backend or static web page host


#### Navlink vs Link
Example of React Navlink and Route. Navlink is used to specify which element is active in a Navigation Bar with CSS
```
<li><NavLink to="/about">About</NavLink></li>
<Route path="/about" component={About}/>

<!-- CSS -->
.active {
  background-color: #0099FF;
}
```


#### Inline Styling React
Styled components using inline example.
```
import styled from "styled-component"
const StyledMenu = styled.div`
    .menu {
        list-style:none;
        background-color: white;
    }
    .menu.active {
        background-color:black;
    }
`
```


## Folders src
Folder and file structure broken down. 
<br>

#### TESTING Functions and Javascript Files
* Callbacks vs promises, used to practice using callback functions and promises. 
* Classes_Practice used to practice calls and functions
#### FOLDERS
* Components Folder
    * Navbar.css used for styling
    * Navbar.js navbar and sidebar
    * SidebarData.js 
* Pages Folder
    * Test, used to practice functions using [youtube vid on state.](https://www.youtube.com/watch?v=O6P86uwfdR0) Need to re write as classes as well. Also used for testing out CSS and styling in React.
    * About, practiced styling buttons and conditional styling
    * Item page made a button that increases count, styled cards as well
    * Items page makes item repeat 3 times by using state
* App.js / App.css used for routing
* index.js renders App.js


## Todo List

* [ ] Style pages 
* [x] Use fake data from [json placholder](https://jsonplaceholder.typicode.com/), found in [useEffect tutorial](https://www.youtube.com/watch?v=0ZJgIjIuY7U&t=309s). Put it in Test page.
* [ ] look into using addEventListener() function to add to  window or document.
* [ ] Add "// eslint-disable-next-line" to
    * Line 1:26 in Item.js
    * Line 1:10 in About.js
* [ ] Change state in Item.js to use [hook states](https://reactjs.org/docs/hooks-state.html) below is count named as county
    * Code below just increases count. Call the below code in the render function/class by calling it like this < County />. 
```
function County() {
    const [count, setCount] = useState(1)

    function decreaseCount(){
        setCount(prevCount => prevCount - 1)
    }

    function increaseCount(){
        setCount(prevCount => prevCount + 1)
    }

    // make button look nice
    function styleButton(){
        let classes='list-group-item list-group-item-primary';
        return classes;
    }

    return(
        <React.Fragment>
            <button onClick={decreaseCount} className={styleButton()}> - </button>
            <span>{count}</span>
            <button onClick={increaseCount} className={styleButton()}> + </button>
        </React.Fragment>
    )
}
```


## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Making a Progressive Web App
This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Deployment
This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
