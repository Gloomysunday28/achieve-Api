function Person() {}
Person.prototype.a = 1
function Children() {}
Object.setPrototypeOf(Children.prototype, Person.prototype)