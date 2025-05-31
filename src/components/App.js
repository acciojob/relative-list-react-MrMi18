import React, { useState } from 'react'

const App = () => {
  const[list , setList] = useState(["a","b","c"]);
 return (
    <ol key={relativeList}>
      {
        list.map((r,index) => {
          return <li key={"relativeListItem1"+index}>{r}</li>
        })
      }
    </ol>
 )
  
}

export default App
