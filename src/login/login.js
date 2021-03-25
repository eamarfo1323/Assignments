
import './login.css'
import Signupbtn from './signupbtn'
import image from '../image/Incredible-Zigi.jpg'
import Inputs from './inputs'

function Login() {


    return (

        <div className='mainpage'>
            <form>
                <div className='top'>
                    <h3>Dance Hard Class</h3>
                    <h5>Dance with your heart</h5>
                </div>
                <div className='semitop'>
                    <img className="imagetag" src={image} alt="alter" />
                </div>
                <div className='middle'>
                    <Inputs placeholder="Username" cursor="pointer" justifyItems="center" color= "white" borderColor= "red"  height= "40px" width='230px' marginBottom='20px' borderRadius="50px" border="none" boxShadow="1px -1px 1px 2px " outline="none"/>
                    <Inputs placeholder="password" type="password" cursor="pointer" color= "white" borderColor= "red" height= "40px" width='230px' marginBottom='20px' borderRadius="50px" border="none" boxShadow="1px -1px 1px 2px " outline="none"/>
                    <Inputs placeholder="email" cursor="pointer" color= "white" borderColor= "red"height= "40px" width='230px' marginBottom='20px' borderRadius="50px" border="none" boxShadow="1px -1px 1px 2px " outline="none"/>
                    </div>
                <div className='down'>
                    <Signupbtn text='SignUp' fontWeight="100px" color="red" width="80px" height="30px" marginRight="10px"  cursor="pointer" />
                    <Signupbtn text='Cancel' fontWeight="100px" color="red" width="80px" height="30px" cursor="pointer" />
                </div>
                <div className='footer '> <h4 className="ahaa">Already have an account? </h4></div>

                {/* <div> */}


                {/* </div> */}

            </form>
        </div>



    )

}
export default Login