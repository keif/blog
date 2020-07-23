import React from "react"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { Provider } from "./src/context/BlogContext"
import CreateScreen from "./src/screens/CreateScreen"
import EditScreen from "./src/screens/EditScreen"
import IndexScreen from "./src/screens/IndexScreen"
import ShowScreen from "./src/screens/ShowScreen"

const navigator = createStackNavigator({
    Create: CreateScreen,
    Index: IndexScreen,
    Show: ShowScreen,
    Edit: EditScreen,
}, {
    initialRouteName: `Index`,
    defaultNavigationOptions: {
        title: `Blogs`
    }
})

const App = createAppContainer(navigator)

export default () => {
    return (
        <Provider>
            <App/>
        </Provider>
    )
}