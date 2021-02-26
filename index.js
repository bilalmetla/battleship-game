'use strict';

 import {server} from './src/infrastructure/servers/';


/**
 * its an async method.
 * may be later needs to run some othe async calls before server started.
 */
const start = async () => {

    server()
}


start();