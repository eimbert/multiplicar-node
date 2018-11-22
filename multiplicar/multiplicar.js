const fs = require('fs');

let listarTabla = (base, limite) => {
    let data = '';
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un número');
            return;
        }

        for (let x = 1; x <= limite; x++) {
            data += (`${base} * ${x} = ${base*x}\n`);
        }
        resolve(data);
    });
}

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un número');
            return;
        }
        let data = '';
        for (let x = 1; x < 10; x++) {
            data += `${base} * ${x} = ${x*base}\n`;
        }

        fs.writeFile(`tabla del ${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla del ${base}.txt`);
        });
    });
}

module.exports.crearArchivo = crearArchivo;
module.exports.listarTabla = listarTabla;