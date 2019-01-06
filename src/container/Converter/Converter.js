import React, { Component } from 'react';
import axios from 'axios';
import Input from '../../components/Input/Input';
import Output from '../../components/Output/Output';
import Styles from './Converter.module.css';

const API_KEY ='8VWuzUwpmY9rGAGuDhntKtrw6YJsPZ3V';


class converter extends Component {

    state = {
        fetcheddata: [],
        currency1: 'USD',
        currency2: 'EUR',
        amount: '1'
    }

    //when the page loads
    componentDidMount () {
        axios.get(`https://forex.1forge.com/1.0.3/convert?from=${this.state.currency1}&to=${this.state.currency2}&quantity=${this.state.amount}&api_key=${API_KEY}`)
            .then(res => {
                const data = res.data;
                const updateddata = {
                    ...data,
                    curentCurrency1: this.state.currency1,
                    curentCurrency2: this.state.currency2,
                    currentAmount: this.state.amount
                }
                this.setState({
                    fetcheddata: updateddata
                });
                console.log(this.state.fetcheddata);
            }) ;
        
    }
    //when a component is updated
    componentDidUpdate () {
       if(this.state.amount !== this.state.fetcheddata.currentAmount || this.state.currency1 !== this.state.fetcheddata.curentCurrency1 || this.state.currency2 !== this.state.fetcheddata.curentCurrency2) {
        axios.get(`https://forex.1forge.com/1.0.3/convert?from=${this.state.currency1}&to=${this.state.currency2}&quantity=${this.state.amount}&api_key=${API_KEY}`)
        .then(res => {
            const data = res.data;
            const updateddata = {
                ...data,
                curentCurrency1: this.state.currency1,
                curentCurrency2: this.state.currency2,
                currentAmount: this.state.amount
            }
            this.setState({
                fetcheddata: updateddata
            });
            console.log(this.state.fetcheddata);
        }) ;
       }
    }

    //update amount
    chanceAmountHanlder = event => {
        this.setState({
            amount: event.target.value
        });
    }
    //update currency1
    chanceCurrency1Hanlder = event => {
        this.setState({
            currency1: event.target.value
        });
    }
    //update currency2
    chanceCurrency2Hanlder = event => {
        this.setState({
            currency2: event.target.value
        });
    }


  render() {

    const camount = (
        <p>{this.state.fetcheddata.value}</p>
    );

    return (
      <div className={Styles.converter}>
        {/* <h1 className={Styles.converter__header}>Converter</h1> */}
        <Input 
                className={Styles.inputdesktop}
                chanceAmountHanlder={this.chanceAmountHanlder} 
                chanceCurrency1Hanlder={this.chanceCurrency1Hanlder}
                chanceCurrency2Hanlder={this.chanceCurrency2Hanlder}
                value={this.state.amount}/>

        <Output 
                className={Styles.outputdesktop}
                convertedamount={camount} />
      </div>
    );
  }
}

export default converter;
