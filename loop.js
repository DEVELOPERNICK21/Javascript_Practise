const myArr = new Array("rajasthan", "Delhi" ,"madhya Pradesh" , 2000 ,"Maharashtra");


for( let i = 0 ; i < myArr.length; i++)
{
    if( typeof myArr[i] !== "string") continue;
    console.log(myArr[i]);
}