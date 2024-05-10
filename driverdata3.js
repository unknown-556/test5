import mongoose from "mongoose";
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    DailyRoute : {
        type:String,
    },
    PriceOfTripPerPerson: {
        type: String,
    },
    
    NameOfBank: {
       type: String,
    },
    
    AccountName: {
        type: String,
    },
    
    BankAccountNumber: {
       type: String,
    },  
    
    
    PickDayTimeForInterview: {
        type: String,
    },
});




const Image3 = mongoose.model("Image3", imageSchema);
export default Image3
        