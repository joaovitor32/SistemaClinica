import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'profissional'
})
export class ProfissionalPipe implements PipeTransform {

  transform(profissionais, dataInput){
    let retorno=[];
    let regex = new RegExp(dataInput,'gi');
    if(dataInput!=undefined){
      profissionais=profissionais.filter(profissional=>{
        if(profissional.nome.match(regex)){
          retorno.push(profissional);
        }
      })
    }else{
      retorno=profissionais;
    }
    return retorno;
  }

}
