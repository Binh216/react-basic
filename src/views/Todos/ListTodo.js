import React from "react";
import "./ListTodo.scss";
import "./AddTodo";
import AddTodo from "./AddTodo";
import {toast } from 'react-toastify';

class ListTodo extends React.Component{

    state= {
        listTodos :[
            {id:'todo1', title :"Doing homeword"},
            {id:'todo2', title :"Making Videos"},
            {id:'todo3', title :"Fixing Work"},
        ]
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos : [...this.state.listTodos, todo]
        })
        toast.success('Thêm công việc thành công');
    }

    handleDeleteTodo = (todo) => {
        // console.log('===>', todo);
        let currentListTodo = this.state.listTodos;
        currentListTodo = currentListTodo.filter( item => item.id !== todo.id);
        this.setState({
            listTodos : currentListTodo
        })
        toast.success('Xóa công việc thành công');
    }
    render(){
        let {listTodos} = this.state;
        // let isEmptyObj = Object.keys()
        return (
            <div className="list-todo-container">
               <AddTodo 
                    addNewTodo = {this.addNewTodo}
               />
                <div className="list-todo-contain">
                    {
                        listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    <span>{index + 1} - {item.title}</span>
                                    <button type="button" className="edit">Edit</button>
                                    <button type="button" className="delete" onClick={() => this.handleDeleteTodo(item)}>Delete</button>
                                </div>
                            )
                                
                        })
                    }
                    
                </div>
            </div> 
        )
        
    }
}

export default ListTodo;