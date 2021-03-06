import { Feather } from "@expo/vector-icons"
import React, { useContext, useEffect } from "react"
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Context } from "../context/BlogContext"

const IndexScreen = (props) => {
    const { state, deleteBlogPost, getBlogPosts, } = useContext(Context)
    const { navigation } = props

    useEffect(() => {
        getBlogPosts()

        const listener = navigation.addListener(`didFocus`, () => {
            getBlogPosts()
        })

        return () => {
            listener.remove()
        }
    }, [])

    return (
        <View>
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
                <TouchableOpacity
                    onPress={() => navigation.navigate("Create")}
                    style={styles.icon}
                >
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
    icon: {
        marginRight: 10,
    }
})

export default IndexScreen