import React, {useContext, useEffect, useState} from "react";
import {Redirect} from 'react-router';
import {AppContext} from "./index";

const CoolItem = ({obj}) => {
    const [isClicked, setIsClicked] = useState(false);
    const {item, setContextItem} = useContext(AppContext);

    const clickHandler = (event) => {
        event.preventDefault();
        setContextItem({...item,...{name: 'Cool', item: obj}});
        setIsClicked(true)
    };

    if (isClicked) {
        return <Redirect to="/cool_edit"/>
    }

    return (
        <div style={{padding: '20px', marginTop:'0px', border: '1px solid #cccc'}}
             onClick={(e) => clickHandler(e)}>
            <img
                src={obj.artworkUrl100.replace('100x100bb.jpg', '500x500bb.jpg')}
                width="189" height="255"
            />
            <br/>
            {obj.trackName} - {obj.releaseDate.split('-')[0]} - {obj.primaryGenreName}

        </div>
    )
};

export default CoolItem;