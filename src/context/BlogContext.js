import createDataContext from "./createDataContext"

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
            return state
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
        console.log(id)
        dispatch({
            payload: id,
            type: `delete_blogpost`
        })
    }
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost }, [])