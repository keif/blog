import createDataContext from "./createDataContext"

const defaultBlogPost = [{
    content: `Test content.`,
    id: new Date().getTime(),
    title: `Test Title`,
}]

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
        case `edit_blogpost`:
            return state.map((blogPost) => (blogPost.id === action.payload.id) ? action.payload : blogPost)
        case `delete_blogpost`:
            return state.filter((blogPost) => blogPost.id !== action.payload)
        default:
            return state

    }
}

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({
            payload: { title, content },
            type: `add_blogpost`,
        })
        callback()
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
        callback()
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost },
    defaultBlogPost
)