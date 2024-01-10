const fs = require('node:fs');
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { resolve } = require('node:path');
const { rejects } = require('node:assert');

const rl = readline.createInterface({ input, output });



const personal = (pertanyaan)=>{
    return new Promise((resolve,rejects)=>{
        rl.question(pertanyaan,(jawab)=>{
            resolve(jawab)
        })
    })
}

const hasil = (nama,email,hp)=>{
    const data = {
        nama,
        email,
        hp
    }
    
    const check = fs.readFileSync('api.json','utf-8')
    const datapribadi = JSON.parse(check)
    datapribadi.push(data)
    fs.writeFileSync('api.json',JSON.stringify(datapribadi))

    console.log("data berhasil ditambah")
    rl.close()
}

module.exports = {personal,hasil}