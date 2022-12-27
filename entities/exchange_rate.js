import mongoose from 'mongoose'


const model = new mongoose.Schema({
  src: String,
  tgt: String,
  rate: Number,
  date: String,
})

export const ExchangeRate = mongoose.model('ExchangeRate', model)
