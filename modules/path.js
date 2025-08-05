const path = require("path");

console.log(path.basename(__filename)); // apenas o nome do arquivo atual
console.log(path.dirname(__filename)); // o diretório do arquivo atual
console.log(path.extname(__filename)); // a extensão do arquivo atual
console.log(path.parse(__filename)); // criar um objeto com informações do arquivo atual
console.log(path.join(__dirname, "test")); // caminho juntar caminhos de arquivos com o diretório atual
