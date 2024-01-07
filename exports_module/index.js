const dataAll = require('./modul')

const datane = {
    nama:'ilham',
    umur:'21',
    cetak() {
        return `nama saya ${this.nama} umur saya ${this.umur}`
    }
}

module.exports = datane.cetak() //contoh export berupa t_data object

console.log(dataAll.db,dataAll.data())