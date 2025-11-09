interface DirectorInterface {
    workFromHome(): string;
    getCofeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCofeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome():  string {
        return "Working from home";
    }

    getCofeeBreak(): string {
        return "Gettiing a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to diretor tasks";
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
    return " Cannot Work from home";
    }

    getCofeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

function createEmployees(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    return new Director
}

type Subjects = "Math" | "History";

function teachClass(todayClass:Subjects): string {
    if (todayClass === "Math") {
        return "Teaching Math";
    } else if (todayClass === "History") {
        return "Teachhing History";
    }  
}

// Example usage
console.log(teachClass("Math"));     // Output: Teaching Math
console.log(teachClass("History"));  // Output: Teaching History

