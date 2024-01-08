const readline = require('node:readline');
const fs = require('node:fs');

const { stdin: input, stdout: output } = require('node:process');

const pilih = readline.createInterface({input,output})



const inputData = ()=>{
    pilih.question("Masukan Nama : ",(nama) => {
        pilih.question("masukan Umur : ", (umur)=>{
            const datadiri = {
                nama:nama,
                umur:umur
            }
            const check = fs.readFileSync('api.json','utf-8')
            const datapribadi = JSON.parse(check)
            datapribadi.push(datadiri)
            fs.writeFileSync('api.json',JSON.stringify(datapribadi))

            console.log( `nama anda ${nama} umur anda ${umur}`)
            console.log("data berhasil ditambah")
        pilih.close()
        })
    })
   
}

const hapusData = ()=>{
    pilih.question("Masukan Nama : ",(nama) => {
        pilih.question("masukan Umur : ", (umur)=>{
            const datadiri = {
                nama:nama,
                umur:umur
            }
            const check = fs.readFileSync('api.json','utf-8')
            const datapribadi = JSON.parse(check)
            datapribadi.pop(datadiri)
            fs.writeFileSync('api.json',JSON.stringify(datapribadi))
            console.log('data anda dihapus')

        pilih.close()
        })
    })
}

pilih.question("1.Input Data \n 2. Delete Data 3.Cari Data",(pilihan) => {
    if(pilihan == "1") {
        inputData()
    } else if (pilihan == '2'){
        hapusData()
    }
})