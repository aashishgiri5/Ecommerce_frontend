
import './App.css';
import Greet from './components/Greet'
import Header from './components/Header';
import {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import Product from './product/Product'
import Aboutus from './aboutus/Aboutus'
import Signup from './signup/Signup';
import Login from './login/Login';



function App() {
  // const [name,setName]=useState("Nabin");
  // const handleChange = e=>{
  //   setName(e.target.value);
  //   console.log(e.target.value)
    
  // }

  // const handleClick = ()=>{
  //   console.log("i am clicked");
  // }



  return (
    <div className="App">
      {/* <Greet/>
      <input type="text" onChange={handleChange}></input>
      <button onClick={handleClick}>Button</button>
      <Technova name ="Aashish" age="24"></Technova>
      <Technova name ="Aashish" age="24"></Technova> */}

      
    <BrowserRouter>
    <Header> </Header>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/product" component={Product}></Route>
        <Route exact path="/aboutus" component={Aboutus}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/login" component={Login}></Route>

       
      </Switch>
   
    </BrowserRouter>
      
      
    </div>
  );
}

export default App;
