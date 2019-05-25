import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { FriendsComponent } from './friends/friends.component';
import { HttpModule, BaseResponseOptions, BaseRequestOptions } from '@angular/http';
import { FilterPipe, FilterPipeModule } from 'ngx-filter-pipe';
import { AuthService } from './service/auth.service';
import { fakeBackendProvider } from './helpers/fake-backend';
import { MockBackend } from '@angular/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { MynavbarComponent } from './mynavbar/mynavbar.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    FriendsComponent,
    MynavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FilterPipeModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/home', pathMatch: 'full' },
      {path:'home', component:HomeComponent},
      {path:'contact', component:ContactComponent},
      {path : 'friends',component:FriendsComponent}
    ])
  ],
  providers: [AuthService,
    fakeBackendProvider,
    BaseRequestOptions,
    MockBackend
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
