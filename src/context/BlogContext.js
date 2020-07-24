import jsonServer from "../api/jsonServer"
import createDataContext from "./createDataContext"

const defaultBlogPost = []

const blogReducer = (state, action) => {
    switch (action.type) {
        case `add_blogpost`:
            return [
                ...state,
                {
                    content: action.payload.content,
                    id: new Date().getTime(),
                    title: action.payload.title,
                }
            ]
        case `delete_blogpost`:
            return state.filter((blogPost) => blogPost.id !== action.payload)
        case `edit_blogpost`:
            return state.map((blogPost) => (blogPost.id === action.payload.id) ? action.payload : blogPost)
        case `get_blogposts`:
            return action.payload
        default:
            return state

    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        const response = await jsonServer.post(`/blogposts`, {
            title,
            content,
        })
        // dispatch({
        //     payload: { title, content },
        //     type: `add_blogpost`,
        // })
        if (callback) {
            callback()
        }
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({
            payload: id,
            type: `delete_blogpost`
        })
    }
}

const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({
            payload: { content, id, title, },
            type: `edit_blogpost`,
        })
        if (callback) {
            callback()
        }
    }
}

const getBlogPosts = (dispatch) => {
    return async () => {
        const response = await jsonServer.get(`/blogposts`)
        // response.data === [{...}, {...}, {...}, ...]

        dispatch({
            payload: response.data,
            type: `get_blogposts`,
        })
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
    defaultBlogPost
)