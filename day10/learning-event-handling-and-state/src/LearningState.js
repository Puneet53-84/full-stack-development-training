import { useState } from 'react'

function LearningState() {
    // create state of type string
    let [name, setName] = useState("ram")

    // create state of type number
    let [age, setAge] = useState(18);

    // state of type boolean
    let [isStudent, setIsStudent] = useState(false);

    // state of type array
    let [mySkills, setMySkills] = useState(['badminton', 'coding', 'painting'])

    // state as a type of object
    let [person, setPerson] = useState({
        'name': 'ram',
        'age': 28
    })

    return (
        <div>
            <h1>{name}</h1>

            <h1>{age}</h1>

            <h1>{isStudent}</h1>
            {/*       
            {setIsStudent(true)} THIS IS NOT ALLOWED
            we can not call set function of state direclty because it will lead many rendering    
             */}
            {/* 
            <button onClick={() => setIsStudent(true)}>click</button> THIS IS ALLOWED
            set funciton of state can be called inside event handler  
            */}

            <h1>{mySkills}</h1>

        </div>
    )
}

export { LearningState }