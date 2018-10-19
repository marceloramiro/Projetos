import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { UpdateColaboradoresPage } from '../update-colaboradores/update-colaboradores';
import { ToastController } from 'ionic-angular';
import { ColaboradorCorletPage } from '../colaborador-corlet/colaborador-corlet';
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
  key:number
  constructor(public toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider,public alertCtrl:AlertController) {
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
        return item.Nome!=null?(item.Nome.indexOf(val.toLowerCase()) > -1):null
      })
     }
    }
    colabPage(colab){
      this.navCtrl.push(ColaboradorCorletPage,{item:colab});
    }
    presentToast(message) {
      const toast = this.toastCtrl.create({
        message: message,
        duration: 3000,
        position:'middle'
      });
      toast.present();
    }

    inserirColab(nome:any,empresa:any){
      if((nome || empresa)==null || (nome || empresa)==undefined ||(nome || empresa)==''||(nome || empresa)==""){
        this.presentToast("Nome e Empresa OBRIGATÓRIO")
      }else{
        this.presentToast("Adicionado com SUCESSO!")
        this.service.inserirColab(nome,empresa);
        this.navCtrl.pop();
        this.navCtrl.push(ColaboradoresPage);
    }
    
    }

    delColab(codigo){
      this.service.delColab(codigo).subscribe((data)=>console.log(data))
    }
    updateColab(codigo,nome,empresa){
      let colaborador = {
        nome:nome,
        codigo:codigo,
        empresa:empresa,
      }
      let empresas = {
        empresa:this.empresas
      }
      console.log(colaborador)
      this.navCtrl.push(UpdateColaboradoresPage,{colaborador,empresas});
    }
  }



