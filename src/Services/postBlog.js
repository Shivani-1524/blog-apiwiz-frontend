import axios from 'axios'

const postBlog = async (blogData) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_SECRET_URL}/createBlog`, blogData)
        return {
            data: res.data,
            success: true
        }

    } catch (err) {
        return {
            data: err,
            success: false
        }
    }
}

export { postBlog }