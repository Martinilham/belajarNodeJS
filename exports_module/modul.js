const db = [
    {
        nama:'ilham',
        umur:'20'
    },
    {
        nama:'Martin',
        umur:'21'
    }
]

const data = ()=>(

    db.map((e)=>(
        `hallo aku ${e.nama} aku berumur ${e.umur} \n`
    )).toString()
    
)
module.exports = db // module export berfungsi untuk mengexport variabel ataupun function ke luar modul