import React, { useState } from 'react'
// const Todo = require('../back/models/Schema')
import Work from './Work'
import './css/WorkList.css'
import { useEffect } from 'react/cjs/react.development'


const WorkList = (props) => {
    const [workLists, setWorkList] = useState([])
    const [dis, setDis] = useState(true);


    const afterDelete = () => {
        console.log('after delete is running')
    }

    useEffect(async () => {
        const res = await fetch('/register', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        const work = await res.json()

        if(work.message.length===0){
            setDis(true)
        }
        else{
            setDis(false)
        }
        setWorkList(work.message)

    }, [afterDelete])




    useEffect(async () => {
        const res = await fetch('/register', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        const work = await res.json()
        setWorkList(work.message)

        if(work.message.length===0){
            setDis(true)
        }
        else{
            setDis(false)
        }
        
    }, [])


    return (
        <>

            <div className='workList'>
                <div className='row'>
                    <div>
                        <h3>Your Pending Work</h3>
                    </div>


                    {
                        workLists.map((value) => {
                            return (<>
                                <Work heading={value.head} subhead={value.subhead} para={value.paragraph} date={value.date} exptime={value.exptime} afterdel={afterDelete} />
                            </>)
                        })
                    }

                    {

                        dis && <div className='nowork-div'>
                            <h3>WOHOO! NO WORK TO DO</h3>
                        </div>


                    }





                </div>

            </div>

        </>
    )
}

export default WorkList
