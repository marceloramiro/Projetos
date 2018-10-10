import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the ColaboradorCorletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  ionViewWillLoad(){
    this.initializeItem(this.dados.Codigo);
  }
  initializeItem(codigo){
    this.service.selectCorlet(codigo).subscribe(data=>this.corlet = data)
  }
  }
