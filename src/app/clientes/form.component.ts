import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private cliente: Cliente = new Cliente()
  private titulo:string = "Info clientes";

  constructor(private clienteService:ClienteService,
              private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.cargarCliente() //para editar
  }

  cargarCliente():void{
    this.activatedRoute.params.subscribe(
      params=>{
        let id = params['id']
        if(id){
          this.clienteService.getCliente(id).subscribe(
            (cliente) => this.cliente=cliente  )
        }
      }
    )
  }

  public create(): void{
    //console.log(this.cliente);

    this.clienteService.createCliente(this.cliente)
    .subscribe(cliente => {
      this.router.navigate(['/clientes'])
      swal.fire('Información',`Cliente ${cliente.nombre} creado con éxito`,'success')
      }
    );
  }

  update():void{
    this.clienteService.updateCliente(this.cliente).subscribe(
      cliente => {
        this.router.navigate(['/clientes'])
        swal.fire('Notificación',`Cliente ${cliente.nombre} actualizado con éxito`,'success')
      }
    )
  }

}
