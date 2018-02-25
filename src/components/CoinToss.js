import React from 'react';
import styled from 'styled-components';
import fire, { auth } from '../fire';

import { FaDiamond, FaDollar } from 'react-icons/lib/fa';

class CoinToss extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bet: true,
            result: true,
            wager: 0,
            flipping: false,
            message: '',
            user: null
        }
        this.handleFlipCoin = this.handleFlipCoin.bind(this);
        this.handleIncreaseWager = this.handleIncreaseWager.bind(this);
        this.handleDecreaseWager = this.handleDecreaseWager.bind(this);
        this.handleMaxWager = this.handleMaxWager.bind(this);
        this.handleChoseBet = this.handleChoseBet.bind(this);
    }
    componentWillMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState(() => ({ user: user }));
            }
        });
    }

    componentDidMount() {
        this.setState(() => ({ message: 'Flip it!' }));
    }

    handleCoinToss(userCredits, wager) {
        console.log('fliping coin', wager);
        const bet = this.state.bet;
        Math.floor(Math.random() * 2) === 0 ? this.setState(() => ({ result: true })) : this.setState(() => ({ result: false }));
        const result = this.state.result;
        if(bet === result){
            console.log('Winner!');
            
            fire.database().ref('users/' + this.state.user.uid).set({
                credits: userCredits + (wager * 2)
            });
            this.props.refreshCredits();
            this.setState(() => ({ message: 'Winner!' }));
            this.setState(() => ({ flipping: false }));
        } else {
            console.log('you lose :(');

            fire.database().ref('users/' + this.state.user.uid).set({
                credits: userCredits
            });
            if(userCredits < wager) {
                this.setState(() => ({ wager: userCredits }));
            }

            userCredits ? this.setState(() => ({ message: 'Loser...' })) : this.setState(() => ({ message: 'Please deposit credits' }));

            this.props.refreshCredits();
            this.setState(() => ({ flipping: false }));
        }
    }
    handleFlipCoin() {
        this.setState(() => ({ flipping: true }));
        console.log('placing bet');
        fire.database().ref('users/' + this.state.user.uid + '/credits').once('value').then((snapshot) => {
            const userCredits = snapshot.val();
            const wager = this.state.wager;
            console.log('available credits', userCredits)
            if(wager <= userCredits && wager > 0) {
                const updatedCredits = userCredits - wager;
                setTimeout(() => {
                    this.handleCoinToss(updatedCredits, wager);
                  }, 500)
            } else {
                this.setState(() => ({ flipping: false }));
            }
        });
    }
    handleChoseBet() {
        let bet = this.state.bet ? false : true ;
        this.setState(() => ({ bet: bet }));
    }
    handleIncreaseWager() {
        if(this.state.wager < this.props.localCredits) {
            this.setState((prevState) => ({ wager: prevState.wager + 10 }));
        }
    }
    handleDecreaseWager() {
        if(this.state.wager !== 0) {
            this.setState((prevState) => ({ wager: prevState.wager - 10 }));
        }
    }
    handleMaxWager() {
        if(this.props.localCredits !== 0) {
            this.setState(() => ({ wager: this.props.localCredits }));
        }
    }
    render() {
        return (
            <Content>
                <h1>{this.state.message}</h1>
                <Choice><button onClick={this.handleChoseBet} type="button">Your bet: {this.state.bet ? <FaDiamond /> : <FaDollar />}</button></Choice>
                <Result className={this.state.flipping ? 'flipping' : null }>{this.state.result ? <FaDiamond /> : <FaDollar />}</Result>
                <Wager>
                    <h3>Wager: {this.state.wager}</h3>
                    <button onClick={this.handleDecreaseWager} disabled={this.state.wager === 0} type="button">-</button>
                    <button onClick={this.handleMaxWager} disabled={this.state.wager === this.props.localCredits || this.props.localCredits === 0} type="button">Max bet</button>
                    <button onClick={this.handleIncreaseWager} disabled={this.state.wager === this.props.localCredits} type="button">+</button>
                </Wager>
                <PlaceBet><button onClick={this.handleFlipCoin} className="wager" disabled={this.state.wager === 0 || this.state.flipping || this.props.localCredits < this.state.wager ? true : false } type="button">Flip it!</button></PlaceBet>
            </Content>
         );
    }
} 

 export default CoinToss;

const Result = styled.h2`
    font-size: 40px;
    opacity: 1;
    transform: rotateX(360deg);
    transition: opacity .5s ease-in-out, transform .5s ease-out;

    &.flipping {
        opacity: 0;
        transform: rotateX(-90deg);
    }
`;
const Choice = styled.div`
    margin-bottom: 10px;

    svg {
        vertical-align: top !important;
    }

`;
const Wager = styled.div`
    margin-bottom: 10px;

    button {
        height: 40px;
        min-width: 40px
    }

`;
const PlaceBet = styled.div`
    margin-bottom: 10px;
    
    button {
        width: 100%;
    }
`;

const Content = styled.div`
    max-width: 350px;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    text-align: center;

    button {
        color: white;
        background: #0D47A1;
        padding: 10px;
        margin: 0 5px;
        border: none;
        border-radius: 3px;
        outline: none;
        transform: translateY(0);
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        transition: transform .1s ease-out, box-shadow .2s ease-out;

        &.wager {
            background: #2E7D32;
            max-width: 250px;
        }

        &:active,
        &:disabled {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0,0,0,0), 0 6px 6px rgba(0,0,0,0);
        }

        &:disabled {
            opacity: .7;
            pointer-events: none;
        }
    }
`;
