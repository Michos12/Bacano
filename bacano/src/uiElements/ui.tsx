import { Slider } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import './ui.css'

function Elements(){

    return(
        <div className="box">
            <h1>Hello Im a bunch of UI Elements</h1>
            <div className="boxElements">
                <Slider
                    aria-label="example"
                    defaultValue={2}
                    color="primary"
                />
                <Button variant="outlined" color="error">Send</Button>
                <TextField id="text" label='Im a text field' variant="filled"></TextField>
            </div>
        </div>
    )
}

export default Elements;