class User {
  #nameValue;
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this.#nameValue;
  }
  set name(name) {
    if (name === "") {
      throw new Error("Name field of user cannot be empty");
    }
    this.#nameValue = name;
  }
}
const user = new User("Lakshay");
console.log(user.name);
user.name = "saini";
console.log(user.#nameValue);
