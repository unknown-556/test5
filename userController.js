import User from './pass.model.js';
import  cryptoHash  from 'crypto';
import { signUpValidator, signInValidator } from './auth.validator.js';
import { formatZodError } from './errorMessage.js';

function hashValue(value) {
    const hash = cryptoHash.createHash('sha256');
    hash.update(value);
    return hash.digest('hex');
}
 
 function comparePasswords(inputPassword, hashedPassword) {
    return hashValue(inputPassword) === hashedPassword;
  }
 

  export const signUp = async (req, res) => {
    const registerResults = signUpValidator.safeParse(req.body)
    if (!registerResults) {
        return res.status(400).json(formatZodError(registerResults.error.issues))
    }
    try {
        const {FirstName, LastName, phoneNumber, email}=req.body 
        const user = await User.findOne({for:[{email},{phoneNumber},{FirstName},{LastName}]})
        if (user) {
            res.status(409).json({messaage:'User with email already exists'})
        } else {
            const {
                FirstName,
                LastName,
                password,
                verifypassword,
                email,
                phoneNumber,
            } = req.body

             if (password !== verifypassword) {
                 return res.status(403).json({ message: 'Passwords do not match' });
              }   
            const encryption = hashValue(password, verifypassword)
            const newUser = new User({
                FirstName,
                LastName,
                password: encryption,
                verifypassword :encryption,
                email,
                phoneNumber,
            })
            await newUser.save()
            console.log('User registered succesfully',newUser)
            return res.redirect('signInPage.html')
            ;
        }
    } catch (error) {
        res.status(500).json({message: error.message})
        console.log('INTERNAL SERVER ERROR',error.message)
    }
}








export const signIn = async (req, res, next) => {
    const loginResults = signInValidator.safeParse(req.body)
    if (!loginResults) {
        return res.status(400).json(formatZodError(loginResults.error.issues))
    } try {
        const {phoneNumber, password} = req.body
        const user = await User.findOne({phoneNumber})
        if (!user) {
            return res.status(400).json({message: 'User is not found'})
        }
        const comparePass = comparePasswords(password, user.password)
        if (!comparePass) {
            return res.status(400).json({message: 'Password is incorrect'})
        }
        
        console.log('login succesful',user)
        return res.redirect('dashboard.html') 
    } catch (error) {
        res.status(500).json({message: error.message})
        console.log('INTERNAL SERVER ERROR', error.message)
    }
}   
    
    


export const logout = async (req, res, next) => {

}

export default {signUp, signIn};
