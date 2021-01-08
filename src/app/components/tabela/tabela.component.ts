import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ListaControleLancamento } from 'src/app/models/model';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-tabela',
    templateUrl: 'tabela.component.html',
    styleUrls: ['./tabela.component.scss']
})

export class TabelaComponent implements OnInit {

    listaControleLancamento: any = [];
    displayedColumns: string[] = ['dataLancamento', 'descricao', 'numero', 'situacao', 'dataConfirmacao', 'dadosBancarios', 'valor'];
    dataSource: any;

    constructor(private apiService: ApiService) { }

    ngOnInit() {
        this.apiService.getListaControleLancamento()
        .subscribe(res => {
            this.listaControleLancamento = res.listaControleLancamento;
            this.dataSource = new MatTableDataSource<ListaControleLancamento>(this.listaControleLancamento);
            console.log(this.listaControleLancamento);
        });
    }
}