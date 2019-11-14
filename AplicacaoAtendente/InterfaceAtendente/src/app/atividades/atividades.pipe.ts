import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'atividades'
})
export class AtividadesPipe implements PipeTransform {

  transform(atividades, dataInput:string): any {
    console.log(dataInput);
    let regex = new RegExp(dataInput, 'gi');
    let retorno=[]
    if(dataInput!=undefined){
        atividades=atividades.filter(atividade=>{
          if(atividade.nome.match(regex)){
             retorno.push(atividade);
          }
      })
    }else{
      retorno=atividades;
    }
    return retorno;
  }

}
