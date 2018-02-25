import React from 'react';
import styled from 'styled-components';
import fire, { auth, provider } from '../fire';
import { FaPlus } from 'react-icons/lib/fa';

class Ctoss extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tom: 0,
            sam: 0,
            jc: 0,
            felix: 0,
            gettingScores: true,
            user: null,
            userCredits: 0
        }
        this.handleTom = this.handleTom.bind(this);
        this.handleSam = this.handleSam.bind(this);
        this.handleJc = this.handleJc.bind(this);
        this.handleFelix = this.handleFelix.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }
    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState(() => ({ user: user }));
                let scores = fire.database().ref('scores');
        
                if(scores) {
                    try {
                        scores.on("value", (snapshot) => {
                            let savedData = snapshot.val()
                            console.log(savedData);
                            this.setState(() => (savedData))
                            this.setState(() => ({ gettingScores: false }));
                        }, (errorObject) => {
                            console.log("The read failed: " + errorObject.code);
                        });
        
                    } catch (error) {
                        console.log('Error fetching firebase data', error);
                    }
                }
            } 
        });

    }
    
    handleUpdateFirebase() {
        setTimeout(() => {
            fire.database().ref('scores').set(
                { 
                    tom: this.state.tom, 
                    sam: this.state.sam, 
                    jc: this.state.jc, 
                    felix: this.state.felix, 
                }
            );
        }, 500);
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
    handleTom() {
        this.setState((prevState) => ({ tom: prevState.tom + 1 }));
        this.handleUpdateFirebase();
    }
    handleSam() {
        this.setState((prevState) => ({ sam: prevState.sam + 1 }));
        this.handleUpdateFirebase();
    }
    handleJc() {
        this.setState((prevState) => ({ jc: prevState.jc + 1 }));
        this.handleUpdateFirebase();
    }
    handleFelix() {
        this.setState((prevState) => ({ felix: prevState.felix + 1 }));
        this.handleUpdateFirebase();
    }
    render() {
        return (
            <Section>
                <Content>
                    { this.state.user ?
                        <User>
                            <img src={this.state.user.photoURL} alt="profile pic" />  
                            Credits: {this.state.userCredits} 
                            <Button onClick={this.logout}>Log Out</Button> 
                        </User>         
                        :
                        <User>
                            <span></span>  
                            <Button onClick={this.login}>Log In</Button> 
                        </User>             
                    }
                    { this.state.user ?
                        <Container>
                            <ScoreBlock>
                                <h2>Tom</h2>
                                <p>{this.state.tom}</p>
                                <Button onClick={this.handleTom} type="button" className={ this.state.gettingScores ? 'disabled' : null } ><FaPlus /></Button>
                            </ScoreBlock>
                            <ScoreBlock>
                                <h2>Sam</h2>
                                <p>{this.state.sam}</p>
                                <Button onClick={this.handleSam} type="button" className={ this.state.gettingScores ? 'disabled' : null } ><FaPlus /></Button>
                            </ScoreBlock>
                            <ScoreBlock>
                                <h2>JC</h2>
                                <p>{this.state.jc}</p>
                                <Button onClick={this.handleJc} type="button" className={ this.state.gettingScores ? 'disabled' : null } ><FaPlus /></Button>
                            </ScoreBlock>
                            <ScoreBlock>
                                <h2>Felix</h2>
                                <p>{this.state.felix}</p>
                                <Button onClick={this.handleFelix} type="button" className={ this.state.gettingScores ? 'disabled' : null } ><FaPlus /></Button>
                            </ScoreBlock>
                        </Container>
                        :
                        <p>You must be logged in to see the this part...!</p>
                    }
                </Content>
            </Section>
         );
    }
} 

export default Ctoss;

const Section = styled.section`
`;

const Content = styled.div`
    color: #212121;
    padding: 20px;
    max-width: 900px;
    margin: auto;

    @media only screen and (min-width: 768px) {
        margin: 25px auto;
    }

    h2 {
        color: #1E88E5;
    }

    p {
        line-height: 21px;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;

    @media only screen and (min-width: 768px) {
        justify-content: space-around;
    }
`;
const ScoreBlock = styled.div`
    text-align: center;

    h2 {
        font-weight: 300;
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

    @media only screen and (min-width: 768px) {
        justify-content: flex-end;

        img {
            margin-right: 10px;
        }
    }
`;

const Button = styled.button`
    color: white;
    background: #0D47A1;
    padding: 10px;
    margin: 0 5px;
    border: none;
    border-radius: 3px;
    outline: none;
    transform: translateY(0);
    box-shadow: 0 10px 20px rgba(0,0,0,0), 0 6px 6px rgba(0,0,0,0);
    transition: transform .2s ease-out, box-shadow .2s ease-out;

    &.disabled {
        opacity: .7;
        pointer-events: none;
    }

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0 10px 20px rgba(0,0,0,0), 0 6px 6px rgba(0,0,0,0);
    }

    @media only screen and (min-width: 768px) {
        padding: 10px 15px;
    }
`;


