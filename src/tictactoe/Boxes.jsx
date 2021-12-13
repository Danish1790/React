import React from 'react';
import './Boxes.css'
import Box from './Box'


const Boxes = ({choosed}) => {
    
    


    return (
        <>
            <div className='boxes'>
                <div className='boxes-row r1'>
                    <Box choose={choosed} clsname='br box' name='b1' />
                    <Box choose={choosed} clsname='br box' name='b2'/>
                    <Box choose={choosed} className='box' name='b3' />
                </div>
                <div className='boxes-row r2'>
                    <Box choose={choosed} clsname='br box' name='b4'/>
                    <Box choose={choosed} clsname='br box' name='b5'/>
                    <Box choose={choosed}  className='box' name='b6'/>
                </div>
                <div className='boxes-row r3'>
                    <Box choose={choosed} clsname='br box' name='b7'/>
                    <Box choose={choosed} clsname='br box' name='b8'/>
                    <Box choose={choosed} className='box' name='b9' />
                </div>


            </div>
        </>
    )
}


export default Boxes;