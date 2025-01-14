interface Person {
  id: number;
  name: string;
}

interface Teacher extends Person {
  //  id: number;
  // name: string;
  subjects: string[];
}

interface Student extends Person {
  //  id: number;
  // name: string;
  age: number;
}

let teacher: Teacher = { id: 1, name: "Bruno", subjects: ["JS", "TS"] };

let student: Student = { id: 1, name: "Rodrigo", age: 23 };
