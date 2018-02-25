import React from 'react';
import styled from 'styled-components';
import fire, { auth, provider } from '../fire';
import CoinToss from './CoinToss';

class Gamble extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            userCredits: 0,
            loading: true
        }
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleSpendCredits = this.handleSpendCredits.bind(this);
        this.readUserData = this.readUserData.bind(this);
    }
    componentWillMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState(() => ({ user: user }));
                
                fire.database().ref('users/' + this.state.user.uid).on('value', (snapshot) => {
                    if (snapshot.hasChild('credits')) {
                        this.readUserData();
                    } else {
                        this.writeUserData(1000, 0);
                    }
                });
            }
        });
    }
    writeUserData(credits, cost) {

        let userData = fire.database().ref('users/' + this.state.user.uid);

        userData.set({
            credits: credits - cost
        });
        this.readUserData();
    }
    readUserData() {
        this.setState(() => ({ loading: true }));
        fire.database().ref('users/' + this.state.user.uid + '/credits').once('value').then((snapshot) => {
            this.setState(() => ({ userCredits: snapshot.val() }));
            this.setState(() => ({ loading: false }));
        });
    }
    logout() {
        auth.signOut()
            .then(() => {
                this.setState({
                    user: null
            });
        });
    }
    login() {
        auth.signInWithPopup(provider) 
            .then((result) => {
            const user = result.user;
            this.setState({
                user
            });
        });
    }
    handleSpendCredits() {
        console.log('spend');
        fire.database().ref('users/' + this.state.user.uid + '/credits').once('value').then((snapshot) => {
            this.writeUserData(snapshot.val(), 20);
        });
    }

    render() {
        return (
            <Section>
                <Content>
                    { this.state.user ?
                        <User>
                            <img src={this.state.user.photoURL} alt="profile pic" />  
                            Credits: {this.state.loading ? 'Loading...' : this.state.userCredits} 
                            <a onClick={this.logout}>Log Out</a> 
                        </User>         
                        :
                        <User>
                            <span></span>  
                            <a onClick={this.login}>Log In</a> 
                        </User>             
                    }
                    { this.state.user ?
                        <Widgets>  
                            <CoinToss refreshCredits={this.readUserData} localCredits={this.state.userCredits} />  
                        </Widgets>
                        :
                        <div>
                            <h1>The Casino</h1>
                            <p>Please log in to play at the casino</p> 
                        </div>            
                    }
                </Content>
            </Section>
        );
    }
} 


export default Gamble;

const Widgets = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
    }
`;

const Section = styled.section`
`;

const Content = styled.div`
    color: #212121;
    padding: 20px;
    max-width: 900px;
    margin: auto;

    @media only screen and (min-width: 768px) {
        margin: 25px auto 0;
    }

    h1 {
        color: #1E88E5;
    }

    p {
        line-height: 21px;
    }
`;

const User = styled.div`
    display: flex;
    justify-content: space-between;

    img {
        height: 40px;
        width: 40px;
        border-radius: 50%;
    }
`;
