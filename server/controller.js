const axios = require('axios')


module.exports = {

    auth: async (req, res) => {

        try {
        let { code } = req.query
        let payload = {
            client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
            client_secret: process.env.AUTH0_CLIENT_SECRET,
            code,
            grant_type: "authorization_code",
            redirect_uri: `http://${req.headers.host}/auth/callback`
        }
        let auth0domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`
        
        let accessTokenResponse = await axios.post(`${auth0domain}/oauth/token`, payload)
        let accessToken = accessTokenResponse.data.access_token

        let userInfoResponse = await axios.get(`${auth0domain}/userinfo?access_token=${accessToken}`)
        let userInfo = userInfoResponse.data

        let db = req.app.get('db')
        let users = await db.findUserByAuthId(userInfo.sub)

        if(users.length) {
            req.session.user = users[0]
            res.redirect('/')

        }else{
            let users = await db.createUser(userInfo)
            req.session.user = user = users[0]
            res.redirect('/')
        }

    }catch (error){
        console.log('we have a problem:', error)
        res.redirect('/error')
    }

},
    read: async (req, res) => {
        try {
          let db = req.app.get('db')
          let posts = await db.getPosts()
          res.send(posts)
        } catch (error) {
          console.log('error fetching posts:', error)
          res.status(500).send(error)
        }
      },
    create: async (req, res) => {
        try {
          let db = req.app.get('db')
          let { title, content } = req.body
          let user_id = req.session.user ? req.session.user.id : 1
    
          let newPost = { user_id, title, content }
          let posts = await db.createPost(newPost)
          res.send(posts[0])
        } catch (error) {
          console.log('error creating post:', error)
          res.status(500).send(error)
        }
      }
}

