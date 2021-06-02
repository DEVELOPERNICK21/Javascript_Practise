const myName = function(element) {
    return element % 2 === 0 ;
}
    const result =  [5,6,7,8].every(myName);
    console.log(result);


    const filled = [45, 565 ,656 ,65].fill("f");
    
    console.log(filled);


    const chengeFilterMethod = [2,3,5,6,8].filter((num) => ( num < 6));
    
    console.log(chengeFilterMethod);

    const filtered = [2,3,5,6,8].filter((num) => { return num != 8});
    
    console.log(filtered);