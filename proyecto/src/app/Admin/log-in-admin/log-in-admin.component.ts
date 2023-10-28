import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-log-in-admin',
  templateUrl: './log-in-admin.component.html',
  styleUrls: ['./log-in-admin.component.css']
})
export class LogInAdminComponent {

  @Output()
  addAdminloginEvent = new EventEmitter<String>();

  usuario: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) {}
  validarAdmin() {
    if(this.usuario === 'admin' && this.password === 'admin'){
      this.addAdminloginEvent.emit('admin');
      this.router.navigate(["/admin/dashboard"]);
    }
  }

}
