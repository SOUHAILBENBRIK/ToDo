import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlloService {

  constructor() { }
  list : any[]=[];
  index : number =0;
  value : any= {
    "name" : "",
    "index" : this.index
  };
}
