import { HttpClientModule } from '@angular/common/http';
import { CRUDService } from './services/app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Rutas
import { AppModuleRouting } from './app.module.routing';

// Importar Componentes
import { AppComponent } from './app.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';

// Decorador
@NgModule({
  declarations: [
    AppComponent,
    CustomInputComponent,
    NavbarComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppModuleRouting,
    HttpClientModule,
    FormsModule
  ],
  providers: [CRUDService],
  bootstrap: [AppComponent]
})
export class AppModule { }
