import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the ColaboradoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-colaboradores',
  templateUrl: 'colaboradores.html',
})
export class ColaboradoresPage {
  dados:any
  items:any
  empresas:any
  empresaFiltro:any
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider) {
    this.dados =[]
    this.empresas = []
    this.items = []
  }

  ionViewWillLoad() {
    this.service.selectColab().subscribe(
      data=>{this.dados = data, this.items = data}
    )
    this.initializeItems()
    this.initializeEmpresas()
  }
    initializeEmpresas(){
      this.service.selectEmp().subscribe(
        data=>this.empresas = data
      )
    }
    initializeItems() {
      this.items = this.dados;
    }

    getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.Nome.toLowerCase().indexOf(val.toLowerCase()) > -1)
      })
     }
    }

    inserirColab(nome:any,empresa:any){
      this.service.inserirColab(nome,empresa).subscribe(data=>console.log(data));
      this.service.selectColab().subscribe(
        data=>{this.dados = data, this.items = data},

      )
      this.initializeItems()
      this.initializeEmpresas()
      alert("Dados inseridos!")
    }
  }



