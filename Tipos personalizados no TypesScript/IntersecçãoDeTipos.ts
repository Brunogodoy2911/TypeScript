type Person = {
  id: number;
  name: string;
};

type Teacher = Person & {
  subjects: string[];
};

type Student = Person & {
  age: number;
};

let teacher: Teacher;
let student: Student;
