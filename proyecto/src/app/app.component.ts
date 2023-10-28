import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PetQuitas';

  userType: string = '';

  public subscriber: Subscription | undefined;

  constructor(private router: Router, 
    @Inject(DOCUMENT) private document: any) {
    
  }

  ngOnInit() {

    this.subscriber = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
       console.log('The URL changed to: ' + event['url'])
       if(event['url']==='/' || event['url']==='/#servicios' || event['url']==='/#contacto' || event['url']==='/home' || event['url']==='/home#servicios' || event['url']==='/home#contacto'){
        this.document.body.classList.remove('body2');
        this.document.body.classList.add('body');
      }else{
        this.document.body.classList.remove('body');
        this.document.body.classList.add('body2');
      }

    });

    // Intenta obtener el userType desde localStorage al cargar el componente
    const storedUserType = localStorage.getItem('userType');
    if (storedUserType) {
      this.userType = JSON.parse(storedUserType);
    }
  }

  changeUserTypeLanding(elementRef: any) {
    elementRef.addLandingEvent.subscribe(
      (data: string) => {
        this.userType = data;
        localStorage.setItem('userType', JSON.stringify(data));
      }
    )
  }

  changeUserTypeCliente(elementRef: any) {
    elementRef.addClienteloginEvent.subscribe(
      (data: string) => {
      this.userType = data; 
      localStorage.setItem('userType', JSON.stringify(data));
      }
    )
  }

  changeUserTypeVeterinario(elementRef: any) {
    elementRef.addVeterianriologinEvent.subscribe(
      (data: string) => {
        this.userType = data;
        localStorage.setItem('userType', JSON.stringify(data));

      }
    )
  }

  changeUserTypeAdmin(elementRef: any) {
    elementRef.addAdminloginEvent.subscribe(
      (data: string) => {
        this.userType = data;
        localStorage.setItem('userType', JSON.stringify(data));

      }
    )
  }

}
