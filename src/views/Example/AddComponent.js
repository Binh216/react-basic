import React from "react";

class AddComponent extends React.Component{
    state ={
        title : '',
        salary : '',
    }
    handleOnChangetitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleOnChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log(this.state)

        this.props.addNewJob({
            id: Math.floor(Math.random() * 1000),
            title : this.state.title,
            salary : this.state.salary
        })
    }
    render(){
        return(
            <form>
                <label>Job Title: </label>
                <input type="text" value={this.state.title} onChange={(event) => {this.handleOnChangetitle(event)}} /> <br/>
                <label>Salary: </label>
                <input type="text" value={this.state.salary} onChange={(event) => {this.handleOnChangeSalary(event)}}/> <br/>
                <input type="button" value="Submit" onClick={(event) => this.handleSubmit(event)}/>
            </form>
        )
       
    }
    
}

export default AddComponent;