import { useEffect, useRef, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Switch } from "@mui/material";
import InitMap from "../initMap/initMap.jsx";
import { autocompleteOptions } from "../../utils/mockData.js";
import { sortBy } from "lodash";
import { User_languages, languages } from "../../Database.jsx";

import "./Map.css";

const Map = ({
    position,
    MarkerInformation,
    setPositionMapX,
    setPositionMapY,
}) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [positionMap, setPositionMap] = useState({});
    const [sortPosition, setSortPosition] = useState([]);
    const map = useRef();
    const [needHelp, setNeedHelp] = useState(false);
    const [offerHelp, setOfferHelp] = useState(false);

    const handleChangeNeedHelp = (event) => {
        setNeedHelp(event.target.checked);
    };

    const handleChangeOfferHelp = (event) => {
        setOfferHelp(event.target.checked);
    };

    const sortMarkersByCity = (markers, options) => {
        return markers.filter((el) => {
            if (options.includes(el.city)) {
                return el;
            }
        });
    };

    const objectToArray = (object, value) => {
        const array = [];
        object.forEach((el, i) => {
            array[i] = el[value];
        });
        return array;
    };

    const sortMarkersByLanguages = (markers, options) => {
        return markers.filter((el) => {
            const languagesUserId = User_languages.filter(
                (l) => l.user_id === el.user_id
            );
            let IdLanguages = objectToArray(languagesUserId, "language_id");
            IdLanguages = [...new Set(IdLanguages)];
            const languagesUser = languages.filter((l) =>
                IdLanguages.includes(l.id)
            );
            if (languagesUser.length) {
                const titleLanguages = objectToArray(languagesUser, "title");
                const newArray = [...options, ...titleLanguages];
                if (new Set(newArray).size !== newArray.length) {
                    return el;
                }
            }
        });
    };

    const sortMarkersSelectedOptions = (markers) => {
        if (selectedOptions.length !== 0) {
            const array = objectToArray(selectedOptions, "value");
            let type = objectToArray(selectedOptions, "type");
            let sort = [];
            type = [...new Set(type)];
            if (type.length === 1) {
                if (type[0] === "CITY") {
                    sort = sortMarkersByCity(markers, array);
                } else {
                    sort = sortMarkersByLanguages(markers, array);
                }
            } else {
                sort = sortMarkersByCity(markers, array);
                sort = sortMarkersByLanguages(sort, array);
            }
            return sort;
        } else {
            return markers;
        }
    };

    useEffect(() => {
        if (offerHelp && !needHelp) {
            const sort = position.filter((el) => !el.offers_help);
            setSortPosition(sortMarkersSelectedOptions(sort));
        } else if (needHelp && !offerHelp) {
            const sort = position.filter((el) => el.offers_help);
            setSortPosition(sortMarkersSelectedOptions(sort));
        } else {
            const sort = position;
            setSortPosition(sortMarkersSelectedOptions(sort));
        }
    }, [offerHelp, needHelp, selectedOptions]);

    useEffect(() => {
        setPositionMap(map.current.getBoundingClientRect());
    }, []);

    useEffect(() => {
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
        <div className="box_home">
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
                <Switch
                    label="NEED HELP"
                    checked={needHelp}
                    onChange={handleChangeNeedHelp}
                />
                <p>
                    <strong>I NEED HELP</strong> MARKERS
                </p>
                <Switch
                    label="OFFER HELP"
                    checked={offerHelp}
                    onChange={handleChangeOfferHelp}
                />
                <p>
                    <strong>I OFFER HELP</strong> MARKERS
                </p>
            </div>
            <div className="map_wrapper" ref={map}>
                <InitMap
                    position={sortPosition}
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
