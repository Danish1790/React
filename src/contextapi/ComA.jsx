import React,{useContext} from 'react'

const ComA = () => {

    const mycontext = createContext()
    return (
        <div>
            <mycontext.Provider value='red'>
                com a
            </mycontext.Provider>
            
        </div>
    )
}

export default ComA;
// export {mycontext};
