import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateComponent } from './components/translate/translate.component';
import { SynonymComponent } from './components/synonym/synonym.component';
import { TranslateService } from './services/translate.service';
import { SynonymService} from './services/synonym.service';
import { LanguagecodeService } from './services/languagecode.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatButtonModule} from '@angular/material/button';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatRadioModule} from '@angular/material/radio';
import { MatSelectModule} from '@angular/material/select';
import { MatSliderModule} from '@angular/material/slider';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import{MatIconModule} from '@angular/material/icon';
import{MatSidenavModule} from '@angular/material/sidenav';
import{BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatListModule} from '@angular/material/list';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslateComponent,
    SynonymComponent,
    FooterComponent,
    AboutComponent,
    
  ],
  imports: [
    MatAutocompleteModule,
    MatIconModule,
     MatButtonModule,
     MatCheckboxModule,
     MatDatepickerModule,
     MatFormFieldModule,
     MatInputModule,
     MatRadioModule,
     MatSelectModule,
     MatSliderModule,
     MatSlideToggleModule,
     MatSidenavModule,
     MatListModule,
     ScrollingModule,
    BrowserAnimationsModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [LanguagecodeService, SynonymService, TranslateService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
