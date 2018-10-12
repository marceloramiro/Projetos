import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';


@IonicPage()
@Component({
  selector: 'page-empresas',
  templateUrl: 'empresas.html',
})
export class EmpresasPage {
  dados:any
  items:any
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider) {
    this.dados =[]
    this.items = []
  }

  ionViewDidLoad() {
    this.service.selectEmp().subscribe(
      data=>{this.dados = data, this.items = data}
    )
    this.initializeItems()
  }

    inserirEmpresa(nomeEmp){
      this.service.inserirEmp(nomeEmp);
      this.service.selectEmp().subscribe(
        data=>{this.dados = data, this.items = data}
      )
      this.initializeItems()
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
        return (item.EmpNome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
     }
    }
    delEmpresa(codigo){
      console.log(codigo)
    }
    updateEmpresa(codigo){
      console.log(codigo)
    }
}
