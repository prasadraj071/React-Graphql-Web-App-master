export default function(state={}, action){
    switch(action.type){
        case 'SEARCH_HOTELS':
        return { ...state, list:action.payload};
        
        case 'SEARCH_ALL_HOTELS':
        return { ...state, hotel:action.payload};

        case 'HOTEL_DETAIL':
        return { ...state,detail:action.payload}

        case 'SEARCH_BOOKING':
            return action.payload
        
        default:
        return state;
    }

}