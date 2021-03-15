import Button from './button';
import Navbar from './navbar'
import Input from './inputfield'
import Radiobutton from './radiobutton'
import Checkbox from './checkbox'
import Textarea from './textarea'
import Selectoption from './selectoption'

function Home() {


    return(
        <div>
            <Navbar text="Whizzy Academy" color="#1e88e5"/>
            <h1>My Components</h1>
            <Button text="Clear" color="#d50000"/>
            <Button text="Login" color="#1e88e5"/>
            <Button text="Cancel" color="#880e4f"/>
            <Button text="Submit" color="#003300"/>
            <Input/>
            <Radiobutton/>
            <Checkbox/>
            <Textarea/>
            <Selectoption/>

        </div>
    )
}

export default Home;