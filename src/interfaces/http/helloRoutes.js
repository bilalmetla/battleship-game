import express from "express";
import { SayHelloController } from "../controllers/";


const router = express.Router();



router.get('/hello', (req, res, next)=>{
    let responseData = SayHelloController.sayHelloWorld()
    res.send(responseData)
})

router.post('/hello', (req, res, next)=>{
    console.log(req.body)
    let {name} = req.body.payload
    let responseData = SayHelloController.sayHelloPerson(name)
    res.send(responseData)
})


let helloRouter = router
export default helloRouter