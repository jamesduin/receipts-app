import React, {Component} from 'react';
import ReceiptItem from './ReceiptItem';
import ReceiptForm from './ReceiptForm';
import './ReceiptList.css';
import * as apiCalls from './api';


class ReceiptList extends Component {
  constructor(props){
    super(props);
    this.state = {
      receipts: []
    }
  this.addReceipt = this.addReceipt.bind(this);
  }
  
  componentWillMount(){
    this.loadReceipts();
  }
  
  async loadReceipts(){
    let receipts = await apiCalls.getReceipts();
    this.setState({receipts});
  }
 



 async addReceipt(val){
  console.log(val);
  let newReceipt = await apiCalls.createReceipt(val);
  this.setState({receipts: [...this.state.receipts, newReceipt]})
 }
 


 async deleteReceipt(id){
   await apiCalls.removeReceipt(id);
   const receipts = this.state.receipts.filter(receipt => receipt._id !== id);
   this.setState({receipts: receipts});
 }
 



 async toggleReceipt(receipt) {
   let updatedReceipt = await apiCalls.updateReceipt(receipt);
   const receipts = this.state.receipts.map(r =>
     (r._id === updatedReceipt._id)
     ? {...r, completed: !r.completed}
     : r
     )
   this.setState({receipts: receipts});
 }
 


  render(){
    const receipts = this.state.receipts.map((t) => (
      <ReceiptItem
        key={t._id}
        {...t}
        onDelete={this.deleteReceipt.bind(this,t._id)}
        onToggle={this.toggleReceipt.bind(this,t)}
      />
      ));
    const total = this.state.receipts.reduce((accumulator, r) => {
            if(!r.completed) {
              accumulator+= r.value;
            }
            return accumulator;
    },0.0);

    return (
      <div>
      <header>
       <h1>Receipt <span>list</span> </h1>
       <h2>A simple receipt app built with node and react</h2>
       <h2>Total of non excluded items: ${total.toFixed(2)}</h2>
       <h4>Click item to exclude</h4>
       </header>
       <section className="form">
       <ReceiptForm addReceipt={this.addReceipt}/>
       <ul className="list">
        {receipts}
       </ul>
       </section>
      </div>
    )
  }

  
}

export default ReceiptList;