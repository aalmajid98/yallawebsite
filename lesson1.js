const fs = require('fs');

/*   ASYNCRHONOUS   
var readMe = fs.readFile('\englishwords.txt', 'utf8', (err, data) => {
    if (err) throw err;

    var array = data.toString().split("\n");
    for (i in array){
        //console.log(array[0]);
    }

    return array;
});*/

 let fileString = fs.readFileSync('englishwords.txt').toString().split('\n');
const array = fileString;

for (i in array){
    console.log(array[i]);
}






