import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import * as jsPDF from 'jspdf';
import { Chart } from 'chart.js';
import { ColorpickProvider } from '../../providers/colorpick/colorpick';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('content') content:ElementRef;
    @ViewChild('doughnutCanvas') doughnutCanvas;
    @ViewChild('doughnutCanvas2') doughnutCanvas2;
    @ViewChild('lineCanvas') lineCanvas;

    doughnutChart: any;
    doughnutChart2: any;
    corlet:any = []
    xy = 0
    data = []
    data2 = []
    empNome;
    dados;
    items;
    empresas;
  constructor(public colorpick:ColorpickProvider,public navCtrl: NavController, public service: ServiceProvider, public menuCtrl:MenuController) { 
    this.dados =[]
    this.items = []
    this.empresas = []
  }
  

  public downloadPDF(){
    //donwload pdf from original canvas
      var canvas = this.doughnutCanvas2.nativeElement
      //creates image
      var canvasImg = canvas.toDataURL("image/png/;base64", 1.0);
      var logo = "https://scontent.fcgh10-1.fna.fbcdn.net/v/t1.0-9/32764883_1661851937255632_56107575854235648_n.png?_nc_cat=104&_nc_ht=scontent.fcgh10-1.fna&oh=308a29f5f6f079ec0de53d9f3f2beb69&oe=5C45823F"
      //creates PDF from img
      var doc = new jsPDF('landscape');
      doc.setFontSize(20);
      doc.text(120, 15, "Grafico CORLET");
      doc.addImage(logo,'jpg',15,5,25,25)
      doc.addImage(canvasImg, 'png', 10, 30, 280, 170 );
      doc.save('Relatorio Corlet.pdf');
    }


  ionViewWillEnter(){
    this.createChart();
  }

  ionViewDidEnter(){
    this.menuCtrl.open();
    this.initializeEmpresas();
  }

  initializeEmpresas(){
    this.service.selectEmp().subscribe(
      data=>this.empresas = data
    )
  }

  createChart(){
    
    this.doughnutChart2 = new Chart(this.doughnutCanvas2.nativeElement,{type: 'bar',
    data: {
        labels: ["Pescoco",
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
        "Perna_D"],
        datasets: this.data2,
    },options: {
      legend: {
      labels: {
          fontColor: "black",
          fontSize: 18
      },
  },
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }],
          xAxes: [{
            ticks: {
                fontColor: "black",
            }
        }]
      }
  }
  })
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement,{type: 'bar',
    data: {
        labels: ["Pescoco",
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
        "Perna_D"],
        datasets: this.data,
    },options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      }
  }
  })
  }

  addData2(chart, data,label,color) {
    this.data2.push({
      label:label,
      data: [],
      backgroundColor: [
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
      ],
      borderWidth: 1
  })
    data.forEach(dado => {
      chart.data.datasets.forEach(element => {
        element.data.push(dado)
      });
    });
    
   // chart.data.datasets[1].data.push(500,100);
    
    chart.update();
}
removeData(chart,chart2) {
  this.data.pop()
    chart.data.datasets.forEach(element => {
      element.data.pop()
});
this.data2.pop()
chart2.data.datasets.forEach(element => {
  element.data.pop()
});
  
  chart.update();
  chart2.update();
}
  addData(chart, data,label,color) {
    this.data.push({
      label:label,
      data: [],
      backgroundColor: [
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
        color,
      ],
      borderWidth: 1
  })
    data.forEach(dado => {
      chart.data.datasets.forEach(element => {
        element.data.push(dado)
      });
    });
    
   // chart.data.datasets[1].data.push(500,100);
    
    chart.update();
}
iniGrafic(diaInicial,diaFinal,empresa){
  let label = diaInicial+" a "+diaFinal;
  let cor =this.colorpick.setColor()
  this.service.selectCorlet2(diaInicial,diaFinal,empresa).subscribe(dados=>{
  this.addData(this.doughnutChart,this.tiraMedia(dados),label,cor);
  this.addData2(this.doughnutChart2,this.tiraMedia(dados),label,cor);
})}

randColors(){

}

