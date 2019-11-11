const proxy = [
  {
    context: '/api',
    target: 'http://localhost:8080/AplicacaoServidor/',
    //pathRewrite: {'^/api' : ''},
    secure:false,
  }
];
module.exports=proxy;
