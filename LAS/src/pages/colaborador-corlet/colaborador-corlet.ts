import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, IonicModule } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-colaborador-corlet',
  templateUrl: 'colaborador-corlet.html',
})
export class ColaboradorCorletPage {

  dados:any
  corlet:any = []
  corpo = []
  arrayCorpo:any[][]

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider) {
    this.arrayCorpo =[[],[],[],[]]
    this.dados = navParams.get('item')
    this.corpo = ["Pescoco",
      "Regiao_cervical",
      "Costas_superior",
      "Costas_medio",
      "Costas_inferior",
      "Bacia",
      "Ombro_E",
      "Braco_E",
      "Cotovelo_E",
      "Punho_E",
      "Antebraco_E",
      "Mao_E",
      "Coxa_E",
      "Perna_E",
      "Ombro_D",
      "Braco_D",
      "Cotovelo_D",
      "Antebraco_D",
      "Punho_D",
      "Mao_D",
      "Coxa_D",
      "Perna_D"]

  }
  inserirCorlet(data:any[]){
    this.service.inserirCorlet(data);
    this.initializeItem(this.dados.Codigo);
  }
  ionViewWillLoad(){
    this.initializeItem(this.dados.Codigo);
  }
  initializeItem(codigo){
    this.service.selectCorlet(codigo).subscribe(data=>{this.corlet = data,console.log(data)})
  }
  deleteCorlet(codigo){
    this.service.delCorlet(codigo).subscribe(data=>console.log(data));
    this.initializeItem(this.dados.Codigo);
  }
  }
