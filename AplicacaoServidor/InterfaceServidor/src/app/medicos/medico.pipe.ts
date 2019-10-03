import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'medico'
})
export class MedicoPipe implements PipeTransform {

  transform(medicos, dataInput){
    let retorno=[];
    let regex = new RegExp(dataInput,'gi');
    if(dataInput!=undefined){
      medicos=medicos.filter(medico=>{
        if(medico.nome.match(regex)){
          retorno.push(medico);
        }
      })
    }else{
      retorno=medicos;
    }
    return retorno;
  }

}
