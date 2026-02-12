class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  intro() {
    return `Hello, my name is ${this.name}.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  intro() {
    return `${super.intro()} I am studying ${this.major}.`;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  intro() {
    return `${super.intro()} I teach ${this.subject}.`;
  }
}

export default function Inheritance() {
  const people = [
    new Person("Alex Johnson", 30),
    new Student("Emma Watson", 20, "Computer Science"),
    new Teacher("Dr. James Wilson", 45, "Mathematics"),
  ];

  return (
  <div className="min-h-screen bg-gray-100 flex justify-center pt-16 px-4">
    <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
      
      <h2 className="text-2xl font-bold text-center mb-6">
        Person Class Hierarchy
      </h2>

      {people.map((p, i) => (
        <div
          key={i}
          className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4 hover:shadow-md transition"
        >
          <h3 className="font-semibold text-lg">
            {p.name}
            <span className="text-sm text-gray-500 ml-2">
              ({p.constructor.name})
            </span>
          </h3>

          <p className="text-sm text-gray-600 mt-1">
            Age: {p.age}
          </p>

          <p className="mt-2 italic text-gray-700">
            {p.intro()}
          </p>
        </div>
      ))}
    </div>
  </div>
);

}
