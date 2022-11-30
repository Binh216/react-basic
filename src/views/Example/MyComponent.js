import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";


class MyComponent extends React.Component{
    state = {
        arrJob : [
            {id:'IT1', title:'Developer', salary:500},
            {id:'IT2', title:'Tester', salary:300},
            {id:'IT3', title:'Manager', salary:1000}
        ]
    }

    addNewJob = (job) => {
        this.setState({
            arrJob : [...this.state.arrJob,job]
            
        })
        console.log(this.state)
        
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJob;
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJob:currentJobs
        })
    }
    

    render(){
        
        return(
            <>
            <AddComponent 
                addNewJob = {this.addNewJob}
            />
            
            <ChildComponent 
                arrJob = {this.state.arrJob}
                deleteAJob = {this.deleteAJob}
            />
            </>
        )
    }
}

export default MyComponent;