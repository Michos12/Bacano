import UserContext from "../provider/context";
import { useContext } from "react";

function Context (){
    const {user, setUser} = useContext(UserContext)

    return(
        <div className="example">
            <h1>Hello Im {user.name} and I have { user.age }</h1>
        </div>
    )

}

export default Context;