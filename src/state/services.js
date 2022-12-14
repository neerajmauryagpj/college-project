import API from "./api";
const dataServices = {
    getUsers(){
        return API.get('/users');
    },
    createUser(data){
        return API.post('/users',data);
    },
    deleteUser(id){
        return API.delete(`/users/${id}`);
    }
}
export default dataServices;