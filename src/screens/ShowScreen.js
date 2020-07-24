import { EvilIcons } from "@expo/vector-icons"
import React, { useContext } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Context } from "../context/BlogContext"

const ShowScreen = (props) => {
    const { state } = useContext(Context)
    const { navigation } = props
    const blogPost = state.find((post) => post.id === navigation.getParam(`id`))

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate(`Edit`, { id: navigation.getParam(`id`) })}>
                <EvilIcons name="pencil" size={35}/>
            </TouchableOpacity>
        ),
    }
}
const styles = StyleSheet.create({})

export default ShowScreen