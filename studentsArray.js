let STUDENTS = [
    { name: "Sylva", class: "A", age: 8},
    { name: "Ashley", class: "B", age: 9},
    { name: "Ifenna", class: "C", age: 10},
    { name: "Livinus", class: "D", age: 11},
    { name: "John", class: "A", age: 6},
    { name: "Sarah", class: "B", age: 5},
    { name: "David", class: "C", age: 7},
    { name: "Jane", class: "D", age: 11},
    { name: "Mike", class: "A", age: 12},
    { name: "Victor", class: "B", age: 9 },
    { name: "Amaka", class: "C", age: 7 },
    { name: "Groovy", class: "D", age: 11},
  ];
//console.log(STUDENTS);

 
function findStudentsByName(name) {
    let result = [];
    for (let i = 0; i < STUDENTS.length; i++){
        if (STUDENTS[i].name == name) {
            result.push(STUDENTS[i]);
        }
    }
    return result;
 
}

function insertNewStudents() {
    for (let i = 0; i < STUDENTS.length; i++){ 
        if (STUDENTS[i]){ 
            return STUDENTS.push ({name: "Dean", class: "B", age: 8});  
        } 
    }
}

function filterStudentsByAge(){
    for (let i = 0; i < STUDENTS.length; i++) {
        if (STUDENTS[i].age <= 10) {
            return STUDENTS.filter((student) => student.age <= 10);
        }
   }
}     


function sortStudentsByAge() { 
    let result = [];
    for (let i = 0; i < STUDENTS.length; i++){ 
           STUDENTS.sort((a, b) => a.age - b.age);
    }
    return result
}

// Find student by name in the array
let sylva = findStudentsByName("Sylva");
//console.log(findStudentsByName("Sylva")); 


// Inserts new student to the array
insertNewStudents("Dean", "B", 8);
console.log(STUDENTS);

// Filter students whoose age are less than 10 years.
let filteredStudents = filterStudentsByAge();
//console.log(filterStudentsByAge())

// Sort students by age in ascending order
sortStudentsByAge();
//console.log(STUDENTS);