import React, {useState, useEffect} from 'react'

import axios from 'axios'
import {Link} from 'react-router-dom'

const Dashboard = () => {

    const [users, setUsers] = useState([])

    const fetchUsers = () => {
        axios.get('http://localhost:8000/api/users')
        .then(res=>setUsers(res.data))
        .catch(err=>console.log(err))
    }

    useEffect(fetchUsers, [])

    const handleDelete = (id) =>{
        alert(`This would delete ${id}`)
        axios.delete(`https://localhost:8000/api/users/${id}`)
        .then(res=>fetchUsers())
        .catch(err=>console.log(err))

    }

    return (
        <div>
            {
                users.length > 0?
                    users.map((user, key) => {
                        return <div>
                            <Link to={`/edit/${user._id}`}key={key}><h2>{user.first}{user.last}</h2></Link>
                            <button onClick={()=>handleDelete(user._id)}>DELETE</button>
                            </div>
                    })
                :
                <p>loading...</p>
                
            }
        </div>
    )
}

export default Dashboard