/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subjects.ts" />
/// <reference path="./subjects/Cpp.ts" />

export const cTeacher: Subjects.Teacher = {
    experienceTeachingC: 10
}

export const cpp = new Subjects.Cpp();
console.log("C++");

cpp.setTeacher(cTeacher);

console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

export const java = new Subjects.Java();
console.log("Java");

java.setTeacher(cTeacher);

console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

export const react = new Subjects.React();
console.log("React");

react.setTeacher(cTeacher);

console.log(react.getRequirements());
console.log(react.getAvailableTeacher());


