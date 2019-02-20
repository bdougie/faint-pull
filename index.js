// const axios = require('axios')

// function fetchGif(url) {
//   return Promise.resolve(axios.get(url)
//     .then(payload => payload.data.data.images.fixed_height.url)
//     .catch(err => console.error(err)))
// }

module.exports = robot => {
  robot.on('issue_comment.created', async context => {
    // return if you ain't suppose be here
    if (context.payload.comment.body.includes('.gipht')) {

      // const searchTerm = context.payload.comment.body.split(".gipht").join(" ")

      // const url = `http://api.giphy.com/v1/gifs/translate?api_key=MoKDfR4Cwc39ISy4qYJ4gCAKwYjrY6mw&s=${searchTerm}`
      // const gifURL = await fetchGif(url)

      // const params = context.issue({body: `![](${gifURL})` })
      const params = context.issue({body: `![](https://media.giphy.com/media/VxkNDa92gcsRq/giphy.gif)` })


      return context.github.issues.createComment(params)

    }
  })
}
