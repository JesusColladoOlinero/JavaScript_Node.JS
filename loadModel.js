'use strict';
// interface MyTeams {
//     id: string;
//     name: number;
// }

const data = "[{ \"id\":\"1\", \"name\":\"Real Madrid\" }, { \"id\":\"2\", \"name\":\"Atletico de Madrid\" }, { \"id\":\"3\", \"name\":\"Leganes\" }, { \"id\":\"4\", \"name\":\"Real Sociedad\" }, { \"id\":\"5\", \"name\":\"Chelsea\" }, { \"id\":\"6\", \"name\":\"Getafe\" }, { \"id\":\"7\", \"name\":\"Cacereño\" }, { \"id\":\"8\", \"name\":\"Sporting\" }, { \"id\":\"9\", \"name\":\"Castilla\" }]";

exports.getInitData = (index) => {
    //let obj: MyTeams[] = JSON.parse(data);
    let obj = JSON.parse(data);

    if (obj[index] != undefined){
        return obj[index];
    }
    else{
        return undefined;
    }
};
