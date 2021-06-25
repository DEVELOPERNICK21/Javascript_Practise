var skills = new Array("React", "Javascript","C/C++", "html" , "CSS");
// var kills = ["React", "Javascript","C/C++", "html" , "CSS"];

const addSkill = "Communication";
const atIndex = 2; 
var size = skills.length
console.log(skills.length);
console.log(skills);

// var insertElementInArray = (ele, arr,) => 
function insertElementInArray(arr, ele, inde, size) 
{
    for(let i = skills.length -1; i < atIndex; i--)
    {
        skills[ i + 1] = skills[i];
    }
    skills[atIndex] = addSkill;
    console.log(skills);
}

insertElementInArray(skills, addSkill, atIndex, size );
// insertElementInArray();
console.log(skills);