const Duck = require('./Duck');
class RubberDuck extends Duck {
    quack(){
        console.log('Yo digo Cuack');
    }

}

module.exports = RubberDuck;