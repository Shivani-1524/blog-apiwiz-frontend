import axios from 'axios'

const getBlog = async (blogId) => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_SECRET_URL}/getBlog/${blogId}`);
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

export { getBlog }