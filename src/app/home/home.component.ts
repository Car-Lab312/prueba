import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  data: any;

  ObjetoImg = {
    imagen: 'https://flagcdn.com/w320/cl.png' //imagen de chiles
    // imagen: 'https://flagcdn.com/w320/ar.png' //imagen de argentina
    // imagen: 'https://flagcdn.com/w320/pe.png' //imagen del peru
  }

  constructor(private apiService: ApiService) {}

  ngOnInit(): void{
    this.llenarData();
  }

  llenarData(){
    this.apiService.getData().subscribe(data =>{
      this.data = data;
      console.log(this.data);
    })
  }
}
