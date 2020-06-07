export class BudgetModel {
  public id?: number;
  constructor(
    public score: string="",
    public category: string ="",
    public podcategory:string="",
    public sum: number
    ) { }

}
