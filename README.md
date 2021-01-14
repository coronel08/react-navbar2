# Getting Started with Create React App
This project has a Navbar, Todo List, and a couple of test files that were used to practice React. 


Used this [youtube tutorial](https://www.youtube.com/watch?v=CXa0f4-dWi4&t=125s) for navbar2
Following [this tutorial](https://vegibit.com/create-a-react-element-from-scratch/) to make a to do list


## Table of Contents
* [CSS Notes](#CSS-Notes)
* [React Notes](#React-notes)
* [Javascript Notes](#Javascript-Notes)
* [Folder Src](#Folder-src)
* [Todo List](#Todo-list)
* [Learn More](#Learn-more)


# CSS Notes
Check [Readme for Video site](https://github.com/coronel08/website-vid-project) I made.


# React Notes
Notes on learning Javascript and React.
<br><br>

### React Switch vs Router
[Router vs Switch explained](https://medium.com/@jenniferdobak/react-router-vs-switch-components-2af3a9fc72e)
[Router and Switch example](https://reactrouter.com/web/api/Switch)
A switch is helpfull with **nested routes**, will only render the first matched.
<br>

### React Hashrouter vs Browserrouter
**Hash Router**: for small applications that dont need backend. Has # in url 
**Browser Router**: recommended when we have backend or static web page host


### Navlink vs Link
Example of React Navlink and Route. Navlink is used to specify which element is active in a Navigation Bar with CSS
```
<li><NavLink to="/about">About</NavLink></li>
<Route path="/about" component={About}/>

<!-- CSS -->
.active {
  background-color: #0099FF;
}
```


### Inline Styling React
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
<br><br>

# Javascript Notes
blah blah
* increment = ++
* decrement = --
<br><br>

## Closures and Nesting Functions
```
function makeAdder(a){
    return function(b){
        return a + b
    }
}
var add5 = makeAdder(5)
var add20 = makeAdder(20)
add5(8)
add20(8)
```
<br><br>
#### private variable / nesting function
```
function secretVariable(){
    var private = "secret variable"
    return function(){
        return private
    }
}
var getPrivateVariable = secretVariable()
console.log(getPrivateVariable())
```

## Array methods
* [array method chart](https://www.w3schools.com/jsref/jsref_obj_array.asp)
* [array method examples](https://www.w3schools.com/js/js_array_methods.asp)
<br><br>

### Add or Delete an item in an array

Can add or delete to an array using **pop/push** for last items. **Shift/unshift** for begining of array. 

Can also add to back of an array by using **Length**
```
fruits[fruits.length] = "Pineapple"
```
Using ES6, use [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
```
fruits = ["start", ...fruits]
```

<br>

Change value of an item by using array index. changes apple to Kiwi
```
var fruits = ['Apple','Orange']
fruits[0] = 'Kiwi'
```
<br>

### Splicing
Using Splice to add new items to an array. <br>
Splice(start,del, items)
```
fruits.splice(1,0,"item1")
```

### Slice
Slice method slices out a piece of an array into a new array. <br> 
slice(start,stop)
<br> <br> <br>

## Sorting Arrays
[W3 Sorting Arrays page](https://www.w3schools.com/js/js_array_sort.asp)
sort(): Sorts an array alphabetically 
reverse(): reverse sort
random use [Fisher Yates Method](https://www.w3schools.com/js/js_array_sort.asp)
<br>

### Highest or Lowest Array Value
**Sorting Ascending**
Now points[0] will return lowest value
points[points.length - 1] will return highest value
```
var points = [40,100,1,5,25,10]
points.sort(function(a,b){return a - b})
```
**Sorting Descending**
```
points.sort((a,b) => b - a)
```
#### Can also use Math.max() or Math.min()
<br><br>

## Array Itteration
[Youtube vid](https://www.youtube.com/watch?v=R8rmfD9Y5-c) on filter, map, find, foreach
[W3 Array itteration](https://www.w3schools.com/js/js_array_iteration.asp)
[High Order fucntions / array iteration exampels](https://vegibit.com/higher-order-functions-in-javascript/)
* forEach(): need to learn, check link above
* map()
* filter(): creates a new array with items that pass filter
* reduce(): adds all values
* every(): checks if every item passes test/function
* some(): check if some items pass test/function
* indexOf(): returns index of item looking for
* lastIndexOf(): returns last occurence of item 
* find(): returns value of item that passes test/fucntion
* findIndex(): 
<br><br>

# Folders src
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


# Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Making a Progressive Web App
This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Deployment
This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
