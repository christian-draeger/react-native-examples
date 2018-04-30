import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Button, CardSection, Header, Spinner} from './src/components/common';
import LoginForm from './src/components/LoginForm'

export default class App extends Component {

    state = {
        loggedIn: null,
    };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCmqlmwxg-MFDl-DVU_SlM3UGQZX1VjX5A",
            authDomain: "auth-example-7162a.firebaseapp.com",
            databaseURL: "https://auth-example-7162a.firebaseio.com",
            projectId: "auth-example-7162a",
            storageBucket: "auth-example-7162a.appspot.com",
            messagingSenderId: "515126508896"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm/>;
            default:
                return <Spinner size={'large'}/>
        }
    }

    render() {
        return (
            <View>
                <Header headerText={"Authentication"}/>
                {this.renderContent()}
            </View>
        );
    }
}
