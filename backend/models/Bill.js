const mongoose = require('mongoose')
const billSchema = new mongoose.Schema({
    billDate:{
        type:"Date",   
    },
    paidDate:{
        type:"Date"
    },
    unitConsumed:{
        type:"Number"
    },
    amount:{
        type:"Number",
    },
}
)

module.exports = mongoose.model('Bill',billSchema)