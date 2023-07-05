import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { ListagemComponent } from './components/views/listagem/listagem.component';
import { CadastrarComponent } from './components/views/cadastrar/cadastrar.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listaDeJogos', component: ListagemComponent},
  {path: 'cadastrar', component: CadastrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
