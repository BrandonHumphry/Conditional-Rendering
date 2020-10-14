import React, {Component} from "react"

class Form extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            dietaryRestrictions: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <main>
                <form>
                    <input 
                    name="firstName" 
                    value={this.state.firstName} 
                    onChange={this.handleChange} 
                    placeholder="First Name" />
                    <br/>

                    <input 
                    name="lastName" 
                    value={this.state.lastName} 
                    onChange={this.handleChange} 
                    placeholder="Last Name" />
                    <br/>

                    <input 
                    name="age" 
                    value={this.state.age} 
                    onChange={this.handleChange} 
                    placeholder="Age" />
                    <br/>
                    
                    {/* <label>
                        <input type="radio"/> Male
                    </label> */}
         
                    <br/>
                    <button>Submit</button>
                    <br/>
                </form>
                <hr/>
                <h2>Entered Info</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                {/* <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions: {this.state.dietaryRestrictions}
                </p> */}
            </main>
        )
    }
}

export default Form