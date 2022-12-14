import { 
    RESPONSE_NOTIFICATION, 
} from "../actions/types";

const intialData = [];
const reducer = (status = intialData,action) => {
    const { type, payload } = action;
    if(type === RESPONSE_NOTIFICATION){
        status = [...status,payload];
        return status;
    }
    else{
        return status;
    }
}
export default reducer