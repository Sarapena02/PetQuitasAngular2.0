import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { AdminService } from 'src/app/Services/Admin/admin.service';

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

  errorMessage: string = '';

  constructor(
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

    formUser: User = {
      cedula: '',
      contrasenia: ''
    };

  login(form: any){ 
    this.adminService.LogIn(this.formUser).subscribe(
      (data: any) => {
        if(data !== null){
          // Realiza la redirección a la página deseada
          localStorage.setItem('token', String(data));
          this.addAdminloginEvent.emit('admin');
          this.router.navigate(["/admin/dashboard"]);
        } else {
          this.errorMessage = 'usuario o contraseña incorrecta';
        }
      }
    )
    }
}
