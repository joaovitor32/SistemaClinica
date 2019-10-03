import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { MedicoService } from '../services/medico/medico.service';

@Component({
	selector: 'app-medicos',
	templateUrl: './medicos.component.html',
	styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

	medicos=[];
	dataInput:string;

	constructor(public sideNav:SidenavComponent, private medicoService:MedicoService) { }

	ngOnInit() {
		this.sideNav.activeView="Médicos";
		this.popularTabela();
	}
	popularTabela(){
		this.medicoService.listaDeMedicos().subscribe(medicos=>{
			for(let medico of medicos){
				this.medicos.push(medico);
			}
		})
	}
}
