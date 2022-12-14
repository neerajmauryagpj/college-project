import { 
    CREATE_USER, 
    GET_USERS,
    DELETE_USER,
    UPDATE_USER,
} from "../actions/types";

const intialData = [];
const reducer = (users = intialData,action) => {
    const { type, payload } = action;
    if(type === GET_USERS){
        users = payload;
        return users;
    }else if(type === CREATE_USER){
        users = [...users,payload];
        return users;
    }else if(type === DELETE_USER){
        users = users.filter(({ id }) => id !== payload.id)
        return users;
    }else if(type === UPDATE_USER){
        return users.map((user) => {
            if (user.id === payload.id) {
              return {
                ...user,
                ...payload,
              };
            } else {
              return user;
            }
        });
    }
    else{
        return users;
    }
}
export default reducer