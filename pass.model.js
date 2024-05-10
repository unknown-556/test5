import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  FirstName: {
    type: String,

  },
  LastName: {
    type: String,

  },
  password: {
    type: String,
    required: true
  },
  verifypassword: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true
  },
  profilePic: {
    type: String,
    default: ''
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'male', 'female', 'Frog'],

  }
},
{
  timeStamps: true
}
);


const User = mongoose.model('User',userSchema)
export default User