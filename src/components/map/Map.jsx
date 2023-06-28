import { useEffect, useRef, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Backdrop, Switch } from "@mui/material";
import InitMap from "../initMap/initMap.jsx";
import { autocompleteOptions } from "../../utils/mockData.js";
import { difference, flatten, sortBy, uniq } from "lodash";

import "./Map.css";
import client from "../../utils/API.js";

const Map = ({
    MarkerInformation,
    setPositionMapX,
    setPositionMapY,
}) => {
    const [key, setKey] = useState(0);
    const [base, setBase] = useState({
        position: [],
        languages: [],
        cities: []
    });
    const [position, setPosition] = useState([])
    const [cities, setCitites] = useState([])
    const [languages, setLanguages] = useState([])
    const [selectedOptions, setSelectedOptions] = useState({
        city: [],
        languages: []
    });
    const [positionMap, setPositionMap] = useState({});
    const [helpOffers, setHelpOffers] = useState({
        need: true,
        offer: false
    })
    const [isLoading, setIsLoading] = useState();

    const map = useRef();

    useEffect(() => {
        getMarkers();
    }, [helpOffers])

    useEffect(() => {
        setPositionMap(map.current.getBoundingClientRect());
    }, []);

    useEffect(() => {
        setPositionMapX(positionMap.left);
        setPositionMapY(positionMap.top);
    }, [positionMap]);

    const addMarker = (e) => {
        if (e.originalEvent.ctrlKey || e.originalEvent.altKey) {
            setIsLoading(true);
            client.get(`https://nominatim.openstreetmap.org/reverse?lat=${e.latlng.lat}&lon=${e.latlng.lng}&format=json`)
                .then(res => {
                    client.post('User/AddMarker', {
                        latitude: e.latlng.lat,
                        longitude: e.latlng.lng,
                        offersHelp: !e.originalEvent.ctrlKey,
                        city: res.data.address.city
                    })
                        .then(res2 => {
                            console.log('Marker')
                        })
                        .finally(() => {
                            getMarkers();
                        })
                })
        }
    }

    const getMarkers = () => {
        setIsLoading(true);

        if (!helpOffers.need && !helpOffers.offer) {
            setPosition([]);
            setBase({
                position: [],
                languages: [],
                cities: []
            });
            setKey(prev => prev + 1);
            setIsLoading(false);
            return;
        }

        if (helpOffers.need && helpOffers.offer) {
            client.get('Marker/Markers', {
                params: { city: '*' }
            })
                .then(res => {
                    const l = uniq((flatten(res.data.map(m => m.user.languages))).map(l => l.language));
                    const c = uniq(res.data.map(m => m.marker.city));
                    setLanguages(l);
                    setCitites(c);
                    setPosition(res.data)
                    setBase({
                        position: res.data,
                        languages: l,
                        cities: c
                    });
                    setKey(prev => prev + 1);
                })
                .finally(() => {
                    setIsLoading(false);
                })
            return;
        }

        if (helpOffers.need) {
            client.get('Marker/Markers', {
                params: { city: '*', offersHelp: false }
            })
                .then(res => {
                    const l = uniq((flatten(res.data.map(m => m.user.languages))).map(l => l.language));
                    const c = uniq(res.data.map(m => m.marker.city));
                    setLanguages(l);
                    setCitites(c);
                    setPosition(res.data)
                    setBase({
                        position: res.data,
                        languages: l,
                        cities: c
                    });
                    setKey(prev => prev + 1);
                })
                .finally(() => {
                    setIsLoading(false);
                })
            return;
        }

        if (helpOffers.offer) {
            client.get('Marker/Markers', {
                params: { city: '*', offersHelp: true }
            })
                .then(res => {
                    const l = uniq((flatten(res.data.map(m => m.user.languages))).map(l => l.language));
                    const c = uniq(res.data.map(m => m.marker.city));
                    setLanguages(l);
                    setCitites(c);
                    setPosition(res.data)
                    setBase({
                        position: res.data,
                        languages: l,
                        cities: c
                    });
                    setKey(prev => prev + 1);
                })
                .finally(() => {
                    setIsLoading(false);
                })
            return;
        }
    }

    const mappedAutocomplete = () => {
        return sortBy([
            ...languages.map(l => ({
                type: 'LANGUAGE',
                value: l.languageName,
                id: l.id
            })),
            ...cities.map(c => ({
                type: 'CITY',
                value: c,
            }))
        ], [
            "type",
            "value",
        ])
    }

    const onChangeEvent = (event, value) => {
        const citiesToFilter = (value.filter(v => v.type === 'CITY')).map(v => v.value);
        const languagesToFilter = (value.filter(v => v.type === 'LANGUAGE')).map(v => v.id);
        setLanguages(base.languages.filter(l => !languagesToFilter.includes(l.id)));
        setCitites(base.cities.filter(c => !citiesToFilter.includes(c)));

        let filtred = base.position;

        if (!!citiesToFilter.length) {
            filtred = filtred.filter(p => citiesToFilter.includes(p.marker.city));
        }

        if (!!languagesToFilter.length) {
            filtred = filtred.filter(p => {
                const usersLanguages = p.user.languages.map(l => l.language.id);
                return languagesToFilter.every(l => usersLanguages.includes(l))
            });
        }

        setPosition(filtred);
    };

    return (
        <div className="box_home">
            <div className="filter full_width">
                <Autocomplete
                    key={key}
                    className="autocomplete_countries"
                    multiple
                    limitTags={2}
                    id="tags-outlined"
                    options={mappedAutocomplete()}
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
                <Switch label="NEED HELP" defaultChecked onChange={(e) => setHelpOffers({ ...helpOffers, need: e.target.checked })} />
                <p>
                    <strong>I NEED HELP</strong> MARKERS
                </p>
                <Switch label="OFFER HELP" onChange={(e) => setHelpOffers({ ...helpOffers, offer: e.target.checked })} />
                <p>
                    <strong>I OFFER HELP</strong> MARKERS
                </p>
            </div>
            <div className="map_wrapper" ref={map}>
                <InitMap
                    position={position}
                    MarkerInformation={MarkerInformation}
                    addMarker={addMarker}
                    isLoading={isLoading}
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
