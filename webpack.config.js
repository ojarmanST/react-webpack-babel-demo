const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // Where files should be sent once they are bundled
  // path mentions the name of the directory to be created where all the bundled files will be stored. 
  // We have named our folder dist, which is a common practice.
  // And filename is the name we set for the new bundled file that will be created after webpack runs 
  // it's magic(basically bundles all the js code into one file)
 output: {
   path: path.join(__dirname, '/dist'),
   filename: 'index.bundle.js'
 },
  /* webpack 5 comes with devServer which loads in development mode.
   - devServer is used to quickly develop an application, which is contrary
   to the production mode, which takes slighlty more time to build the application 
   since it minifies the file, which doesn't happen in development mode.
   - watchContentBase triggers a full page reload when any changes are made in any file.It is disabled by default.
   */
 devServer: {
   port: 3000,
   watchContentBase: true
 },
  /* Rules of how webpack will take our files, complie & bundle them for the browser 
  - test is where we mention the extension of file which needs to be targetted by the specific loader. 
    All .js or .jsx files need to be bundled by the babel loader. 
  - exclude is where we mention files that are needed to be ignored by the bundler.
  - Same goes for the css files.It is important to take in note that the array of use :['style-loader', 'css-loader'] 
    ^^needs to be written in that exact order
  - when webpack bundles the css files,this is the order it follows : 
    - It first runs the css-loader which turns css files to common js.
    - Then it runs style-loader which extracts css into files as string.
  */
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /nodeModules/,
       use: {
         loader: 'babel-loader'
       }
     },
     {
       test: /\.css$/,
       use: ['style-loader', 'css-loader']
     }
   ]
 },
 /* Lastly we add a plugin called HtmlWebpackPlugin which ensures that the 
    webpack knows which html file template to follow for running the app. */
 plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
}