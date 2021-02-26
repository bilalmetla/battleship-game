'use strict';

const sayHello = (name = 'world') => {
  return `Hello ${name}!`;
};

const SayHelloUseCases = {
  sayHello
}
export default SayHelloUseCases