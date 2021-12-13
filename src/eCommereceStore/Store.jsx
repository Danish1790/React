import React, { useState, useEffect } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Store.css';


const Store = () => {

    const [data, setData] = useState([])

    const api = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        setData(await response.json())
    }

    useEffect(() => {
        api();
    }, [])
    console.log(data)



    return (
        <>
            <div className='header'>
                <h1>My Store</h1>
            </div>
            <div className='section container'>
                <div className='row'>

                    {
                        data.map((value) => {
                            return (
                                <div className='col-4 my-3'>
                                    <div class="card" style={{ width: "18rem" }}>
                                        <img src={value.image} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{value.category}</h5>
                                            <p class="card-text overflow-auto">{value.description}</p>
                                            <a href="#" class="btn btn-primary">{value.id}</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Store;