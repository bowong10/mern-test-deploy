
import React from 'react'
import { useEffect } from 'react'


export default function Listxitem ({id, val}) {

  return (
    // <div>nothing</div>
     <li key={id} >{val}</li>
  )
}
// export default function Listxitem ({id, val, setstime}) {

//   return (
//     // <div>nothing</div>
//      <li key={id} onClick={() => setstime(val)}>{val}</li>
//   )
// }

// export default Listitem