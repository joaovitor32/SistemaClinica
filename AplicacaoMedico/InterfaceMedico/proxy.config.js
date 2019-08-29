const proxy = [
  {
    context: '/api',
    target: 'http://localhost:8080/AplicacaoMedico/',
    pathRewrite: {'^/api' : ''},
    secure:false,
    changeOrigin:true,
  }
];
module.exports=proxy;
