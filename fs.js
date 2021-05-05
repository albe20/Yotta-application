//how to work in files modules
const fs= require('fs');
//const files= fs.readdirSync(`./`);
//console.log(files);

fs.readdir('./', function(err, files){    //sychonisation de methodes
    if (err) console.log('Error', err);
    else console.log('Resultat', files);
});
 