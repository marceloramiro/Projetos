import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import * as jsPDF from 'jspdf';
import { Chart } from 'chart.js';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('content') content:ElementRef;
  @ViewChild('barCanvas') barCanvas;
    @ViewChild('doughnutCanvas') doughnutCanvas;
    @ViewChild('lineCanvas') lineCanvas;

    barChart: any;
    doughnutChart: any;
    lineChart: any;
    corlet:any = []
  constructor(public navCtrl: NavController, public service: ServiceProvider) {

  }

  public downloadPDF(){
    let doc = new jsPDF();

    let specialElementHandlers = {
      '#editor':function(element,renderer){
        return true;
      }
    };

    let content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML,15,15,{
      'width':190,
      'elementHandlers': specialElementHandlers
    });

    doc.save('test.pdf');
  }

  ionViewWillEnter(){
    this.service.selectCorlet(2).subscribe(dados=>{
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

        type: 'radar',
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
            datasets: [{
                label: '# of Votes',
                data:[
                  dados[0].Pescoco,
            dados[0].Regiao_cervical,
            dados[0].Costas_superior,
            dados[0].Costas_medio,
            dados[0].Costas_inferior,
            dados[0].Bacia,
            dados[0].Ombro_E,
            dados[0].Braco_E,
            dados[0].Cotovelo_E,
            dados[0].Punho_E,
            dados[0].Antebraco_E,
            dados[0].Mao_E,
            dados[0].Coxa_E,
            dados[0].Perna_E,
            dados[0].Ombro_D,
            dados[0].Braco_D,
            dados[0].Cotovelo_D,
            dados[0].Antebraco_D,
            dados[0].Punho_D,
            dados[0].Mao_D,
            dados[0].Coxa_D,
            dados[0].Perna_D
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
        }

    });
  })
}

}
