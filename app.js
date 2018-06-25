var imgurAPI = require('./src/api/api.imgur')
var kairosAPI = require('./src/api/api.kairos')
var ALBUM_ID = 'wCBYO'


var getImages = async(albumID) => {
    var resp = await imgurAPI.getImages(albumID,IMGUR_CLIENT_ID);
    console.log(resp)
}

var testKairos = async() => {
    await kairosAPI.enroll()
}


// getImages(ALBUM_ID)
testKairos()