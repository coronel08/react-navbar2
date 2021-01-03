# Getting Started with Create React App

## Navbar-2
Used this [youtube tutorial](https://www.youtube.com/watch?v=CXa0f4-dWi4&t=125s) for navbar2

## Todo List
Following [this tutorial](https://vegibit.com/create-a-react-element-from-scratch/) to make a to do list
* [ ] Style pages 
* [x] Use fake data from [json placholder](https://jsonplaceholder.typicode.com/), found in [useEffect tutorial](https://www.youtube.com/watch?v=0ZJgIjIuY7U&t=309s). Put it in Test page.
* [ ] look into using addEventListener() function to add to  window or document.
* [ ] Add "// eslint-disable-next-line" to
    * Line 1:26 in Item.js
    * Line 1:10 in About.js
* [ ] Change state in Item.js to use [hook states](https://reactjs.org/docs/hooks-state.html) below is count named as county
    * call the below code in the render function/class by calling it like this < County />
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

### Folders src
* Components
    * Navbar.css used for styling
    * Navbar.js navbar and sidebar
    * SidebarData.js 
* pages
    * Test, used to practice functions using [youtube vid on state.](https://www.youtube.com/watch?v=O6P86uwfdR0) Need to re write as classes as well. 
    * About, practiced styling buttons and conditional styling
    * Item page made a button that increases count, styled cards as well
    * Items page makes item repeat 3 times by using state
* App.js / App.css used for routing
* index.js renders App.js
* Callbacks vs promises, used to practice using callback functions and promises. 
* classes_practice used to practice calls and functions

## Navbar-test
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Making a Progressive Web App
This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Deployment
This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
