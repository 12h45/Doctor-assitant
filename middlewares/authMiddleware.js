// // ab ham auhtoucation karneg wiht help of token 
// // secure our routes wiht token baisb  and authoirxaton
const jwt=require("jsonwebtoken");
// // token se related dta or token http request ke header mein hia 
// // authoization 
// // headder kenadar htoa authoirzaton hai target kar rhe hai 
// // bearer_token 

const tokenget=async(req,res,next)=>{
    try {
        const token=req.headers["authorization"].split(" ")[1];
        // console.log(token);

        jwt.verify(token,process.env.JWT_SECRET,(error,decoded)=>{
            if(error){
                console.log(error.message);
                res.status(401).send({
                    success:false,
                    message:"Auth failed"
                })
            }
            else{
                req.body.userId=decoded.id
                next();
                    
            }
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"auth failed"
        })
        
    }

}
// // const tokenget=async(req,res,next)=>{
    
// //     try {
// //         const token=req.headers["authorization"].split(" ")[1];
// //     // token ko jwt.verify karenge tiwht secret key of jwt 
// //     // ab iise decrypt karneg 
// //     jwt.verify(token,process.env.JWT_secret,(error,decode)=>{
// //         if(error){
// //             // console.log(token);
// //             res.status(200).send({
// //                 message:'auth failed',

// //                 success:false
// //             })
// //         }
// //         else{
// //             // id ko  decode karnege 
// //             req.body.userId=decode.id
// //             next();
// //         }
// //     })
// //     } catch (error) {
// //         console.log(error);
// //         res.status(200).send({
// //             message:"auth failed",
// //             success:false
// //         })
        
// //     }
// // }

module.exports=tokenget;
// const JWT = require("jsonwebtoken");

// module.exports = async (req, res, next) => {
//   try {
//     const token = req.headers["authorization"].split(" ")[1];
//     JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
//       if (err) {
//         return res.status(200).send({
//           message: "Auth Fialed",
//           success: false,
//         });
//       } else {
//         req.body.userId = decode.id;
//         next();
//       }
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(401).send({
//       message: "Auth Failed",
//       success: false,
//     });
//   }
// };