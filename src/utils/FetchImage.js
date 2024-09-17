const getImages = async ()=>{

    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/photos")
let data = await response.json()
       
return data;
    } catch (error) {
        
    }
}

export default getImages