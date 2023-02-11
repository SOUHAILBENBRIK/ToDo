import { Component } from '@angular/core';
import { AlloService } from '../allo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(public _m : AlloService){
  }
  value={
    "name":"",
    "index":0
  };
  delete(index:number){
    this._m.list.forEach(element => {
      if (index<element["index"]) {
        element['index']--;
      }
      console.log(this._m.index+"delete");
    });
    this._m.list.splice(index,1);
    this._m.index=this._m.index-1;
    this._m.value['index']--;
    this.value={
      "name":"",
      "index":0
    };
  }
  edit(val:any){
    this.value=val;
  
  }
  save(){
    if(this.value['name'] != ""){
      this._m.list[this.value['index']]['name']=this.value['name'];
      this.value={
        "name":"",
        "index":0
      };
    }else{
      alert('edit what ???');
    }
  }

}
