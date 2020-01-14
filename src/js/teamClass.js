export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (this.members.has(member)) throw new Error('This character is already in the team.');
    this.members.add(member);
  }

  addAll(...member) {
    member.forEach((element) => this.members.add(element));
  }

  toArray() {
    return Array.from(this.members);
  }
}
