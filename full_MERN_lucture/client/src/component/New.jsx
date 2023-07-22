import React, {useState,} from 'react'

import {useNavigate} from 'react-router-dom'

import axios from 'axios'


const New = () => {

    const navigator = useNavigate()

    const [formData, setFormData] = useState({
        first: "",
        last: "",
    })

    const [firstErr, settFirstErr] = useState("")
    const [lastErr, setLastErr] = useState("")

    const handleChange = () => {
        const {name, value} = e.target
        setFormData(currentData => ({...currentData, [name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post("https//localhost:8000/api/users", formData)
        .then(res=>{
            setFormData({
                first: "",
                last: "",
            })
            navigator('/')
        })
        .catch(err=>{
            const errs = err.response.data.errors

            if (errs.first){
                settFirstErr(errs.first.message)
            } else {
                settFirstErr('')
            }

            if (errs.last){
                setLastErr(errs.last.message)
            } else {
                setLastErr('')
            }
        })
    }


    const errStyle = {
        margin: 0,
        padding: 0,
        color: "red",
        fontweight: "bold"
    }


    return (
        <div>
            <h2>Add a new user:</h2>
            <fieldset>
                <legend>New User</legend>
                <form onSubmit={handleSubmit}>
                    <p style={errStyle}>{firstErr}</p>
                    <label>First Name</label>
                    <input name='first' onChange={handleChange} value={formData.first} type="text"/>
                    <br/>
                    <p style={errStyle}>{lastErr}</p>
                    <label>Last Name</label>
                    <input name="last" onChange={handleChange} value={formData.last} type="text"/>
                    <br/>
                    <button>Add</button>
                </form>
            </fieldset>
        </div>
    )
}

export default New