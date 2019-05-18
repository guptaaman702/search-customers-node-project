import fs from 'fs';
import readline from 'readline';

export function convert(file) {
   return new Promise((resolve,reject) =>{
        const stream = fs.createReadStream(file);
        //Handle Stream error(IE: file not found)
        stream.on('error', reject);

        const reader = readline.createInterface({
            input: stream
        });

        const array = [];

        reader.on('line', line =>{
            array.push(JSON.parse(line));
        });

        reader.on('close', () =>{ 
            resolve(array)
        });
   });
}