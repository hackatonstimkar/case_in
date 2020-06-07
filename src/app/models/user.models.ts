export class UserModel {
  constructor(
    public name: string = "",
    public email: string = "",
    public category: string="",
    public cex: string='',
    public password: string = "",
    public id?: number
  ) { }
  build({ id , name, email, password, category, cex }): UserModel {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.category = category;
    this.cex = cex;
    return this;
  }
}
