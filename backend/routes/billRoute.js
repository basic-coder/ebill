const express = require('express');
const { getBills, addBill, deleteBill, updateBill, getBillDetails } = require('../controllers/billController');
const router = express.Router();


router.route('/bill').get(getBills).post(addBill)
router.route('/bill/:id').put(updateBill).delete(deleteBill).get(getBillDetails)

module.exports = router






