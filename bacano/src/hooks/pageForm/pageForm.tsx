import { useState, useEffect } from "react";
import './pageForm.css'

function PageForm(){
    const [title, setTitle] = useState('default title')

    useEffect(() => {
        document.title = title
    }, [title])

    const changeTitle = (event: any) => {
        setTitle(event.target!.value);
    }
    return(
        <div className="container">
            <h1>Please enter a name for the page</h1>
            <input type="text" name="title" onChange={changeTitle}/>
        </div>
    ) 
}

export default PageForm;