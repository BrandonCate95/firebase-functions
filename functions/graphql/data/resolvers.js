const firebase = require('../../firebase')

const resolveFunctions = {
    Query: {
        async tweets(){
            const tweets = await firebase
                .firestore()
                .collection('Tweets')
                .get();
            return tweets.docs.map(tweet => tweet.data())
        },
        async user(_, args){
            try{
                const userDoc = await firebase
                    .firestore()
                    .doc(`User/${args.id}`)
                    .get()
                const user = userDoc.data()
                return user || new Error('User ID not found')
            }catch(error){
                throw new Error(error)
            }
        }
    },
    User: {
        async tweets(user){
            try{
                const userTweets = await firebase
                    .firestore()
                    .collection('Tweets')
                    .where('userId', '==', user.id)
                    .get()
                return userTweets.docs.map(tweet => tweet.data())
            }catch(error){
                throw new Error(error)
            }
        }
    },
    Tweets: {
        async user(tweet){
            try{
                const tweetAuthor = await firebase
                    .firestore()
                    .doc(`User/${tweet.userId}`)
                    .get()
                return tweetAuthor.data()
            }catch(error){
                throw new Error(error)
            }
        }
    }
}

module.exports = resolveFunctions