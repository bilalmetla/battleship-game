'use strict';

 import {server} from './infrastructure/servers/';


/**
 * its an async method.
 * may be later needs to run some othe async calls before server started.
 */
const start = async () => {

    server()
}


start();