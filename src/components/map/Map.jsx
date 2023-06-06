import { useEffect, useRef, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Switch } from "@mui/material";
import InitMap from "../initMap/initMap.jsx";
import { autocompleteOptions } from "../../utils/mockData.js";
import { sortBy } from "lodash";

import "./Map.css";

const Map = ({
    position,
    MarkerInformation,
    setPositionMapX,
    setPositionMapY,
}) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [positionMap, setPositionMap] = useState({});

    const map = useRef();
    useEffect(() => {
        console.log("1");
        setPositionMap(map.current.getBoundingClientRect());
    }, []);

    // useEffect(() => {
    //     setPositionMap(map.current.getBoundingClientRect());
    //     console.log("Window");
    // }, [window.innerWidth, window.innerHeight]);

    useEffect(() => {
        console.log("=>");
        setPositionMapX(positionMap.left);
        setPositionMapY(positionMap.top);
    }, [positionMap]);

    const autocompleteOptionsSorted = sortBy(autocompleteOptions, [
        "type",
        "value",
    ]);

    const onChangeEvent = (event, value) => {
        setSelectedOptions(value);
    };

    return (
        <div className="box_home" ref={map}>
            <div className="filter full_width">
                <Autocomplete
                    className="autocomplete_countries"
                    multiple
                    limitTags={2}
                    id="tags-outlined"
                    options={autocompleteOptionsSorted}
                    groupBy={(option) => option.type}
                    getOptionLabel={(option) =>
                        option.type === "CITY"
                            ? `📍 ${option.value}`
                            : `🌐 ${option.value}`
                    }
                    filterSelectedOptions
                    onChange={onChangeEvent}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="FILTER THE MAP"
                            placeholder="SEARCH"
                        />
                    )}
                />
            </div>
            <div className="full_width flexCC">
                <Switch label="NEED HELP" defaultChecked />
                <p>
                    <strong>I NEED HELP</strong> MARKERS
                </p>
                <Switch label="OFFER HELP" />
                <p>
                    <strong>I OFFER HELP</strong> MARKERS
                </p>
            </div>
            <div className="map_wrapper">
                <InitMap
                    position={position}
                    MarkerInformation={MarkerInformation}
                />
            </div>
            <div className="hint flexCC">
                <p>
                    <strong>HINT</strong>: If you want to add a marker hold left
                    ctrl and click on the map!
                </p>
                <p>
                    <strong>WARNING</strong>: You can place only one marker at
                    the time!
                </p>
            </div>
        </div>
    );
};

export default Map;
