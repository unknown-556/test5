import Image3 from './driverdata3.js';


 

  export const imageRouter3 = async (req, res) => {
    
 {
            const {
                DailyRoute,
                PriceOfTripPerPerson,
                NameOfBank,
                AccountName,
                BankAccountNumber,
                PickDayTimeForInterview,
            } = req.body


            const newImage3 = new Image3({
                
                DailyRoute,
                PriceOfTripPerPerson,
                NameOfBank,
                AccountName,
                BankAccountNumber,
                PickDayTimeForInterview,
            })
            await newImage3.save()
            console.log('registered succesfully',newImage3)
            return res.redirect('dashboard.html')
            ;
        }
    }


export default imageRouter3