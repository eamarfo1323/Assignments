function Signupbtn(props){

    return(

        <div>
            <button style={{marginRight:props.marginRight, color:props.color, padding:props.padding, fontWeight:props.fontWeight, height:props.height, border:props.border, width:props.width, cursor:props.cursor}}> {props.text}</button>
        </div>
    )
}

export default Signupbtn