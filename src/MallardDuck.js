const Duck = require('./Duck');
class MallardDuck extends Duck{
    constructor(display){
        super(display)
    }
    fly(){
        console.log('Yo vuelo');
    }

    quack(){
        console.log('Yo digo Cuack');
    }

}

module.exports = MallardDuck;