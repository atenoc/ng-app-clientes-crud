import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes:Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }

delete(cliente:Cliente){
  Swal.fire({
    title: `Estás Seguro que quieres eliminar el cliente: ${cliente.nombre} ${cliente.apellido}?`,
    text: "No podrás revertir esto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminar!',
    cancelButtonText: 'No, cancelar!'
  }).then((result) => {
    if (result.value) {
      /*si dan clic en si, eliminar */
      this.clienteService.deleteCliente(cliente.id).subscribe(
        response => {
          //quitar del arreglo el cliente eliminado
          this.clientes = this.clientes.filter(cli => cli != cliente)
          //mostramos mensaje
          Swal.fire(
            '¡Notificación!',
            `El cliente ${cliente.nombre} ha sido eliminado.`,
            'success'
          )
        }
      )


    }
  })
  }

}
