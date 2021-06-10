const arr1 = new Array("nick","expert Developer", "mony making machine");
const channel = {name: "nick",
                proffesion: "expert Developer", Experties: "money making machine",};

for(const m of arr1)
{
    console.log(m);
}

for(const m in channel)
{
    // console.log(m);
    console.log(`The key is : ${m} and the main data is : ${channel[m]}`);
}
