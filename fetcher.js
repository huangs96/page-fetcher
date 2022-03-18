const fs = require('fs');
const request = require('request');



const url = process.argv[2];
const filepath = process.argv[3];

function fetcher(url, filepath) {
  request(url, function(error, response, body) {
     if(error) {
         console.log("An error has occured, please try again", error) 
         return;
     }

     fs.writeFile(filepath, body, (writeError) => {
         if(writeError) {
             console.log(`Error saving file: ${writeError}`);
             return;
         } else {
             console.log(`Saved file to ${filepath}`);
         }
     })
  })
}

fetcher(url, filepath)
