# Comandos usados na aula

    ng new nome-do-projeto  || cria uma aplicação angular
    ng serve --open  || executa a aplicação  (ng s -o)
    ng generate component nome-do-componente  || Cria um novo componente ( ng g c nome-do-componente)
    ng generate service nome-do-service   || Cria um novo serviço  ( ng n s nome-do-serviço)



# alguns códigos acrescidos na pasta app.components.html
    router-outlet    || ele fica assim:     <router-outlet></router-outlet>

# alguns códigos acrecidos em app-routing.module.ts
    
    na linha : const routes: Routes = [    acrescentar:
                 { path: '', component: HomeComponent }
                 ];                                            || Aqui sempre acrescentamos as rotas do nosso projeto.A primeira está vazia, pq ela é nossa home, as    outras     é necessário colocar os nomes                                                