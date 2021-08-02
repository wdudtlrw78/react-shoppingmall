const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    title: {
      type: String,
      maxlength: 50,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      defalut: 0,
    },
    images: {
      type: Array,
      default: [],
    },
    sold: {
      type: Number,
      maxlength: 100,
      defalut: 0,
    },

    continents: {
      type: Number,
      default: 1,
    },
    views: {
      type: Number,
      defalut: 0,
    },
  },
  { timestamps: true } // timestamps : 자동으로 등록, 업데이트시간등 등록
);

// Control Search Results with Weights
productSchema.index(
  {
    title: 'text',
    description: 'text',
  },
  {
    weights: {
      title: 5,
      description: 1,
    },
  }
);

const Product = mongoose.model('Product', productSchema);

module.exports = { Product };
