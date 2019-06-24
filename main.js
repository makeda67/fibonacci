'use strict';

var limit = 30;
var b = 1;
var a = 0;
console.log(a);

if (limit > 0) {
console.log(b);
};

/*while ( a + b <= limit) {
    var temp = b;
    var b = a + b;
    var a = temp; 
    console.log(b);
};*/
for (a = 0; a <= limit; a + b) {
    var temp = b;
    var b = a + b;
    var a = temp;

    console.log(a);
};



//var temp = a + b
//var a = b
//var b = temp