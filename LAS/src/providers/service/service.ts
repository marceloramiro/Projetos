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

  api:string="http://localhost/API/";

  constructor(public http: HttpClient) {

  }
  //Select
  selectColab(){
    //ok
    return this.http.get(this.api+'getAlunos.php');
  }
  selectColabEmp(codigo){
    //ok
    return this.http.get(this.api+'getAlunosEmp.php?codigo='+codigo);
  }
  selectEmp(){
    //ok
    return this.http.get(this.api+'getEmp.php');
  }
  selectCorlet(codigo){
    //ok
    return this.http.get(this.api+'getCorlet.php?codigo='+codigo);
  }
  selectCorlet1(codigo){
    //ok
    return this.http.get(this.api+'getCorlet1Grafic.php?codigo='+codigo);
  }
  selectCorlet2(codigo){
    //ok
    return this.http.get(this.api+'getCorlet2Grafic.php?codigo='+codigo);
  }
  //Insert
  inserirColab(nome,empresa){
    //ok
    return this.http.post(this.api+'setAluno.php',{"nome":nome,"empresa":empresa}).subscribe((data)=>console.log(nome,empresa));
  }
  inserirEmp(nome){
    //quase
    return this.http.post(this.api+'setEmp.php',{"nome":nome}).subscribe((data)=>console.log(data));
  }
  inserirCorlet(data){
    return this.http.post(this.api+'setCorlet.php',data).subscribe((data)=>console.log(data));
  }
  //Update
  updateColab(codigo,empresa,nome){
    //ok
    let data = {
      'codigo':codigo,
      'empresa':empresa,
      'nome':nome
    }
    console.log(data)
    return this.http.post(this.api+'updateAlunos.php',data).subscribe(data=>console.log(data));
  }
  updateEmp(codigo,nome){
    //ok
    let data = {
      'codigo':codigo,
      'nome':nome
    }
    console.log(data)
    return this.http.post(this.api+'updateEmpresa.php',data).subscribe(data=>console.log(data));
  }
  updateCorlet(codigo){
    return this.http.get(this.api+'apiRecCorlet.php?Codigo='+codigo);
  }
  //Delete
  delColab(codigo){
    //ok
    return this.http.get(this.api+'delAlunos.php?codigo='+codigo);
  }
  delEmp(){
    return this.http.get(this.api+'apiRecEmp.php');
  }
  delCorlet(codigo){
    return this.http.get(this.api+'delCorlet.php?codigo='+codigo);
  }

  maxAluno(){
    return this.http.get(this.api+'maxAluno.php');
  }
}
