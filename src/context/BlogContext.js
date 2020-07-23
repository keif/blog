import createDataContext from "./createDataContext"

const blogReducer = (state, action) => {
    switch (action.type) {
        case `add_blogpost`:
            return [...state, { id: new Date().getTime(), title: `Blog Post #${state.length + 1}` }]
        case `edit_blogpost`:
            return state
        case `delete_blogpost`:
            return state
        default:
            return state

    }
}

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({
            type: `add_blogpost`,
        })
    }
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost }, [])