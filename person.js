class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  static people = [];

  static addPerson(person) {
    Person.people.push(person);
  }

  static getPeople() {
    // people copy
    return Person.people.filter(() => true);
  }

  static removePerson(id) {
    Person.people.splice(id, 1);
  }

  getName() {
    return this._name;
  }

  getAge() {
    return this._age;
  }
}

export default { 
  _addPerson: (name, age) => Person.addPerson(new Person(name, age)), 
  _removePerson: Person.removePerson, 
  _getPeople: Person.getPeople 
};
