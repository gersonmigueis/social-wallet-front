import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native'

export const Input = () => {
    return (
        <View>
            <TextInput style={styles.input} />
        </View>
    );
}

const styles = StyleSheet.create ({
    input : {
        height: 46,
        width: 302,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10
    }
});

