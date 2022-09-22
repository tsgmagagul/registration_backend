//CRUD - Create, Read, Update Delete
const UserModel = require('../models/usermodels');
const catchAsync = require('../utils/catchAsync');
//const errors = validationResult(req);

//CREATE USER
exports.createUser = catchAsync(async(req, res, next)=>{
    const userType = await UserModel.create(req.body);

    //INSERT INTO [tablename] VALUES...
    res.status(200).json({
        status:"success",
        message: "User Created Successfully",
        userType
    })
});



exports.getUser = catchAsync(async(req, res, next)=>{
    const userType  = await UserModel.findAll()
    if(!userType){
        return next(new Error('Users not found!'))
    }
    else
     return res.send(userType);
});

exports.VerifyEmail = catchAsync(async(req, res,next)=>{
    const emailExists = await User.findOne({ where: { user_email: 'user_email' } });
    if (emailExists ) {
      res.json("Email already registered")
    }
});

/*exports.comparePassword = catchAsync(async(req,res,next)=>{

    const {password,confirm_password}=req.body;
const UserData = await loginModel.findOne({where:{password}}).catch((err)=>{
    console.log("Error:",err);
});

if(!UserData)
return res.json({message:"PASSWORD DOES NO MATCH"});

if(UserData.password !== confirm_password)
return res.json({message:"PASSWORD DOES NO MATCH"});
else{
    return res.json({message:"Match"});
}


})*/

