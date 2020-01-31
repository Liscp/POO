const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const ruta = express.Router(); 

const DecoyDuck = require('./src/DecoyDuck');
const MallardDuck = require('./src/MallardDuck');
const RedheadDuck = require('./src/RedheadDuck');
const RubberDuck = require('./src/RubberDuck');

const _DecoyDuck = new DecoyDuck;
const _MallardDuck = new MallardDuck;
const _RedheadDuck = new RedheadDuck;
const _RubberDuck = new RubberDuck;
//const Duck = new Duck;

ruta.route('/pato')
    .get((req,res) => {
        res.json(_MallardDuck.fly())
    })
app.use(ruta)
app.listen(port, () => {
    console.log(`Runing on port ${port}`)
});