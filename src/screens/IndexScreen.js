import { Feather } from "@expo/vector-icons"
import React, { useContext } from "react"
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Context } from "../context/BlogContext"

const IndexScreen = (props) => {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context)
    const { navigation } = props

    return (
        <View>
            <Button
                onPress={addBlogPost}
                title={`Add Blog Post`}
            />
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("Show", { id: item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather name="trash" size={24}/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => {
            return (
                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                    <Feather name="plus" size={30}/>
                </TouchableOpacity>
            )
        },
    }
}

const styles = StyleSheet.create({
    row: {
        borderTopWidth: 1,
        borderColor: `gray`,
        flexDirection: `row`,
        justifyContent: `space-between`,
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    title: {
        fontSize: 18,
    },
    icon: {}
})

export default IndexScreen