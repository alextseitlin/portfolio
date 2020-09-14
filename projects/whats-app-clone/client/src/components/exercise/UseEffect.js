import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'


export default function UseEffect() {
    const [age, setAge] = useState(0);
    const realAge = "";

    useEffect(() => {
        console.log("new age", age)
        // realAge = age;
    }, [realAge, age])

    return (
        <div>
            <h1>Working with UseEffect {realAge}</h1>
            <Button variant="primary" className="my-2" onClick={() => setAge(age + 1)}>Login</Button>
        </div>
    )
}
