import Axios from "axios";

Axios.defaults.baseURL = 'http://localhost:3000'

export default{

    getAllEpisodes(){
        return Axios.get('/episodes')
        .then(resp=>{
            return resp.data
        })
        .catch(()=>{})
    }
    
}