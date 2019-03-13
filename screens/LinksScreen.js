import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { MonoText } from '../components/StyledText';

export default class LinksScreen extends React.Component {
    static navigationOptions = {
        title: 'Links',
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                {/*<ExpoLinksView />*/}
                <Text>Kak dela</Text>

                <MonoText style={styles.backgroundColor}>asd</MonoText>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
