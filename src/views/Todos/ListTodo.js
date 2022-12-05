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
        ],
        editTodo : {}
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

    handleEditTodo = (todo) =>{
        let {editTodo,listTodos} = this.state;

        let isEmptyObj = Object.keys(editTodo).length === 0;

        if(isEmptyObj === false && editTodo.id === todo.id){

            let listTodoTemp = [...listTodos];

            let objIndex = listTodoTemp.findIndex(item => item.id === todo.id);


            listTodoTemp[objIndex].title = editTodo.title;

            this.setState({
                listTodos : listTodoTemp,
                editTodo : {}
            })
            toast.success('Cập nhật công việc thành công');
            return;
        }

        this.setState({
            editTodo : todo
        })
    }

    handleOnchangeEditTodo = (event) => {
        let editTodoTemp = {...this.state.editTodo};
        editTodoTemp.title = event.target.value;
        this.setState({
            editTodo : editTodoTemp
        })
    }
    render(){
        let {listTodos, editTodo} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
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
                                    { isEmptyObj === true ?
                                        <span>{index + 1} - {item.title}</span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} - <input value={editTodo.title}
                                                        onChange={(event) => this.handleOnchangeEditTodo(event)}
                                                    />
                                                </span>
                                                :
                                                <span>{index + 1} - {item.title}</span>
                                            }
                                             
                                        </>
                                       
                                    }
                                    <button type="button" className="edit"
                                        onClick={() => this.handleEditTodo(item)}
                                    >
                                        {isEmptyObj === false && editTodo.id === item.id ?
                                            'Save' : 'Edit'
                                        }
                                    </button>
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