tiraMedia(dados){
  let x = 0
  let pescoco         = []
  let regiao_cervical = []
  let costas_superior = []
  let costas_medio    = []
  let costas_inferior = []
  let bacia           = []
  let ombro_e         = []
  let braco_e         = []
  let cotovelo_e      = []
  let punho_e         = []
  let antebraco_e     = []
  let mao_e           = []
  let coxa_e          = []
  let perna_e         = []
  let ombro_d         = []
  let braco_d         = []
  let cotovelo_d      = []
  let antebraco_d     = []
  let punho_d         = []
  let mao_d           = []
  let coxa_d          = []
  let perna_d         = []
  let teste = 0
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  for (var key in dados) {
    //console.log(key)
   pescoco[key]=         Number.parseInt(dados[key].Pescoco);
   regiao_cervical[key]= Number.parseInt(dados[key].Regiao_cervical);
   costas_superior[key]= Number.parseInt(dados[key].Costas_superior);
   costas_medio[key]=    Number.parseInt(dados[key].Costas_medio);
   costas_inferior[key]= Number.parseInt(dados[key].Costas_inferior);
   bacia[key]=           Number.parseInt(dados[key].Bacia);
   ombro_e[key]=         Number.parseInt(dados[key].Ombro_E);
   braco_e[key]=         Number.parseInt(dados[key].Braco_E);
   cotovelo_e[key]=      Number.parseInt(dados[key].Cotovelo_E);
   punho_e[key]=         Number.parseInt(dados[key].Punho_E);
   antebraco_e[key]=     Number.parseInt(dados[key].Antebraco_E);
   mao_e[key]=           Number.parseInt(dados[key].Mao_E);
   coxa_e[key]=          Number.parseInt(dados[key].Coxa_E);
   perna_e[key]=         Number.parseInt(dados[key].Perna_E);
   ombro_d[key]=         Number.parseInt(dados[key].Ombro_D);
   braco_d[key]=         Number.parseInt(dados[key].Braco_D);
   cotovelo_d[key]=      Number.parseInt(dados[key].Cotovelo_D);
   antebraco_d[key]=     Number.parseInt(dados[key].Antebraco_D);
   punho_d[key]=         Number.parseInt(dados[key].Punho_D);
   mao_d[key]=           Number.parseInt(dados[key].Mao_D);
   coxa_d[key]=          Number.parseInt(dados[key].Coxa_D);
   perna_d[key]=         Number.parseInt(dados[key].Perna_D);
   teste = teste + perna_e[key]
   //console.log(teste +""+x)
   x++
}
let dataCorlet:Array<any>
dataCorlet = [0]
return dataCorlet =[
  Math.floor(pescoco.reduce(reducer)/pescoco.length),
  Math.floor(regiao_cervical.reduce(reducer)/regiao_cervical.length),
  Math.floor(costas_superior.reduce(reducer)/costas_superior.length),
  Math.floor(costas_medio.reduce(reducer)/costas_medio.length),
  Math.floor(costas_inferior.reduce(reducer)/costas_inferior.length),
  Math.floor(bacia.reduce(reducer)/bacia.length),
  Math.floor(ombro_e.reduce(reducer)/ombro_e.length),
  Math.floor(braco_e.reduce(reducer)/braco_e.length),
  Math.floor(cotovelo_e.reduce(reducer)/cotovelo_e.length),
  Math.floor(punho_e.reduce(reducer)/punho_e.length),
  Math.floor(antebraco_e.reduce(reducer)/antebraco_e.length),
  Math.floor(mao_e.reduce(reducer)/mao_e.length),
  Math.floor(coxa_e.reduce(reducer)/coxa_e.length),
  Math.floor(perna_e.reduce(reducer)/perna_e.length),

  Math.floor(ombro_d.reduce(reducer)/ombro_d.length),
  Math.floor(braco_d.reduce(reducer)/braco_d.length),
  Math.floor(cotovelo_d.reduce(reducer)/cotovelo_d.length),
  Math.floor(punho_d.reduce(reducer)/punho_d.length),
  Math.floor(antebraco_d.reduce(reducer)/antebraco_d.length),
  Math.floor(mao_d.reduce(reducer)/mao_d.length),
  Math.floor(coxa_d.reduce(reducer)/coxa_d.length),
  Math.floor(perna_d.reduce(reducer)/perna_d.length)
]
}
  
  downloadTeste(){
    let canvas = this.doughnutCanvas2.nativeElement
    download(canvas, 'myimage.jpg');
    function download(canvas, filename) {
      /// create an "off-screen" anchor tag
      var lnk = document.createElement('a'), e;
    
      /// the key here is to set the download attribute of the a tag
      lnk.download = filename;
    
      /// convert canvas content to data-uri for link. When download
      /// attribute is set the content pointed to by link will be
      /// pushed as "download" in HTML5 capable browsers
      lnk.href = canvas.toDataURL("image/jpg;base64");
    
      /// create a "fake" click-event to trigger the download
      if (document.createEvent) {
        e = document.createEvent("MouseEvents");
        e.initMouseEvent("click", true, true, window,
                         0, 0, 0, 0, 0, false, false, false,
                         false, 0, null);
    
        lnk.dispatchEvent(e);
      } 
    }
  }
}

  /*teste(){
    this.service.selectCorlet(2).subscribe(dados=>{
      console.log(dados)
      let x = 0
      let pescoco         = []
      let regiao_cervical = []
      let costas_superior = []
      let costas_medio    = []
      let costas_inferior = []
      let bacia           = []
      let ombro_e         = []
      let braco_e         = []
      let cotovelo_e      = []
      let punho_e         = []
      let antebraco_e     = []
      let mao_e           = []
      let coxa_e          = []
      let perna_e         = []
      let ombro_d         = []
      let braco_d         = []
      let cotovelo_d      = []
      let antebraco_d     = []
      let punho_d         = []
      let mao_d           = []
      let coxa_d          = []
      let perna_d         = []
      let teste = 0
      const reducer = (accumulator, currentValue) => accumulator + currentValue
      for (var key in dados) {
        //console.log(key)
       pescoco[key]=         Number.parseInt(dados[key].Pescoco);
       regiao_cervical[key]= Number.parseInt(dados[key].Regiao_cervical);
       costas_superior[key]= Number.parseInt(dados[key].Costas_superior);
       costas_medio[key]=    Number.parseInt(dados[key].Costas_medio);
       costas_inferior[key]= Number.parseInt(dados[key].Costas_inferior);
       bacia[key]=           Number.parseInt(dados[key].Bacia);
       ombro_e[key]=         Number.parseInt(dados[key].Ombro_E);
       braco_e[key]=         Number.parseInt(dados[key].Braco_E);
       cotovelo_e[key]=      Number.parseInt(dados[key].Cotovelo_E);
       punho_e[key]=         Number.parseInt(dados[key].Punho_E);
       antebraco_e[key]=     Number.parseInt(dados[key].Antebraco_E);
       mao_e[key]=           Number.parseInt(dados[key].Mao_E);
       coxa_e[key]=          Number.parseInt(dados[key].Coxa_E);
       perna_e[key]=         Number.parseInt(dados[key].Perna_E);
       ombro_d[key]=         Number.parseInt(dados[key].Ombro_D);
       braco_d[key]=         Number.parseInt(dados[key].Braco_D);
       cotovelo_d[key]=      Number.parseInt(dados[key].Cotovelo_D);
       antebraco_d[key]=     Number.parseInt(dados[key].Antebraco_D);
       punho_d[key]=         Number.parseInt(dados[key].Punho_D);
       mao_d[key]=           Number.parseInt(dados[key].Mao_D);
       coxa_d[key]=          Number.parseInt(dados[key].Coxa_D);
       perna_d[key]=         Number.parseInt(dados[key].Perna_D);
       teste = teste + perna_e[key]
       //console.log(teste +""+x)
       x++
    }
    let dataCorlet:Array<any>
    dataCorlet = [0]
    dataCorlet =[
      Math.floor(pescoco.reduce(reducer)/pescoco.length),
      Math.floor(regiao_cervical.reduce(reducer)/regiao_cervical.length),
      Math.floor(costas_superior.reduce(reducer)/costas_superior.length),
      Math.floor(costas_medio.reduce(reducer)/costas_medio.length),
      Math.floor(costas_inferior.reduce(reducer)/costas_inferior.length),
      Math.floor(bacia.reduce(reducer)/bacia.length),
      Math.floor(ombro_e.reduce(reducer)/ombro_e.length),
      Math.floor(braco_e.reduce(reducer)/braco_e.length),
      Math.floor(cotovelo_e.reduce(reducer)/cotovelo_e.length),
      Math.floor(punho_e.reduce(reducer)/punho_e.length),
      Math.floor(antebraco_e.reduce(reducer)/antebraco_e.length),
      Math.floor(mao_e.reduce(reducer)/mao_e.length),
      Math.floor(coxa_e.reduce(reducer)/coxa_e.length),
      Math.floor(perna_e.reduce(reducer)/perna_e.length),

      Math.floor(ombro_d.reduce(reducer)/ombro_d.length),
      Math.floor(braco_d.reduce(reducer)/braco_d.length),
      Math.floor(cotovelo_d.reduce(reducer)/cotovelo_d.length),
      Math.floor(punho_d.reduce(reducer)/punho_d.length),
      Math.floor(antebraco_d.reduce(reducer)/antebraco_d.length),
      Math.floor(mao_d.reduce(reducer)/mao_d.length),
      Math.floor(coxa_d.reduce(reducer)/coxa_d.length),
      Math.floor(perna_d.reduce(reducer)/perna_d.length)
    ]
    console.log(dataCorlet[21])
    var teste3 = Object.keys(dados[0])
    function teste55(){
      let array = []
      for(let x = 4;x<teste3.length;x++){
        array.push(teste3[x]);
    }
    return array;
  }
  
    teste55().forEach(element => {
      return element
    });
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
        type: 'bar',
        data: {
            labels: [}
            
            datasets: [{
                
                label: 'Grau de ****',
                data:[
                  dataCorlet[0],
                  dataCorlet[1],
                  dataCorlet[2],
                  dataCorlet[3],
                  dataCorlet[4],
                  dataCorlet[5],
                  dataCorlet[6],
                  dataCorlet[7],
                  dataCorlet[8],
                  dataCorlet[9],
                  dataCorlet[10],
                  dataCorlet[11],
                  dataCorlet[12],
                  dataCorlet[13],
                  dataCorlet[15],
                  dataCorlet[16],
                  dataCorlet[17],
                  dataCorlet[18],
                  dataCorlet[19],
                  dataCorlet[20],
                  dataCorlet[21],
                ],
            backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#FF6384",
                ]
            }]
        },
        options: {
          scales: {
              yAxes: [{
                      display: true,
                      ticks: {
                          beginAtZero: true,
                          max: 4
                      }
                  }]
          },
        }
    });//fin charts
  })
  }

}*/
