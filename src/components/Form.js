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
            isVegan: false,
            isKosher: false,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ?
            this.setState({
                    [name]:checked       
            })
            :
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
                    
                    <label>
                        <input 
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                        />Male
                    </label>

                    <label>
                        <input 
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                        />Female
                    </label>
                    <br/>

                    <select 
                        value={this.state.destination} 
                        name="destination" 
                        onChange={this.handleChange}
                    >
                        <option value="--">Please select a destination</option>
                        <option value="Germany">Germany</option>
                        <option value="Norway">Norway</option>
                        <option value="France">France</option>
                        <option value="Greece">Greece</option>
                    </select>
                    <br/>

                    <label>
                        <input
                        type="checkbox"
                        name="isVegan"
                        onChange={this.handleChange}
                        checked={this.state.isVegan}
                        />Vegan
                    </label>
                    <br/>
          
                    <label>
                        <input
                        type="checkbox"
                        name="isKosher"
                        onChange={this.handleChange}
                        checked={this.state.isKosher}
                        />Kosher
                    </label>
                    <br/>
                    
                    <button>Submit</button>
                    <br/>
                </form>
                <hr/>
                <h2>Entered Info</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions: 
                </p>
                <p>
                    Vegan: {this.state.isVegan ? "Yes" : "No"}
                </p>
                <p>
                    Kosher: {this.state.isKosher ? "Yes" : "No"}
                </p>
            </main>
        )
    }
}

export default Form