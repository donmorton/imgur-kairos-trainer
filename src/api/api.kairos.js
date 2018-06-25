var IMGUR_KAIROS_URL = 'https://api.kairos.com/enroll';

const axios = require('axios')

var kairosRequest = async () => {
    return axios.post(IMGUR_KAIROS_URL, {
        headers:{
            app_id: `${app_id}`,
            app_key: `${app_key}`,
            'Content-Type': 'application/json'
        },
        data:{
            "image":"https://instagram.fric1-2.fna.fbcdn.net/vp/cec2e4a984ebf58b54ddbcd553edd0db/5B8B5D22/t51.2885-15/s640x640/sh0.08/e35/25025288_195917410984522_3196565977399558144_n.jpg",
            "subject_id":"Donald",
            "gallery_name":"DonaldFace"
        }
    })   
}

var enroll = async() => {
    try{
        var x = await kairosRequest()
    }
    catch(e){
        console.log(e)
    }
}
module.exports = {
    kairosRequest,
    enroll
}