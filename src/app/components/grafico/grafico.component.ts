import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-grafico',
    templateUrl: 'grafico.component.html',
    styleUrls: ['./grafico.component.scss']
})

export class GraficoComponent implements OnInit{
    controleLancamento: any = [];
    view: any = [900, 400];

    // options
    showLegend: boolean = true;
    showLabels: boolean = true;

    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C']
    };
    cardColor: string = '#232837';


    constructor(private apiService: ApiService) {}

    ngOnInit() {
      this.apiService.getTotalControleLancamentos()
      .subscribe(res => this.controleLancamento = res);
    }
}