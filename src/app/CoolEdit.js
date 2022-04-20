import React, {useContext, useEffect, useState} from "react";
import {AppContext} from "./index";
import {Redirect} from "react-router-dom";
import Avatar from '@mui/material/Avatar';

const CoolEdit = () => {
    const [isClicked, setIsClicked] = useState(false);
    const {item, setContextItem} = useContext(AppContext);

    useEffect(() => {
        setContextItem({...item,...{name: 'CoolEdit', itemsCount: 1}});
    }, []);


    const clickHandler = (event) => {
        event.preventDefault();
        setContextItem({...item,...{name: 'Cool', itemsCount: 0}});
        setIsClicked(true)
    };

    if (isClicked || item.item === undefined) {
        return <Redirect to="/cool"/>
    }

    return (
        <div style={{padding: '20px', marginTop:'80px', border: '1px solid #cccc'}}
             onClick={(e) => clickHandler(e)}>
            <div style={{textAlign: 'center'}}>
                <img
                    src={item.item.artworkUrl100.replace('100x100bb.jpg', '500x500bb.jpg')}
                    width="300" height="400"
                />
            </div>
            <br/>
            {item.item.trackName} <hr/> {item.item.longDescription}

        </div>
    )
};

export default CoolEdit;
