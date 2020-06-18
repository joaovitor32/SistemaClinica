export const setData=(dataHora)=>{
    return dataHora.split("-")[2].slice(0,2)+"/"+dataHora.split("-")[1]+"/"+dataHora.split("-")[0]+dataHora.split("-")[2].slice(2,8);
}