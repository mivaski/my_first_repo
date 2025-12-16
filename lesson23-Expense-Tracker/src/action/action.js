export const NewTransaction = (data) => {
    return {
        type: "New_Transaction_Data",
        payload: data
    };
};

export const DelTransaction = (data) => {
    return {
        type : "Del_Transaction" ,
        payload : data
    }
}