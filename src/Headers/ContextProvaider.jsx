import React, { createContext, useState } from 'react'

const newcontext = createContext()

function ContextProvaider({children}) {
    const [fetchItem, setfetchItem] = useState([])
    console.log(fetchItem);
  return (
    <div>
       <newcontext.Provider value={{setfetchItem,fetchItem}}>
         {children}
       </newcontext.Provider>
    </div>
  )
}

export default ContextProvaider
export{newcontext}