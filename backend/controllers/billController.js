const bill = require('../models/Bill')
const ApiFeatures = require('../utils/apiFeatures')

exports.addBill = async(req,res,next) =>{
    const {amount,billDate,paidDate,unitConsumed} = req.body
    const Bill = await user.create({
        amount,billDate,paidDate,unitConsumed
    })
    Bill.save()
    res.status(200).json('bill is added')
}

//single product details
exports.getBillDetails = async(req,res,next) =>{
    const Bill = await bill.findById(req.params.id)

    res.status(200).json(
        Bill
    )
}

exports.getBills = async(req,res,next) =>{
    const resultPerPage = 8;
    const billsCount = await bill.countDocuments();
    const apiFeature = new ApiFeatures(Product.find(),req.query).filter().pagination(resultPerPage)
    const bills = await apiFeature.query;
    res.status(200).json( 
        bills,
        billsCount,
        resultPerPage)   
}

exports.deleteBill = async(req,res,next) =>{
    const {id} = req.body
    const Bill = await bill.findById(id)

    await Bill.remove()
    res.status(200).json('bill is removed')   
}

exports.updateBill = async(req,res,next) =>{
    let Bill = await bill.findById(req.params.id)

    if(!Bill){
        res.status(200).json('no bill is present')
    }

    Bill = await user.findByIdAndUpdate(req.params.id,req.body)

    res.status(200).json('bill is updated')
}