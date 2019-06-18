var path = require('path');
 
module.exports = {
  entry: "./app/app.js", // входная точка - исходный файл
  output:{
      path: path.resolve(__dirname, './public'),     // путь к каталогу выходных файлов - папка public
      publicPath: '/public/',
      filename: "bundle.jsx"       // название создаваемого файла
  },
  module:{
      rules:[   //загрузчик для js
          {
              test: /\.js?$/, // определяем тип файлов
              exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
              loader: "babel-loader",   // определяем загрузчик
              options:{
                  presets:["@babel/preset-env", "@babel/preset-react"]    // используемые плагины
              }
          }
      ]
  }
}