import { useState } from 'react'

function CreateAccountFormMain() {
    // create a state type of object

    let [formData, setFormData] = useState({
        name: "",
        number: 0,
        email: "",
        password: ""
    })

    function handleSubmit(e) {
        alert(`form submitted \n your name is ${formData.name}, number is ${formData.number}, email is ${formData.email}, password is ${formData.password}`)
    }

    function handleChange(e) {
        // will update state here

        let inputTagName = e.target.name; // here we are taking input name
        let inputTagValue = e.target.value; // here we are taking input value

        setFormData(previousObject => ({
            ...previousObject,
            [inputTagName]: inputTagValue
        }))
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Enter your name</label>
                <br />
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleChange(e)}
                />
                <br />

                <label>Enter your mobile number</label>
                <br />
                <input
                    type="number"
                    name="number"
                    value={formData.number}
                    onChange={(e) => handleChange(e)}
                />
                <br />

                <label>Enter your email</label>
                <br />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleChange(e)}
                />
                <br />

                <label>Enter your password</label>
                <br />
                <input
                    type="text"
                    name="password"
                    value={formData.password}
                    onChange={(e) => handleChange(e)}
                />
                <br />


                <button type="submit">submit button</button>
            </form>
        </div>
    )
}

export default CreateAccountFormMain;