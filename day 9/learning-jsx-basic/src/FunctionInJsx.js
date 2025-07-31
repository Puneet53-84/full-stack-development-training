function FunctionInJsx() {
    function myFunction() {
        // this is myFunction jsx
        return (
            <div>
                <h1>this is returning from myFunction</h1>
            </div>
        )
    }


    // this is our main jsx we are returing 
    return (
        <div>
            this is FunctionInJsx
            {myFunction()}
        </div>
    )
}

export { FunctionInJsx };