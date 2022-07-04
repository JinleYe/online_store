import React from 'react';
import { useRef, useState, useEffect } from 'react';

const QtyBox = () => {
    // const [number, setNumber] = useState(1);
    const inputNumber = useRef();
    let number = 1;
   


    const onDecrement = (event) => {
        event.preventDefault();
        if(inputNumber.current.value <=1 ) return ;

        // setNumber(number-1);
        document.querySelector('.qty').value = number--;
        
        console.log(number)
        
    }

    const onIncrement = (event) => {
        
        // setNumber(number+1);
        document.querySelector('.qty').value = number++;
        console.log(number);
        
    }

    const handleChange = (event) => {
        event.preventDefault();
        // setNumber(inputNumber.current.value);
        // if(inputNumber.current.value == 0){
        //     document.querySelector('.qty').value = 1; 
        // }
        number = inputNumber.current.value
        console.log(number);

    }

    // useEffect(()=>{
    //     if(inputNumber.current.value === 0){
    //         document.querySelector('.qty').value = 1; 
    //     }
        
    // },[inputNumber])


    return (
        
        <div className="qty-box">
           <span className="dec" onClick={onDecrement} onTouchStart={onDecrement}>–</span>
           {/* <span className="qty">{number}</span> */}
           <input type="number" min="1" defaultValue={number} ref={inputNumber} onChange={handleChange} className="qty"/>
           <span className="inc" onClick={onIncrement} onTouchStart={onIncrement}>+</span>
        </div>
        
        
    )
}





// var QtyBox = React.createClass({
//     getInitialState: function() {
//       return { value: 1 };
//     },
//     onDecrement: function(e) {
//       if (this.state.value <= 0) return;
//       this.setState({value: --this.state.value});
//     },
//     onIncrement: function(e) {
//       this.setState({value: ++this.state.value});
//     },    
//     render: function() {
//       return (
//         <div className="qty-box">
//           <span className="dec" onClick={this.onDecrement} onTouchStart={this.onDecrement}>–</span>
//           <span className="qty">{this.state.value}</span>
//           <span className="inc" onClick={this.onIncrement} onTouchStart={this.onIncrement}>+</span>
//         </div>
//       );
//     }
//   });

  export default QtyBox;