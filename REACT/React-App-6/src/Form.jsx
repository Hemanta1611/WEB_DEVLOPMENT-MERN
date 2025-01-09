import { useState } from "react";
export default function Form() {
    /*
    let [name, setName] = useState('Hemanta');
    let [lastname, setLastName] = useState('Bhoi');
    let [occupation, setOccupation] = useState('Student');

    let handleNameChange = (e) => {
        setName(e.target.value);
        // console.log(e.target.value);
    }
    let handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }
    let handleOccupation = (e) => {
        setOccupation(e.target.value);
    }
    */

    let [formData, setFormData] = useState({
        name: "",
        lastName: "",
        occupation: "",
    });

    let handleInputChange = (e) => {
        // let fieldName = e.target.name;
        // let newValue = e.target.value;
        
        setFormData((currData) => {
            // currData[fieldName] = newValue; // or
            // return { ...currData, [fieldName] : newValue };
            return {...currData, [e.target.name] : e.target.value};
        })
    };
    
    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input
                type="text"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleInputChange}
                id="name"
                name="name"
            />
            <br /> <br />
            <label htmlFor="lastname">LastName: </label>
            <input
                type="text"
                placeholder="Enter Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                id="lastname"
                name="lastName"
            />
            <br /> <br />
            <label htmlFor="occupation">Occupation: </label>
            <input
                type="text"
                placeholder="Enter Occupation"
                value={formData.occupation}
                onChange={handleInputChange}
                id="occupation"
                name="occupation"
            />
            <hr /> <br />
            <button>Submit</button>
        </form>
    );
}

/*
When we have multiple inputs in a form, 
then we can have a common handleInputChange() for all elements.
*/
