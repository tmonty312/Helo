import axios from 'axios'

const GET_POSTS = 'GET_POSTS'
const GET_POSTS_FULFILLED = 'GET_POSTS_FULFILLED'

const CREATE_POST = 'CREATE_POST'
const CREATE_POST_FULFILLED = 'CREATE_POST_FULFILLED'

let initialState = {
    data: []
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_POSTS_FULFILLED:
            return { ...state, data: action.payload.data}
            default:
                return state;
    }
}

export function getPosts(){
    return {
        type: GET_POSTS,
        payload: axios.get('/api/posts')
    }
}