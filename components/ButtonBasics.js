import React, { Component } from 'react';
import { Alert, Button, View } from 'react-native';

export default class ButtonBasics extends Component {
    render() {
        return (
            <View style={{paddingTop: 50}}>
                <Button
                    onPress={() => {
                        Alert.alert('You tapped the button!');
                    }}
                    title="Press me"
                />
            </View>
        );
    }
}