import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http, Headers, Response, ResponseOptions} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  api:string="https://unenriched-moments.000webhostapp.com/apiLeo/";

  constructor(public http: HttpClient) {

  }
  //Select
  selectColab(){
    return this.http.get(this.api+'apiRecColab.php');
  }
  selectEmp(){
    return this.http.get(this.api+'apiRecEmp.php');
  }
  selectCorlet(codigo){
    return this.http.get(this.api+'apiRecCorlet.php?Codigo='+codigo);
  }
  //Insert
  inserirColab(nome,empresa){
    return this.http.get(this.api+'apiInsColab.php?Nome='+nome+'&Empresa='+empresa);
  }
  inserirEmp(){
    return this.http.get(this.api+'apiInscEmp.php');
  }
  inserirCorlet(codigo){
    return this.http.get(this.api+'apiInsCorlet.php?Codigo='+codigo);
  }
  //Update
  updateColab(){
    return this.http.get(this.api+'apiRecColab.php');
  }
  updateEmp(){
    return this.http.get(this.api+'apiRecEmp.php');
  }
  updateCorlet(codigo){
    return this.http.get(this.api+'apiRecCorlet.php?Codigo='+codigo);
  }
  //Delet
  delColab(){
    return this.http.get(this.api+'apiRecColab.php');
  }
  delEmp(){
    return this.http.get(this.api+'apiRecEmp.php');
  }
  delCorlet(codigo){
    return this.http.get(this.api+'apiRecCorlet.php?Codigo='+codigo);
  }

}
