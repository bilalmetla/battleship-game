import express from 'express'
import router from "../../interfaces/http";
import middlewares from "./express_middlewares";


const app = express()

/**loading and integrating middleware into server */
middlewares.forEach(md=>md(app))


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