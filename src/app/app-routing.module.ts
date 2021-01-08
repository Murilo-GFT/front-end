import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraficoComponent } from './components/grafico/grafico.component';
import { InfoComponent } from './components/info/info.component';
import { TabelaComponent } from './components/tabela/tabela.component';

const routes: Routes = [
  { path: 'tabela', component: TabelaComponent },
  { path: 'grafico', component: GraficoComponent },
  { path: '', component: InfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
