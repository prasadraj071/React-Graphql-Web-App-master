
const URL_ROOT = 'http://localhost:3002/graphqlhotels'
const URL_GRAPHQL = 'http://localhost:3002/graphql?query={todo(itemId:2){city,hotel,date,cover}}'


export function getHotel(keyword){
    const request = fetch(`${URL_ROOT}`,{
    method:'GET'})
    .then(response => response.json())

    return {
         type:'SEARCH_HOTELS',
         payload:request
     }
}

export function getAllHotels(){
    console.log(">>>>>>>coming in hotel")
    const request = fetch(`${URL_ROOT}`,{
    method:'GET'})
    .then(response => response.json())

    return {
         type:'SEARCH_ALL_HOTELS',
         payload:request
     }
}

export function getBooking(){
    console.log(">>>>>coming in reservation")
    const request = fetch(`${URL_GRAPHQL}`,{
    method:'GET'})
    .then(response =>response.json());

    return {
         type:'SEARCH_BOOKING',
         payload:request
     }
}

export function hotelDetail(name){
    const request = fetch(`${URL_ROOT}?name=${name}`, {method:'GET'})
    .then(response => response.json())
    return{
        type:'HOTEL_DETAIL',
        payload:request
    }

}

