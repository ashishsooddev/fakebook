export default class User {
  #id;
  #fullName;
  #userTag;
  #email;

  constructor(id, fullName, userTag, email) {
    this.#id = id;
    this.#fullName = fullName;
    this.#userTag = userTag;
    this.#email = email;
  }

  getInfo() {
    return {
      id: this.#id,
      name: this.#fullName,
      userName: this.#userTag,
      email: this.#email
    };
  }

  get name() {
    return this.#fullName;
  }
}