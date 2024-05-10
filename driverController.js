import Driver from './driver.model.js';
import  cryptoHash  from 'crypto';
import { signUpValidator, signInValidator } from './auth.validator.js';
import { formatZodError } from './errorMessage.js';

function hashValue(value) {
    const hash = cryptoHash.createHash('sha256');
    hash.update(value);
    return hash.digest('hex');
}
 
 function comparePasswords(inputPassword, hashedPassword ) {
    return hashValue(inputPassword) === hashedPassword;
  }
 

  export const driversignUp = async (req, res) => {
    const registerResults = signUpValidator.safeParse(req.body)
    if (!registerResults) {
        return res.status(400).json(formatZodError(registerResults.error.issues))
    }
    try {
        const {phoneNumber, email}=req.body 
        const driver = await Driver.findOne({for:[{email},{phoneNumber},]})
        if (driver) {
            res.status(409).json({messaage:'User with email already exists'})
        } else {
            const {
                email,
                password,
                confirmpassword,
                city,
                phoneNumber,
            } = req.body

             if (password !== confirmpassword) {
                 return res.status(403).json({ message: 'Passwords do not match' });
              }   
            const encryption = hashValue(password, confirmpassword)
            const newDriver = new Driver({
                email,
                password: encryption,
                confirmpassword: encryption,
                city,
                phoneNumber,
            })
            await newDriver.save()
            console.log('registered succesfully',newDriver)
            return res.redirect('driverlogin.html')
            ;
        }
    } catch (error) {
        res.status(500).json({message: error.message})
        console.log('INTERNAL SERVER ERROR',error.message)
    }
}


export const driversignIn = async (req, res, next) => {
    const loginResulta = signInValidator.safeParse(req.body)
    if (!loginResulta) {
        return res.status(400).json(formatZodError(loginResulta.error.issues))
    } try {
        const {email, password} = req.body
        const driver = await Driver.findOne({email})
        if (!driver) {
            return res.status(400).json({message: 'User does not exist'})
        }
        const comparePass = comparePasswords(password, driver.password)
        if (!comparePass) {
            return res.status(400).json({message: 'Password is incorrect'})
        }
        
        
        console.log( 'Login successful', driver)
        return res.redirect('dashboard.html')
    } catch (error) {
        res.status(500).json({message: error.message})
        console.log('INTERNAL SERVER ERROR', error.message)
    }

 
    
    


}

export default (driversignUp, driversignIn);
