import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'funcao'
})
export class FuncaoPipe implements PipeTransform {
  transform(funcoes, codigo): string {
    return funcoes.filter(funcao => {
      if (funcao.codSubgrupo == codigo) return funcao;
    });
  }
}
