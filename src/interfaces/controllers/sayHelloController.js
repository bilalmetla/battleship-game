
import { SayHelloUseCases } from "../../application/use_cases/";

export const sayHelloWorld = ()=>{
   
    return SayHelloUseCases.sayHello()
}

export const sayHelloPerson = (name)=>{
   
    return SayHelloUseCases.sayHello(name)
}