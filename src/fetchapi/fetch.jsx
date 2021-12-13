import React, { useState, useEffect } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Fetchapi = () => {

    const [users, setUsers] = useState([])

    const api = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        setUsers(await response.json())
    }

    useEffect(() => {
        api()
    }, [])

    return <>
        <h1>This is a project using fetch api</h1>

        {
            users.map((value) => {
                return (
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">{value.postId}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{value.id}</h6>
                            <p className="card-text">{value.name}</p>
                            <a href="#" className="card-link">{value.email}</a>
                            <a href="#" className="card-link">{value.body}</a>
                        </div>
                    </div>
                )
            })
        }
    </>
}

export default Fetchapi;