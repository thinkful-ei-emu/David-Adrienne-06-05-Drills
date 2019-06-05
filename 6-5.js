// "use strict"

// function createMyObject(){
//   return{
//     foo: "bar",
//     answerToUniverse: 42,
//     "olly olly": "oxen free",
//     sayHello: function(){
//       return "hello"
//     },
//   };
// }
  
  
// function updateObject(obj) {
//   obj.foo = 'foo';
//   obj.bar = 'bar';
//   obj.bizz = 'bizz';
//   obj.bang = 'bang';
//   return obj;
// }


// function personMaker() {
//   var person = {
//     firstName: 'Paul',
//     lastName: 'Jones',
//     fullName: function() {
//       return `${this.firstName} ${this.lastName}`
//     },
//   };
//   return person;
// }


  
// function keyDeleter(obj) {
//   delete obj.foo;
//   delete obj.bar;
//   return obj;
// }
  


// function makeStudentsReport(data) {
//   let arr = [];
//   for(let key in data) {
//     const student = data[key];
//     arr.push(`${student.name}, ${student.grade}`)
//   }
//   return arr;
// }



// function enrollInSummerSchool(students) {
//   let arr = [];
//   for (let key in students){
//     const item = students[key];
//     students.status = 'In Summer School';
//     arr.push({
//       name: item.name, 
//       status: students.status, 
//       course: item.course
//     });
//   }
//   return arr;
// }


// function findById(items, idNum) {
//   for (let key in items) {
//     if (items[key].id === idNum){
//       return items[key];
//     }
//   }
// }



// function validateKeys(object, expectedKeys) {
//   for (let key in object) {
//     if (Object.keys(object).length !== expectedKeys.length) {
//       return false;
//     }
//     for (let i = 0; i < expectedKeys.length; i++) {
//       if(!Object.keys(object).find(key => key === expectedKeys[i])) {
//         return false;
//       }
//     }
//   }
//   return true;
// }


// let loaf = {
// flour: 300,
// water: 210,
// hydration: function(){
//   return (loaf.water / loaf.flour) * 100
// }
// }
// console.log(loaf.hydration());
// // console.log(loaf);


// let obj = {
//   foo: "mi",
//   bar: "bla",
//   fum:"la",
//   quux: "few",
//   spam: "ugh" 
// }

// for (const key in obj) { const value = obj[key]; console.log(key, value); }

// let hobbits = {
//   meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
// }
// console.log(hobbits.meals[3])

// let jobs = [
//   {name: "Don Knotts", title: "Actor"},
//   {name:"Aisha Tyler", title: "Actor/Comedian"},
//   {name:"Harpo Marx", title: "Comedian"},
//   {name:"Sherlock Holmes", title: "Detective"},
// ] 

// // for(let i = 0; i < jobs.length;i++){
// //   console.log(jobs[i])
// // }

// function boss(){
//   for (i = 0; i < jobs.length; i++){
//     if (jobs[i].name !== "Don Knotts"){ 
//   jobs[i].boss = "Gary Coleman";
//   console.log(`${jobs[i].title} ${jobs[i].name} reports to ${jobs[i].boss}.`)
//     }
//     else{
//       console.log(`${jobs[i].title} ${jobs[i].name} doesn't report to anybody.`)
//     }
//   }
//   return jobs;
// }

// console.log(boss())





// Cracking the code given solution

function decode(word) {
  switch(word[0]) {
  case 'a':
    return word[1];
  case 'b':
    return word[2];
  case 'c':
    return word[3];
  case 'd':
    return word[4];
  default:
    return ' ';
  }
}

//half built code.
const cipher = {a:1,b:2,c:3,d:4}

function decode(word){
if (word[i] = cipher[word[i]]){
console.log(word)


}
}

function decodeWords(sentence){
  for (i = 0; i < words.length; i++  )
  [{"a": word[1]},
  {"b": word[2]},
  {'c': word[3]},
  {"d": word[4]}]

  ]

}

// Half built code
function createCharacter(name,nickname,race,origin,attack,defense){
    {
      name,
      nickname,
      race,
      origin,
      attack,
      defense,
      decribe: function(){
        console.log(`${name} is a ${race} from ${origin}`)     
    }
      evaluateFight: function(character){
        console.log(`Your opponent takes ${attack - defense} damage and you recieve ${defense - attack} damage`)
    }
  } 
}

let characters = [

]

// Comments From TA
// One global object that never changes
// One if/else statement
// As many return statements as you wish
// cipher
// Up to one temporary variable