/*
inquirer npm package
qr-image npm package
native fs node module
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


const questions = [{
    name:"url_name",
    type:"input",
    message:"Enter any url you want to convert into QR Code : "
}];

inquirer.prompt(questions)
.then((answer)=>{
    console.log(answer.url_name);
    var code = qr.image(answer.url_name , {type : 'png'});
    var name = answer.url_name.split('.');
    const outputFilePath = name[1]+".png";
    // const outputStream = fs.createWriteStream(outputFilePath);
    code.pipe(fs.createWriteStream(outputFilePath));

    // outputStream.on("finish",()=>{
    //     console.log("successfully converted the given text to qr code ");
    // })
})
.catch((err)=>{
    console.log(err);
});



