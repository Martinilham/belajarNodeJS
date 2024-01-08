const readline = require('node:readline');

const { stdin: input, stdout: output } = require('node:process');

const pilih = readline.createInterface({input,output})

const inputData = ()=>{
    pilih.question("Masukan Nama : ",(nama) => {
        pilih.question("masukan Umur : ", (umur)=>{
            console.log(`nama anda ${nama} umur anda ${umur}`)
        pilih.close()      
        })
    })
   
}

module.exports = inputData()