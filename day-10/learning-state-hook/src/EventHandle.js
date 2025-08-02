function handleClick(){
    alert("button clicked");
}

function handleFormSubmit(){
    alert("Your Form is Submitted");
}

function EventHandle(){
    return (
        <div>
            <button onClick = {() => handleClick()}>Click</button>

            <br /><br />

            <form onSubmit={() => handleFormSubmit()}>
                <label>Enter your Name</label>
                <input type="string" required/><br />
                
                <button>Submit Form</button>

            </form>
        </div>
    )
}
export{EventHandle}