import User from "./User.js";

export default class Subscriber extends User {
  #pages;
  #groups;
  #monetize;

  constructor(id, name, userName, email, pages, groups, monetize) {
    super(id, name, userName, email);
    this.#pages = pages;
    this.#groups = groups;
    this.#monetize = monetize;
  }