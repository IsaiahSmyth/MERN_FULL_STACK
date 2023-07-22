import React, {useState, useEffect} from 'react'

import { useNavigate, useParams} from 'react-router-dom'

import axios from 'axios'

const Edit = () => {

    const {id} = useParams()

    const navigator = useNavigate()

    const [formData, setFormData] = useState({
        first: "",
        last: "",
    })

    const handleChange = () => {
        const {name, value} = e.target
        setFormData(currentData => ({...currentData, [name]:value}))
    }

    useEffect(()=>{
        axios.get(`https//localhost:8000/api/users/${id}`)
        .then(res=>{
            setFormData(res.data)
        })
        .catch(err=>console.log(err))
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(`https//localhost:8000/api/users/${id}`, formData)
        .then(res=>{
            setFormData({
                first: "",
                last: "",
            })
            navigator('/')
        })
        .catch(err=>console.log(err))
    }


    return (
        <div>
            <h2>Update:</h2>
            <fieldset>
                <legend>Update User</legend>
                <form onSubmit={handleSubmit}>
                    <label>First Name</label>
                    <input name='first' onChange={handleChange} value={formData.first} type="text"/>
                    <br/>
                    <label>Last Name</label>
                    <input name="last" onChange={handleChange} value={formData.last} type="text"/>
                    <br/>
                    <button>Update</button>
                </form>
            </fieldset>
        </div>
    )
}

export default Edit