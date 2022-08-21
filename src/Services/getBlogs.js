import axios from 'axios'

const getBlogs = async () => {
    console.log(process.env)
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_SECRET_URL}/getBlogs`);
        return {
            data,
            success: true,
            err: null
        }
    } catch (err) {
        return {
            data: null,
            success: false,
            err
        }
    }
}

export { getBlogs }