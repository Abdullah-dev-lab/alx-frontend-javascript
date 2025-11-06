;
function printTeacher(firstName, lastName) {
    var teacher = { firstName: firstName, lastName: lastName };
    return "".concat(firstName, ". ").concat(lastName);
}
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
// Example usage:
var teacher1 = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    yearsOfExperience: 8,
    location: "New york",
    contract: false
};
console.log(teacher1);
var director1 = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    yearsOfExperience: 8,
    location: "New york",
    contract: false,
    numberOfReports: 17
};
console.log(director1);
