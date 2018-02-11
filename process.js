'use strict';

const { getInitData } = require('./loadModel.js');
const { saveTeam } = require('./model.js');

let status = 'STOP';

function onLoadData(id) {
    var data = getInitData(id);

    if (data === undefined) {
        return;
    }

    saveTeam(data).then(() => {
        setTimeout(() => onLoadData(id + 1), 1000);
    });

    // // Carga de JSON en pantalla
    // setTimeout(() => { 
    //     var data = getInitData(id);

    //     if (data === undefined) {
    //         return;
    //     }

    //     console.log(data);

    //     onLoadData(id+1);        
    // }, 2000);
}

process.on('message', (msg) => {
    if (msg.cmd === 'START' && status === 'STOP') {    
        onLoadData(parseInt(msg.id));
        status = 'START';
    }
    if (msg.cmd === 'STOP' && status === 'START') {
        process.exit(3);
    }
});