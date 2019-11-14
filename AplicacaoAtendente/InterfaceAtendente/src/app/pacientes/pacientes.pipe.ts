import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pacientes'
})
export class PacientesPipe implements PipeTransform {

  transform(pacientes, dataInput:string): any {
    console.log(dataInput);
    let regex = new RegExp(dataInput, 'gi');
    let retorno=[]
    if(dataInput!=undefined){
        pacientes=pacientes.filter(paciente=>{
          if(paciente.nome.match(regex) || paciente.cpf.match(regex)){
             retorno.push(paciente);
          }
      })
    }else{
      retorno=pacientes;
    }
    return retorno;
  }

}
