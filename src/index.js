import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider} from "./context/cartContext/cartContext"

const itemExample =     {
  name: 'Charly Garcia',
  description: 'Remeras negra con estampado',
  price: 450,
  stock: 5,
  id:"1",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGGolEK0w6xnMG6V8K-UDKnTKRLf9iW-54Q&usqp=CAU",
  category:"blanca"

  

}

ReactDOM.render(
  <React.StrictMode>
    <CartProvider value={[itemExample]}>
    <App/>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
