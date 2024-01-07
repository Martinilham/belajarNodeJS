const fs = require('node:fs');

const data = fs.readFileSync('../writeFile/data1.txt')

console.log(data.toString())

// bisa menggunakan toString atau utf-8 (di sambing file)

 fs.readFile('../writeFile/data2.txt','utf-8',(err,data)=>{
    if(err) {
        console.log('eror blok')
    }
    console.log(`data berhasil di baca isinya ${data}`)
})