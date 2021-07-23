// function first() 
// {
//     var name = "NICK";
//      return  function second () 
//     {
//         console.log(name);
//     };
// }

// var res = first();
// res();
// //  console.log(res);
function add(a) {
    return function addb(b){
        return a + b;
    }
    // addb(5);
}

var res = add(6); 

console.log(res(6));