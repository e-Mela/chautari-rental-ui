const userReducer = (state = [], action) => {
    switch(action.type){
        case "ADD" :
            return [...state, {name: action.payload}];
        case "REMOVE" :
            return state.filter((item, index)=> action.index !== index);        
        default : 
            return state;
    }
}

export default userReducer;