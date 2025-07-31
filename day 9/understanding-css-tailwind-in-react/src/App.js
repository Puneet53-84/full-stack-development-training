// importing css file for external css styling
import './index.css'
import { AddingTailwind } from './AddingTailwind'; 

function App() {
    return (
        <div>
            {/* internal css */}
            <style>
                {`h2{
                    color:red;
                }`}
            </style>
            {/* inline css  */}
            <h1 style={{ color: "blue" }}>my react is working</h1>
            <h2>this is my internal css</h2>
            <h3> this is my external css styling</h3>
            <AddingTailwind />
        </div>
    )
}

export { App };