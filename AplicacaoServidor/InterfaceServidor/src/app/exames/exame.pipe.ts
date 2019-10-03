import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exame'
})
export class ExamePipe implements PipeTransform {

  transform(atividades,dataInput): any {
    let regex=new RegExp(dataInput,'gi');
    let retorno=[];
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
