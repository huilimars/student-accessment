export class Student {

    id: number;
    firstname: string;
    lastname: string;
    class: string;
    yearofpassing: number;
    percentageofmarks: number;

	constructor(values: Object = {}) {
	  //Constructor initialization
      Object.assign(this, values);
  }

}
