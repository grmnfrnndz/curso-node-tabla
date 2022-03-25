const argv = require('yargs')
    .option(
        'b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Toma la base de la tabla de multiplicar'

        }
      
    )
    .option(
        'h', {
            alias: 'hasta',
            type: 'number',
            demandOption: false,
            default: 10,
            describe: 'Limite de la tabla de multiplicar'

        }
      
    )
    .option(
        'l', {
            alias: 'listar',
            type: 'boolean',
            demandOption: false,
            default: false,
            describe: 'Muestra la tabla en consola'
        }
    )
    .check( (argv, options) => {
        if(isNaN(argv.b)) {
            throw 'la base tiene que ser un numero'
        }
        return true;
    })
    .argv;

module.exports = argv;