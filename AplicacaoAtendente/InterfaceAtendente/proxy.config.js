const proxy = [
    { 
      context: '/api',
      target: 'http://localhost:8080/AplicacaoServidor/',
      secure:false,
    }
  ];
  module.exports=proxy;