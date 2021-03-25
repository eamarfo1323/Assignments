
import './inputs.css'

function Inputs(props){

    return(

        <div>
            
        <input ClassName="myinput" placeholder={props.placeholder} type={props.type} style={{backgroundColor:props.color, justifyItems:props.justifyItems,border:props.border, boxShadow:props.boxShadow, borderRadius:props.borderRadius, outline:props.outline, width:props.width, height:props.height, padding:props.padding, borderColor:props.borderColor, cursor:props.cursor, marginBottom:`${props.marginBottom}`}} ></input>
       
        </div>
        
    )
}

export default Inputs