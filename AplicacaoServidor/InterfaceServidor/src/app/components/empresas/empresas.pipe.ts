import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empresas'
})
export class EmpresasPipe implements PipeTransform {

  transform(empresas, dataInput:string): any {
    console.log(dataInput);
    let regex = new RegExp(dataInput, 'gi');
    let retorno=[]
    if(dataInput!=undefined){
        empresas=empresas.filter(empresa=>{
          if(empresa.nome.match(regex) || empresa.cnpj.match(regex)){
             retorno.push(empresa);
          }
      })
    }else{
      retorno=empresas;
    }
    return retorno;
  }

}
