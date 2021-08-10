
import './App.css';
import Greet from './components/Greet'
import Header from './components/Header';
import {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
// import Product from './product/Product'
import Aboutus from './aboutus/Aboutus'
import Signup from './signup/Signup';
import Login from './login/Login';
//import Category from './components/category/Category';
import Dashboard from './components/user/Dashboard';
import CreateCat from './components/admin/category/CreateCat';
import ManageCat from './components/admin/category/ManageCat';
import AdminDashboard from './components/admin/AdminDashboard';
import UpdateCat from './components/admin/category/UpdateCat';
import CreateProduct from './components/admin/category/CreateProduct';
import ManageProduct from './components/admin/category/ManageProduct';
import DeleteCat from './components/admin/category/DeleteCat';
import DeleteProduct from './components/admin/category/DeleteProduct';
import UpdateProduct from './components/admin/category/UpdateProduct';
import Products from './components/product/Products';



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
        {/* <Route exact path="/product" component={Product}></Route> */}
        <Route exact path="/aboutus" component={Aboutus}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/login" component={Login}></Route>
         {/* <Route exact path="/category" component={Category}></Route> */}
          <Route exact path="/dashboard" component={Dashboard}></Route>
             <Route exact path="/adminDashboard" component={AdminDashboard}></Route>
          <Route exact path="/createCat" component={CreateCat}></Route>
          <Route exact path="/manageCat" component={ManageCat}></Route>
          <Route exact path="/products" component={Products}></Route>
          <Route exact path="/cateUpdate/:catId" component={UpdateCat}></Route>
           <Route exact path="/cateDelete/:catId" component={DeleteCat}></Route>
            <Route exact path="/deleteProduct/:proId" component={DeleteProduct}></Route>
             <Route exact path="/updateProduct/:proId" component={UpdateProduct}></Route>
 <Route exact path="/createProduct" component={CreateProduct}></Route>
  <Route exact path="/manageProduct" component={ManageProduct}></Route>
       
      </Switch>
   
    </BrowserRouter>
      
      
    </div>
  );
}

export default App;
