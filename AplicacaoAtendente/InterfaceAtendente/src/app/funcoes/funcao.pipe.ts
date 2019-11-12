import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'funcao'
})
export class FuncaoPipe implements PipeTransform {

  transform(funcoes,dataInput): any {
    let regex=new RegExp(dataInput,'gi');
    let retorno=[];
    if(dataInput!=undefined){
      funcoes=funcoes.filter(funcoes=>{
        if(funcoes.nome.match(regex)){
          retorno.push(funcoes);
        }
      })
    }else{
      retorno=funcoes;
    }
    return retorno;
  }

}
