// konsep  asynchronus
// semisal pada node js

const getUser = (id,callb) =>{
    const time = id === 1 ? 3000 : 1000;
    setTimeout(()=>{
        const nama = id === 1 ? 'Ilham' : 'Martin';
        callb({id,nama})  
    },time)
    
}

const user1 = getUser(1,(hasil)=>{
    console.log(hasil)
})

const user2 = getUser(2,(hasil)=>{
    console.log(hasil)
})