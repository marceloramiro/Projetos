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

  api:string="http://localhost/GIT/API/";

  constructor(public http: HttpClient) {

  }
  //Select
  selectColab(){
    return this.http.get(this.api+'getAlunos.php');
  }
  selectColabEmp(codigo){
    return this.http.get(this.api+'getAlunosEmp.php?codigo='+codigo);
  }
  selectEmp(){
    return this.http.get(this.api+'getEmp.php');
  }
  selectCorlet(codigo){
    return this.http.get(this.api+'getCorlet.php?codigo='+codigo);
  }
  //Insert
  inserirColab(nome,empresa){
    return this.http.post(this.api+'setAluno.php',{"nome":nome,"empresa":empresa}).subscribe((data)=>console.log(nome,empresa));
  }
  inserirEmp(nome){
    return this.http.post(this.api+'setEmp.php',{"nome":nome}).subscribe((data)=>console.log(data));
  }
  inserirCorlet(data){
    return this.http.post(this.api+'setCorlet.php',data).subscribe((data)=>console.log(data));
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
    return this.http.get(this.api+'delCorlet.php?codigo='+codigo);
  }

}
