export const increment = () => {
    return {
        type : "INC"
    };
    
};

export const decrement = () => {
    return {
        type : "DEC"
    };
    
};

export const reset = () => {
    return {
        type : "RESET"
    };
    
};

export const add = (data) => {
    return {
        type : "ADD",
        payload: data
    };
    
};

export const remove = index => {
    return {
        type : "REMOVE",
        index
    };
    
};