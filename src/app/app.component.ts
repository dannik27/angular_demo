import {Component, OnInit} from '@angular/core';
import {BackendService} from './backend.service';

@Component({
  selector: 'app-root',
  providers: [BackendService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'My new tittle';

  constructor (private backend: BackendService) { }

  ngOnInit(): void {
    this.backend.getData('http://kokoserver.me:8080/person/').subscribe(data => {
      console.log(data);
    });
  }



}
