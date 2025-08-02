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
    let personObject = {
        'name': 'ram',
        'age': 28
    }
    let [person, setPerson] = useState(personObject)

    return (
        <div>
            <h1>{name}</h1>

            <h1>{age}</h1>

            <h1>{isStudent}</h1>
            {/*       
            we can not call set function of state direclty because it will lead
            many rendering
            set funciton of state can be called inside event handler      
            {setIsStudent(true)}
             */}
            {/* 
            this is allowed
            <button onClick={() => setIsStudent(true)}>click</button> */}

            <h1>{mySkills}</h1>
        </div>
    )
}

export { LearningState }