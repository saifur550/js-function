var student = {
    id: 40001,
    name : "user1",
    marks: 60,
    collage:"first-year",
    roll:30
};


// console.log(student);
// console.log(student.collage);
console.log(student.marks);
var studentInfo = student.name;
student.name ='user2'
console.log(student.name);


const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  console.log(person);
  var personInfo = person.age;
  person.age = 62;
  person['eyeColor']= 'gray'
  console.log(person);