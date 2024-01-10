const {personal,hasil} = require('./data')

const ubah = async()=>{
    const nama = await personal('masukan nama anda :')
    const email = await personal('Masukan email anda :')
    const hp = await personal('masukan nomor hp anda')
    hasil(nama,email,hp)
}
ubah()