import { Component } from "react";

class CompA extends Component{

    constructor(props)
    {
        super(props)
        this.state = {
            count : 0
        }
    }

    incrementCount = () => {
        this.setState({count : this.state.count + 1})
    }


    componentDidMount(){
       console.log("Component Mounted") 
    }

    componentDidUpdate()
    {
        console.log("Component Updated")
    }

    componentWillUnmount()
    {
        console.log("Component Unmounted")
        // clearInterval(ID)
    }

    render(){
        return <div>
            <div>{this.state.count}</div>
            <button onClick={this.incrementCount}>Increment</button>
        </div>
    }
}

export default CompA