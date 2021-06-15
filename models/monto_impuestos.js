'use strict'

var mongoose =  require('mongoose');

var Schema=  mongoose.Schema;

var ProjectSchema = Schema({
    iva:Number,
    isr:Number,
    ieps:Number,
    ispt:Number,
    ish:Number,
    isn:Number,
    rtp:Number,
    imss:Number,
    sar:Number,
    infonavit:Number
});

module.exports = mongoose.model('Monto_impuestos',ProjectSchema);