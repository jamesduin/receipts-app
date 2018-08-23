import React, {Component} from 'react';
import CurrencyInput from 'react-currency-input';
import './ReceiptForm.css';

class ReceiptForm extends Component {
  constructor(props){
    super(props);
    this.state = {inputName: '', inputAmount: 0.00};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeCurrency = this.handleChangeCurrency.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  handleChangeCurrency(event, maskedvalue, floatvalue){
        this.setState({inputAmount: floatvalue});
    }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.inputName !== '') {
      this.props.addReceipt(this.state);
      this.setState({
        inputName: '',inputAmount: ''
      });
    }
  }

  render() {
    return (
      <div className = "receipt-form-container">
      <form  className='receipt-form'  onSubmit={this.handleSubmit}>
      <div className='receipt-form-line'>
      <label htmlFor='receipt-name-input'>Name</label>
        <input 
          id = 'receipt-name-input'
          name='inputName'
          type="text" 
          placeholder="Insert your expense here..."
          value={this.state.inputName}
          onChange={this.handleChange}
        />
        </div>
      <div className='receipt-form-line'>
      <label htmlFor='receipt-value-input'>Amount</label>
        <CurrencyInput  
          prefix='$'
          value={this.state.inputAmount}
          onChangeEvent={this.handleChangeCurrency}
        />
        </div>
        <div className='receipt-form-line'>
        <button
            type="submit"
            className="buttons"
        >
         Add Receipt
        </button>
        </div>
        
        </form>
      </div>
    )
  }
}

export default ReceiptForm;
