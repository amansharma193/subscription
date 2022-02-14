import mongoose from "mongoose";

const subscriptionSchema=mongoose.Schema({
  purchasedAt:{type:Number},
  userId:{type:String},
  transactionId:{type:String},
  validTill:{type:Number},
  price:{type:Number}
})

const Subscription = mongoose.model('Subscription',subscriptionSchema);
export default Subscription;


