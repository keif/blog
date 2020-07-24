import React, { useContext } from "react"
import { StyleSheet } from "react-native"
import BlogPostForm from "../components/BlogPostForm"
import { Context } from "../context/BlogContext"

const EditScreen = ({ navigation }) => {
    const { state } = useContext(Context)

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam(`id`))

    return (
        <BlogPostForm
            initialValues={{
                content: blogPost.content,
                title: blogPost.title,
            }}
            onSubmit={(title, content) => {
                console.log(title, content, () => navigation.navigate(`Index`))
            }}
        />
    )
}


const styles = StyleSheet.create({})

export default EditScreen