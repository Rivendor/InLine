import * as React from 'react'
import { Text, StyleSheet, Switch, View } from 'react-native'
import { useState } from "react"

const SwitchOp = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (

        <View style={styles.box}>
            <Text style={styles.textSwtich}>{props.text}</Text>
            <View style={styles.switch}>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
        </View>
    )
}

export default SwitchOp;

const styles = StyleSheet.create({
    textSwtich: {
        color: 'black',
        fontSize: 20,
    },
    box: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        //justifyContent:'space-around',
    },
    switch: {

        flex: 1,
        //marginTop: 5,
        alignItems: 'flex-end',

    },

})