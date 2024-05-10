import mongoose from 'mongoose'

const driverSchema = mongoose.Schema({

  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  confirmpassword: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true
  },

},
{
  timeStamps: true
}
);


const Driver = mongoose.model('Driver',driverSchema)
export default Driver