/*
var fs = require('fs');

 let engArr = readFileSync('englishwords.txt', 'utf8').toString().split('\n');
 const engArray = engArr;
 let arabArr = readFileSync('arabicwords.txt', 'utf8').toString().split('\n');
 const arabArray = arabArr;
 for (i in arabArr){
    console.log(arabArr[i])
 }
*/
   //ASYNCRHONOUS   
   var fs = require('fs');
var readMe = fs.readFile('\arabicwords.txt', 'utf8', (err, data) => {
    if (err) throw err;

    var arabArray = data.toString().split("\n");
    for (i in arabArray){
        console.log(arabArray[i]);
    }

    return arabArray;
});

function clearDiv(element, div){
   //document.getElementById(element).style.display='none';
   btn = document.getElementById(element);
   div = document.getElementById(div);
   btn.addEventListener('click', () => {
    div.style.display = 'none';
  });
}

function showDiv(element, div){
    btn = document.getElementById(element);
    div = document.getElementById(div);

    btn.addEventListener('click', () => {
        div.style.display = 'block';
      });
}

/*
function generateArabArr(element, size){
    console.log('hi')

    btn = document.getElementById(element);
    let arabicArrIndices = [];
    console.log('hi')
    btn.addEventListener('click', () => {
        for(i = 0; i < arabArray.length; i++){
            arabicArrIndices.push(i);
        }
        console.log(arabicArrIndices.length)
        var testWords = new Array(15);
        var max = (arabicArrIndices.length)-1;
        console.log(max)
        console.log(size)
        for (i = 0; i < size-1; i++){
            let randIndex = Math.floor(Math.random() * arabicArrIndices.length);
            console.log(`random index is: ${randIndex}`);
            //console.log(`what arabic word is at that index from arab array: ${arabArray[randIndex]}`);
            
            testWords.push(arabArray[randIndex]);
            arabicArrIndices.splice(randIndex, 1);
            //console.log(arabicArrIndices.length)
    
            for (j in arabicArrIndices){
                console.log(arabicArrIndices[j])
            }
        }
        console.log(testWords);
        return testWords;
      });
    
}
*/

function displayArray(button, container){
    display = document.getElementById(container);
    btn = document.getElementById(button);
    btn.addEventListener('click', () => {
        var test = `<p> Bonjour </p> `;

        display.innerHTML += test;
      });
    //arr = document.getElementById(array);
    //console.log(array[0])
    //var phrase = `<p> ${array[0]} </p>`
    
}


//clearDiv('startB', 'testintro'); 
//showDiv('startB', 'testlesson'); 
//generateArabArr('startB',15);
//displayArray('startB', 'wordContainer');




