const initialstate = {
    datas: []
};

export const AddTransactionReducer = (state = initialstate, action) => {
    switch (action.type) {
        case "New_Transaction_Data":
            return {
                ...state,
                datas: [...state.datas, action.payload]
            }
        case "Del_Transaction":

            const updatedDatas = state.datas.filter((item, index) => index !== action.payload);

            return {
                datas: updatedDatas
            };



        default:
            return state;
    }
};









