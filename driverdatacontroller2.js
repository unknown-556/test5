import Image2 from './driverdata2.js';


 

  export const imageRouter2 = async (req, res) => {
    
 {
            const {
                Nin,
                FrontViewOfDriverLicense,
                BackViewOfDriversLicense,
                VehicleFrontView,
                VehicleBackView,
                VehicleLeftView,
                VehicleRightView,
                NumberOfSeats,
            } = req.body


            const newImage2 = new Image2({
                Nin,
                FrontViewOfDriverLicense,
                BackViewOfDriversLicense,
                VehicleFrontView,
                VehicleBackView,
                VehicleLeftView,
                VehicleRightView,
                NumberOfSeats,
            })
            await newImage2.save()
            console.log('registered succesfully',newImage2)
            return res.redirect('driverProfileSetup3.html')
            ;
        }
    }


export default imageRouter2