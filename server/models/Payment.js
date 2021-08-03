const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema(
  {
    user: {
      type: Array,
      default: [],
    },
    data: {
      type: Array,
      default: [],
    },
    product: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true } // timestamps : 자동으로 등록, 업데이트시간등 등록
);

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = { Payment };
