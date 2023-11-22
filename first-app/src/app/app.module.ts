import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MessaggiComponent } from './messaggi/messaggi.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InOutParentComponent } from './child-parent-example/in-out-parent/in-out-parent.component';
import { InChildComponent } from './child-parent-example/in-child/in-child.component';
import { OutChildComponent } from './child-parent-example/out-child/out-child.component';
import { StudenteParentComponent } from './studente/studente-parent/studente-parent.component';
import { StudenteInChildComponent } from './studente/studente-in-child/studente-in-child.component';
import { StudenteOutChildComponent } from './studente/studente-out-child/studente-out-child.component';
import { StudentiServiceContainerComponent } from './studenti-service/studenti-service-container/studenti-service-container.component';
import { StudentiServiceTableComponent } from './studenti-service/studenti-service-table/studenti-service-table.component';
import { StudentiServiceFormComponent } from './studenti-service/studenti-service-form/studenti-service-form.component';
import { ObservableContainerComponent } from './observable/observable-container/observable-container.component';
import { ObserverComponent } from './observable/observer/observer.component';
import { LogEmitterComponent } from './subject/log-emitter/log-emitter.component';
import { SubjectContainerComponent } from './subject/subject-container/subject-container.component';
import { ReceiverAComponent } from './subject/receiver-a/receiver-a.component';
import { ReceiverBComponent } from './subject/receiver-b/receiver-b.component';
import { AirportTableComponent } from './httpclient/airport-table/airport-table.component';
import { ArtistListComponent } from './spotify/artist-list/artist-list.component';
import { SpotifyContainerComponent } from './spotify/spotify-container/spotify-container.component';

@NgModule({
  declarations: [
    AppComponent,
    MessaggiComponent,
    DataBindingComponent,
    InOutParentComponent,
    InChildComponent,
    OutChildComponent,
    StudenteParentComponent,
    StudenteInChildComponent,
    StudenteOutChildComponent,
    StudentiServiceContainerComponent,
    StudentiServiceTableComponent,
    StudentiServiceFormComponent,
    ObservableContainerComponent,
    ObserverComponent,
    LogEmitterComponent,
    SubjectContainerComponent,
    ReceiverAComponent,
    ReceiverBComponent,
    AirportTableComponent,
    ArtistListComponent,
    SpotifyContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
