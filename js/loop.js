// var i = 0;
// while (i < 10) {
//     console.log(i);
//     if(i == 5){
//         break;
//     }
//     i ++;
// }




// for (var n = 0; n <=20; n ++){
//     console.log(n);
//     if(n == 10){
//         break;
//     }
// }



var numbers = [ 20, 45, 77, 34, 39,50,60,100,345,600,1,2,3,4];

for (var x = 0 ; x < numbers.length; x++) {
    var number = numbers[x];
    if(number > 39){
        continue;
    };
    console.log(number);
};



// var numbers = [ 20, 45, 77, 34, 39,50,60,100,345,600];

// for (var x = 0 ; x < numbers.length; x++) {
//     var number = numbers[x];
//     if(number > 39){
//         continue;
//     };
//     console.log(number);
// };