import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { controleLancamento, totalControleLancamento } from '../mock/mock-json';
import { ControleLancamentoModel, TotalControleLancamentoGraficoModel } from '../models/model';

@Injectable({providedIn: 'root'})
export class ApiService {
    constructor() { }

    getTotalControleLancamentos(): Observable<TotalControleLancamentoGraficoModel[]> {
        return of(totalControleLancamento);
    }

    getListaControleLancamento(): Observable<ControleLancamentoModel> {
        return of(controleLancamento);
    }
}