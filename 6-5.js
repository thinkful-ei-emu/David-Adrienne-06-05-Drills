function createMyObject(){
    return{
    foo: "bar",
    answerToUniverse: 42,
    "olly olly": "oxen free",
    sayHello: function(){
      return "hello"
    },
  };
  }
  
  
  function updateObject(obj) {
    obj.foo = 'foo';
    obj.bar = 'bar';
    obj.bizz = 'bizz';
    obj.bang = 'bang';
    return obj;
  }


  function personMaker() {
    var person = {
      firstName: 'Paul',
      lastName: 'Jones',
      fullName: function() {
        return `${this.firstName} ${this.lastName}`
      },
    };
    return person;
  }


  
  function keyDeleter(obj) {
    delete obj.foo;
    delete obj.bar;
    return obj;
  }
  


function makeStudentsReport(data) {
  let arr = [];
  for(let key in data) {
    const student = data[key];
    arr.push(`${student.name}, ${student.grade}`)
  }
  return arr;
}



function enrollInSummerSchool(students) {
  let arr = [];
  for (let key in students){
    const item = students[key];
    students.status = 'In Summer School';
    arr.push({
      name: item.name, 
      status: students.status, 
      course: item.course
    });
  }
  return arr;
}


function findById(items, idNum) {
  for (let key in items) {
    if (items[key].id === idNum){
      return items[key];
    }
  }
}



function validateKeys(object, expectedKeys) {
  for (let key in object) {
    if (Object.keys(object).length !== expectedKeys.length) {
      return false;
      }
    for (let i = 0; i < expectedKeys.length; i++) {
      if(!Object.keys(object).find(key => key === expectedKeys[i])) {
        return false;
      }
      }
    }
    return true;
  }
