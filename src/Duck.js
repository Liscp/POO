class Duck {
    constructor(display){
        this._display=display;
    }
    display(){
       return this._display
    }

    swin(){
        console.log('Yo Nado');
    }

}

module.exports = Duck;