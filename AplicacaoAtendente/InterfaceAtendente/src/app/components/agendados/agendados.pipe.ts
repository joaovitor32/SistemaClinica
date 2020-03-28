import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agendados'
})
export class AgendadosPipe implements PipeTransform {

  transform(agendados, dataInput:string): any {
    console.log(dataInput);
    let regex = new RegExp(dataInput, 'gi');
    let retorno=[]
    if(dataInput!=undefined){
        agendados=agendados.filter(empresa=>{
          if(agendados.paciente.match(regex) || agendados.empresa.match(regex) || agendados.tipo_consulta.match(regex)){
             retorno.push(agendados);
          }
      })
    }else{
      retorno=agendados;
    }
    return retorno;
  }

}
