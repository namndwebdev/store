import axios from "axios"
export const getProductBySlug = (slug)=>{
    return axios.get(`/products/${slug}`)
}
