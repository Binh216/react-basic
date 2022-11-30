import React from "react";
import './Demo.scss'


class ChildComponent extends React.Component{
    state = {
        showJobs : false
    }

    handleOnChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleOnChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert('ok')
        console.log(this.state.firstName,'=>', this.state.lastName, this.t)
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnclickDelete = (job) => {
       console.log(job)
       this.props.deleteAJob(job)
    }

    render(){
        let { arrJob} = this.props;
        let {showJobs} = this.state;
        let check = showJobs === true ? `showJobs = true` : `showJobs = false`;
        console.log('>>> check showJobs value', check);
        
        return(
            <>
                {showJobs === false ?
                    <div>
                        <button className="btn-show" onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                :
                    <>
                        <div className="job-list">
                            {
                                arrJob.map((item,index) => {
                                    if (item.salary >= 500) {
                                        return(
                                            <div key={item.id}>
                                                {item.title} - {item.salary} <></> <span onClick={() => this.handleOnclickDelete(item)}>x</span>
                                            </div>
                                        )
                                    }
                                    
                                })
                            }
                        </div>
                        <div><button className="btn-show" onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }
            </>
            
        )
    }
}


export default ChildComponent;