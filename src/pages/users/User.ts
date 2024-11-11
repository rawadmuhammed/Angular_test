export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  biography: string;

  constructor(id: number, firstName: string, lastName: string, email: string, biography: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.biography = biography;
  }
}
