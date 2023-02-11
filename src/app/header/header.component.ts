import { Component } from '@angular/core';
import { AlloService } from '../allo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(public _m : AlloService){

}

value ="";
add(){
  if(this.value.length==0){
    alert("no emty value please");
  }
  else {
    if(this._m.list.length>15){
      alert(" i think this is enought")
    }
  else{
  this._m.index++;
  this._m.value['name']=this.value;
  this.value="";
  this._m.list.push(this._m.value);
  this._m.value={
    "name" : "",
    "index" : this._m.index
  };}
}}
}
