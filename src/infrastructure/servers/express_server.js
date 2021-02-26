import express from 'express'
import  bodyParser from "body-parser";
import router from "../../interfaces/http";

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



const apiRoot = '/api'//process.env.API_ROOT
/**
 * exposing routes
 */
Object.keys(router).forEach(r => {
  app.use(apiRoot, router[r]);
});


 // listen for requests
 const startServer = ()=> {

    app.listen(3000, () => {
      console.log('Server is listening on port 3000')
    })
 }



export { app, startServer}