import React, {useContext, useEffect, useState} from "react";
import {Redirect} from 'react-router';
import {AppContext} from "./app";

import CoolItem from "./CoolItem";

const Cool = () => {
    const [data, setData] = useState([]);
    const {item, setContextItem} = useContext(AppContext);

    useEffect(() => {
        setData([]);
        fetch('https://itunes.apple.com/search?media=&term=' + item.searchText, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then(response => {
                console.log(response.results);
                setData(response.results);
                setContextItem({...item,...{name: 'Cool',
                        itemsCount: response.results.length}});
            })
            .catch((error) => {
                console.log('error ' + error);
            })
    }, [item.searchText]);

    let loading = null;

    if (data.length < 1 || data === undefined) {
        loading = <h3>Loading...</h3>
    }

    return (
        <>
            <div style={{
                fontSize: 34,
                textAlign: "center",
                marginTop:'80px',
            }}>

                {loading}

                {
                    data.map(item => (
                            <CoolItem obj={item} key={item.trackId}/>
                        )
                    )}
            </div>
        </>
    )
};

export default Cool;
