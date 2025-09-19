import { useState } from "react"
import './userForm.css'

interface outPutProps{
    name: string,
    destination: string,
    gender: string,
    seat: string,
    state: boolean
}

const OutPut = ({name, destination, gender, seat, state}: outPutProps) => {
    if(state == true){
        return(
            <div className="container">
                <h1>Ticket Details</h1>
                <p>Name: {name}</p>
                <p>Destination: {destination}</p>
                <p>Gender: {gender}</p>
                <p>Seat: {seat}</p>
            </div>
        )
    }
}

function UserForm(){
    const [name, setName] = useState();
    const [destination, setDestination] = useState();
    const [gender, setGender] = useState();
    const [seat, setSeat] = useState();
    const [state, setState] = useState(false)

    function changeData (formData: any) {
        setName(formData.get('name'));
        setDestination(formData.get('destination'));
        setGender(formData.get('gender'));
        setSeat(formData.get('seat'));
        setState(true)
    }

    return (
        <div className="container">
            <form className="userForm" action={changeData}>
                <label htmlFor="name"></label>
                <input type="text" name="name" placeholder="Please enter ur name"/>

                <label htmlFor="destination"></label>
                <input type="string" name="destination" placeholder="Please enter ur destination"/>

                <label htmlFor="gender"></label>
                <input type="string" name="gender" placeholder="Please enter ur gender"/>

                <label htmlFor="seat"></label>
                <input type="number" name="seat" placeholder="Please enter ur seat"/>

                <button type="submit">Submit</button>
            </form>
            <OutPut name={`${name}`} destination={`${destination}`} gender={`${gender}`} seat={`${seat}`} state={state}/>
        </div>
    )
}

export default UserForm;