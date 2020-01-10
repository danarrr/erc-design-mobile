const path = require( 'path' );
const fs = require( 'fs' );

const ENV = process.env.ENV;
const CWD = process.cwd();

let dirs = fs.readdirSync( path.join( CWD, './src' ) );
let entry = {};
for ( let i = 0; i < dirs.length; i++ ) {
    entry[dirs[i]] = `./src/${dirs[i]}/src/index.jsx`;
}

let config = {
    devtool: 'source-map',
    entry: entry,
    output: {
        publicPath: "../"
    },
    devServer: {
        host: '0.0.0.0', // zuzuche
        port: '4000'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'react', 'stage-0']
                }
            }, {
                test: /\.[s]?css$/,
                loader: 'style!css!sass'
            }
        ]
    },
};

// if ( ENV === 'development' ) {
//     config.resolve = {
//         alias: {
//             'zzc-design-mobile': path.resolve(
//                 __dirname,
//                 '../es/index.js'
//             )
//         }
//     };
// }

module.exports = config;