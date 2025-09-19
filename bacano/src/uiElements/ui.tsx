import { Slider } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import './ui.css'

function Elements(){
    return(
        <div className="box">
            <div className="text">
                <p>Hello Im a bunch of UI Elements</p>
                <p>I hope u like it</p>
            </div>
            <div className="boxElements">
                <Slider
                    aria-label="example"
                    defaultValue={2}
                    color="primary"
                />
                <Button variant="outlined" color="error">Send</Button>
                <TextField id="text" label='Im a text field' variant="filled"></TextField>
                <TextField id="text" label='Im another text field' variant="outlined"></TextField>
            </div>
        </div>
    )
}

export default Elements;