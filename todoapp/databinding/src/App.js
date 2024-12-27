import { useState } from "react"

function TwoWayDataBinding(){
  let[num,upDateNum]=useState(10);

  return(
    <>
       <h1>{num}</h1>
       <button onClick={()=>
          upDateNum(num)
       }
       >click</button>
<br></br>
       <input type='text' onChange= { (e)=>{
          let temp=e.target.value;
          upDateNum(temp)
       }
      }
       value={num}/>
       
    </>
  )

}
export default TwoWayDataBinding;