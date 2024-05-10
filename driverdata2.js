import mongoose from "mongoose";
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    Nin: {
        type: String
      },
    FrontViewOfDriverLicense: {
        type: Buffer,
        default: '' ,
        required: true,
    },
    BackViewOfDriversLicense: {
        type: Buffer,
        default: '',
        required: true,
    },
    VehicleFrontView: {
        type:Buffer,
        default: ''
    },
    VehicleBackView : {
        type:Buffer,
        default: ''
    },
    VehicleLeftView : {
        type:Buffer,
        default: ''
    },
    VehicleRightView : {
        type:Buffer,
        default: ''
      },
    NumberofSeats : {
        type:String,
    },

});

const Image2 = mongoose.model("Image2", imageSchema);
export default Image2
        