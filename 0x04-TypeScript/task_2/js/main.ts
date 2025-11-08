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

function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
}

function executeWork(employee: Director |  Teacher): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
}




