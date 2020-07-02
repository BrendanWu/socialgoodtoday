import upload from 'superagent'
import { BASE_URL } from './api'


export const uploadImage = async (image) => {

    if (image) {
        return upload.post(`${BASE_URL}/api/media/uploadImage`)
            .attach("file", image)
            .then((res) => {
            
                console.log(res)
                return res

            })


    }

}
export const uploadVideo = async (video) => {

    if (video) {
        return upload.post(`${BASE_URL}/api/media/uploadVideo`)
            .attach("file", video)
            .then((res) => {
            
                console.log(res)
                return res

            })


    }

}