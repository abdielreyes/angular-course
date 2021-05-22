import {Md5} from 'ts-md5/dist/md5'
export class Todo {
  completed : boolean;
  description : string;
  id : string;
  constructor(desc:string){

    this.id = new Md5().appendStr(new Date().toString()).appendStr(desc).end().toString();
    this.completed = false;
    this.description = desc;
  }
}

