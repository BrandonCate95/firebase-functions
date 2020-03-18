const firebase = require('firebase')
//required for side effects
require('firebase/firestore')

const config = {
    apiKey: "AIzaSyCRWYAkFezts8_u2K8LHGnY67-nNzWSehM",
    databaseURL: "https://testthree-e34c0.firebaseio.com",
    projectId: "testthree-e34c0",
    storageBucket: "testthree-e34c0.appspot.com",
    messagingSenderId: "448051696266"
}

firebase.initializeApp(config)

module.exports = firebase