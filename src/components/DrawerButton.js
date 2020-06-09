import React from 'react'
import { Image, StyleSheet, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const DrawerButton = (props) => {
    const navigation = useNavigation()

    return(
        <TouchableOpacity style={styles.drawerButton} onPress={() => navigation.toggleDrawer()}>
            <Image style={styles.drawerImage} source={require('../../assets/drawer-button.png')} />
        </TouchableOpacity>
    )
}

export default DrawerButton;

const styles = StyleSheet.create({
    drawerButton:{
        width: 45,
        height: 35,
        alignItems: 'center',
        marginLeft: 10
    },
    drawerImage:{
        width: 45,
        height: 35,
    }
})