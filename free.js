// Capacite de systeme d'exploitation OS
const { totalmem } = require('os');
const os= require('os')
var totalment= os.totalmem();
var freem=os.freemem();
console.log("total  " +totalment ); 
console.log(`free memory = ${freem}`);