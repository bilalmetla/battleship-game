import express from 'express'

const app = express()




 // listen for requests
 const startServer = ()=> {

    app.listen(3000, () => {
      console.log('Server is listening on port 3000')
    })
 }



export { app, startServer}