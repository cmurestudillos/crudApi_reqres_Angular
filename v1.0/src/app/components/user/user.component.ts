import { CRUDService } from '../../services/app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/users.interface';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare var Materialize: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {

  // Declaracion de variables
  public user: User;
  public currentUrl: string;

  constructor(private route: ActivatedRoute, private router: Router, private crud: CRUDService) { }

  ngOnInit() {
    this.route['data'].subscribe(
      response => {
        this.user = response['data']['data'];
        this.currentUrl = response['url'];
      }
    );
  }

  public updateRegister(id: number) {
    this.crud.put(`${this.currentUrl}/${id}`, this.user).subscribe(
      response =>  {
        // return this.http.post(this.currentUrl + "api/users", params, {headers: headers} );
        // console.log(this.user);
        Materialize.toast('El registro fue actualizado', 4000);
      }
    );
  }

}
