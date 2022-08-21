import axios from 'axios'

const deleteBlog = async (blogId) => {
    console.log(blogId, "DELETE POST")
    try {
        const { data } = await axios.post(`${process.env.REACT_APP_SECRET_URL}/deleteBlog`, { blogId });
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

export { deleteBlog }