
import {SayHelloUseCases} from "../../../src/application/use_cases/";



test('should resolve with "Hello world!" when name is not defined (undefined or null)', () => {

    const result = SayHelloUseCases.sayHello();
  
    expect(result).toBe('Hello world!');
  });

  test(`should resolve with "Hello _name_!" when name is provided`, async () => {
    const name = 'bilal';
    const result = SayHelloUseCases.sayHello(name);
    expect(result).toBe('Hello bilal!');
  });
