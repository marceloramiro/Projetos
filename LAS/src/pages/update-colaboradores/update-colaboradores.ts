import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';


@IonicPage()
@Component({
  selector: 'page-update-colaboradores',
  templateUrl: 'update-colaboradores.html',
})
export class UpdateColaboradoresPage {
  colaborador:any;
  empresas:any;
  nColab:any;
  empresaDefault
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider) {
    this.colaborador = this.navParams.get('colaborador')
    this.empresas = this.navParams.get('empresas')
  }

  ionViewDidLoad() {
    this.nColab = this.colaborador.nome
  }

  updateColab(nome,empresa,codigo){
    if((empresa == undefined)||(empresa == "")||(empresa == null)){
      empresa = this.colaborador.empresa
    }
    if((nome == undefined)||(nome == "")||(nome == null)){
      nome = this.colaborador.nome
    }
    if((codigo == undefined)||(codigo == "")||(codigo == null)){
      codigo = this.colaborador.codigo
    }
    this.service.updateColab(codigo,empresa,nome);
  }

}
