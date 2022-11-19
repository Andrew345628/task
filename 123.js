//chcp 65001
const readlineSync = require('readline-sync');
todo = [];

function createTODO(value){
    for(i = 0; i < value; i++){
        todo.push(readlineSync.question('Введите TODO: '));
    }
}

function complete() {
    for(a = 0; a <= lenth; a++){
        index = readlineSync.keyInSelect(todo, 'Какой TODO завершить: ')
        var a = todo.indexOf(todo[index]);
        if (a !== -1) {
            todo.splice(a, 1);
        }
        if(todo.length == 0){
            console.log('\x1b[0mВсе задачи выполнены');
        }
    }
}
createTODO(readlineSync.question('Сколько будет TODO: '));
let lenth = todo.length;
complete();

console.log(todo);