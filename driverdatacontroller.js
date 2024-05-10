import Image from './driverdata.js';


 

  export const imageRouter = async (req, res) => {
    
 {
            const {
                FirstName,
                LastName,
                Gender,
                VehicleManufacturerAndModel,
                VehicleYear,
                VehiclePlateNumber,
                VehicleColor,
                
            } = req.body


            const newImage = new Image({
                FirstName,
                LastName,
                Gender,
                VehicleManufacturerAndModel,
                VehicleYear,
                VehiclePlateNumber,
                VehicleColor,
            })
            await newImage.save()
            console.log('registered succesfully',newImage)
            return res.redirect('driverProfileSetup2.html')
            ;
        }
    }


export default imageRouter