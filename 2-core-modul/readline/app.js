const readline = require('node:readline');
const fs = require('node:fs');

const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({input,output})

const data = {
    q1 :"siapa namamu : ",
    q2 :"dimana rumahmu : ",
}

// rl.question( data.q1, (nama) => {
//     rl.question(data.q2,(alamat)=>{
//         console.log(`namaku :${nama} \n umurku :${alamat} `)
//         rl.close()
//     })
// })

// contoh penggunakan readline pada node js


rl.question( 'siapa namamu :', (nama) => {
    rl.question('dimana rumahmu :',(alamat)=>{
        const datane = {
            nama:nama,
            alamat:alamat
        }
        const file = fs.readFileSync('datadiri.json','utf-8')
        const pribadi = JSON.parse(file)
        
        pribadi.push(datane)

        fs.writeFileSync('datadiri.json',JSON.stringify(pribadi))
        console.log('terimakasih mengisi data')
        
        rl.close()
    })
})
