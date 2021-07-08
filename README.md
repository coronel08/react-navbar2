# Getting Started with Create React App
This project has a Navbar, Todo List, and a couple of test files that were used to practice React. 


Used this [youtube tutorial](https://www.youtube.com/watch?v=CXa0f4-dWi4&t=125s) for navbar2
Following [this tutorial](https://vegibit.com/create-a-react-element-from-scratch/) to make a to do list


Used freecodecamp [todo list tutorial](https://www.freecodecamp.org/news/how-to-build-a-todo-list-with-react-hooks-ebaa4e3db3b/) to clear data and prevent default on submit.


Create a search bar in react [iamtimsmith.com](https://www.iamtimsmith.com/blog/lets-build-a-search-bar-using-react-hooks)

## Table of Contents
* [Folder Src](#Folder-src)
* [Todo List](#Todo-list)
* [Learn More](#Learn-more)



# Folders src
Folder and file structure broken down. 
<br>

Dockerizing a react nginx app using the following links and tutorials [Dockerizing React](https://typeofnan.dev/how-to-serve-a-react-app-with-nginx-in-docker/) and [Dockerizing React](https://dev.to/bahachammakhi/dockerizing-a-react-app-with-nginx-using-multi-stage-builds-1nfm)<br>


## FOLDERS
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
<br><br>


### TESTING Functions and Javascript Files
* Callbacks vs promises, used to practice using callback functions and promises. 
* Classes_Practice used to practice calls and functions
<br><br>

# Todo List
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