const fs = require('fs');
require('colors');


const crearArchivo = async (tabla = 5, listar=false, tope=10) => {
    try {
        let salida = '';
        let archivo = `./salida/tabla-${tabla}.txt`;
        
        for (let i = 1; i <= tope; i++){
            salida += `${tabla} * ${i} = ${i * tabla}`;
            if (i !== tope) salida += `\n`;
        }

        if (listar) {
            console.log('================================'.rainbow);
            console.log(`       Tabla del : ${tabla}     `.green);
            console.log('================================'.rainbow);
            console.log(salida.green);
        }    

        fs.writeFileSync(archivo, salida);

        return archivo;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}