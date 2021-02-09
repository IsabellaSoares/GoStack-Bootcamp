module.exports = {
  presets: [
    '@babel/preset-env', // converte o JS para algo que o navegador entende de acordo com o ambiente
    '@babel/preset-react' // adiciona as funcionalidades do React na conversão do preset-env
  ],
  plugins: [['@babel/plugin-transform-runtime', { regenerator: true }]]
}