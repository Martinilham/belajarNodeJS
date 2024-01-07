const fs = require('node:fs');

fs.writeFileSync('data1.txt','Ini contoh mneulis file secara syncronus')


    fs.writeFile('data2.txt','Ini contoh mneulis file secara asyncronus dengan menampilkan eror ketika eror',(err)=>{
        if (err) {
            console.log(err)
        }

        console.log('data berhasil dibuat')
    })
 

