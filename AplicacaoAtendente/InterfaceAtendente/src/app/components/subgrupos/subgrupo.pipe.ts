import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subgrupo'
})
export class SubgrupoPipe implements PipeTransform {

  transform(subgrupos,dataInput){
    let retorno=[]
    let regex = new RegExp(dataInput,'gi');
    if(dataInput!=undefined){
      subgrupos=subgrupos.filter(subgrupo=>{
        if(subgrupo.nome.match(regex)){
          retorno.push(subgrupo);
        }
      })
    }else{
      retorno =subgrupos;
    }
    return retorno;
  }

}
