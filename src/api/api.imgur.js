const axios = require('axios')

var IMGUR_BASE_URL = 'https://api.imgur.com/3/album/';

var imgurRequest = async (albumID, clientID) => {
    return axios.get(IMGUR_BASE_URL+albumID+'/images', {
        headers:{
            Authorization: `Client-ID ${clientID}`
        },
    })   
}

var getImages = async(albumID,clientID) =>{
    try{
        let response = await imgurRequest(albumID,clientID);    
        return response.data.data.map(element => element.link);
    }
    catch (e){
        console.log(e);
    }
}

module.exports = {
    getImages
}