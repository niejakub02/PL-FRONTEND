import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {Switch} from "@mui/material";
import InitMap from "../initMap/initMap.jsx";
import './Map.css';
import {useState} from "react";

const Map = (props) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const onChangeEvent = (event, value) => {
        setSelectedOptions(value)
    }

    return (
        <div className='box_home'>
            <div className='filter full_width'>
                <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={props.countries}
                    getOptionLabel={(option) => option.title}
                    filterSelectedOptions
                    onChange={onChangeEvent}
                    readOnly={selectedOptions.length === 2}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="FILTER THE MAP"
                            placeholder="SEARCH"
                        />
                    )}
                />
            </div>
            <div className='full_width flexCC'>
                <Switch label="NEED HELP" defaultChecked/>
                <p><strong>I NEED HELP</strong> MARKERS</p>
                <Switch label="OFFER HELP"/>
                <p><strong>I OFFER HELP</strong> MARKERS</p>
            </div>
            <div className='map_wrapper'>
                <InitMap position={props.position}/>
            </div>
            <div className='hint flexCC'>
                <p><strong>HINT</strong>: If you want to add a marker hold left ctrl and click on the map!</p>
                <p><strong>WARNING</strong>: You can place only one marker at the time!</p>
            </div>
        </div>
    )
}

export default Map;