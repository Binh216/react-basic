import React from 'react';
import logo from './logo.svg';
import './App.scss';
// import MyComponent from './Example/MyComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Nav from './Nav/Nav';
import Home from './Example/Home';
import About from './Example/About';
import ListUsers from './Users/ListUsers';
import DetailUser from './Users/DetailUser';

import{
  BrowserRouter,
  Switch,
  Route,
  
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        <Nav/>
          <img src={logo} className="App-logo" alt="logo" />
        
        
          {/* <MyComponent/> */}
          {/* <ListTodo/> */}
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/todos">
              <ListTodo/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/users" exact>
              <ListUsers/>
            </Route>
            <Route path="/users/:id">
              <DetailUser/>
            </Route>
          </Switch>
        </header>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
            {/* Same as */}
          <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
