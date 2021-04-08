import { useAppContext } from '../Context/context'



function Mycomponent(){
    
const {updateValues}=useAppContext();

// console.log (updateValues)
    return(
       <input name='username' onChange={updateValues}></input>

    )
}


export default Mycomponent