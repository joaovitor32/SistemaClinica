import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { PacienteService } from '../services/paciente/paciente.service';

@Component({
	selector: 'app-pacientes',
	templateUrl: './pacientes.component.html',
	styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

	pacientes=[];
	dataInput:string;

	constructor(public sideNav:SidenavComponent,private pacienteService:PacienteService) { }

	ngOnInit() {
		this.sideNav.activeView = "Pacientes";
		this.popularTabela();
	}
	popularTabela(){
		this.pacienteService.listaDePacientes().subscribe(pacientes=>{
			for(let paciente of pacientes){
				this.pacientes.push(paciente);
			}
		});
	}

}
