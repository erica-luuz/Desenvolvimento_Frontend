import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FuncionariosComponent } from "./views/funcionarios/funcionarios.component";
import { HomeComponent } from "./views/home/home.component";
import { LoginComponent } from "./views/login/login.component";
import { CadastroComponent } from "./views/cadastro/cadastro.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'funcionarios', component: FuncionariosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }


