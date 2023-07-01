import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FuncionariosComponent } from './views/funcionarios/funcionarios.component';
import { LoginComponent } from './views/login/login.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { HomeComponent } from './views/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionariosComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  // Essa classe eu tive que importa-la manualmente, para que mude as paginas ao clicar Em (login,cadastro, funcionarios)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
