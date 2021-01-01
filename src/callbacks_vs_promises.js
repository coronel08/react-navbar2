// Practice Callback and Promises
const { reject } = require("async")

const userLeft = false
const userWarchingCatMeme = false

// Using Callback functions instead of promises
// function watchTutorialCalllback(callback, errorCallback) {
//     if (userLeft){
//         errorCallback({
//             name: 'User Left',
//             message: ':(('
//         })
//     } else if (userWarchingCatMeme){
//         errorCallback({
//             name: 'User Watching Meme',
//             message: 'message : stop =('
//         })
//     } else {
//         callback('Thumbs up and Subscribe')
//     }
// }

// // Call function and log/print
// watchTutorialCalllback((message) => {
//     console.log('Success: ' + message)
// }, (error) =>{
//     console.log(error.name + ' ' + error.message)
// })









// Promise refractor
function watchtutorialPromise(){
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: 'message: Gone'
            })
        } else if (userWarchingCatMeme){
            reject({
                name: 'User watching Cat',
                message: 'message: Cat Meme'
            })
        } else {
            resolve('Thumbs up and Subscribe')
        }
    })
}

// Call function and log/print
watchtutorialPromise().then((message) => {
    console.log('Success: ' + message)
}).catch((error)  => {
    console.log(error.name + ' ' + error.message)
})





// testing out promises
const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 recorded')
})

const recordVideoTwo = new Promise((resolve, reject)  => {
    resolve('Video 2 recorded')
})

const recordVideoThree = new Promise((resolve, reject) =>{
    resolve('Video 3 recorded')
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages)
})