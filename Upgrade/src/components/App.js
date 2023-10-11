import React,{Component,useState,useEffect} from "react";
import { Icon } from '@iconify/react';
import './App.css'

function App() {
    const [isActivatedRecord, setIsActivatedRecord] = useState(false);
    const [isActivatedClear, setIsActivatedClear] = useState(false);
    const [isActivatedFilter, setIsActivatedFilter] = useState(false);
    const [isActivatedSearch, setIsActivatedSearch] = useState(false);
    const [data, setData] = useState([]);

    const handleRecordClick = () => {
        setIsActivatedRecord(!isActivatedRecord);
    };
    const handleClearClick = () => {
        setIsActivatedClear(!isActivatedClear);
    };
    const handleFilterClick = () => {
        setIsActivatedFilter(!isActivatedFilter);
    };
    const handleSearchClick = () => {
        setIsActivatedSearch(!isActivatedSearch);
    };
    useEffect(() => {
        chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
            if (message.type === "display_data") {
                // Handle the message and update the data
                if (message.data) {
                    setData((prevHistory) => [...prevHistory, message.data]);
                } else {
                    console.error("Received message with no data.");
                }
            }
        });
    }, []);
        return(
            <div className="container">
                <div className="topnav">
                <a href="#record" onClick={handleRecordClick}>
                    {/* <Icon icon={`mdi:power${isActivated ? '-off' : ''}`} /> */}
                    <Icon className={`ricon ${isActivatedRecord ? 'ractive-icon' : ''}`} icon={`mdi:power`} />
                </a>
                    <a href="#clear" onClick={handleClearClick}>
                    <Icon className={`cicon ${isActivatedClear ? 'cactive-icon' : ''}`} icon={`mdi:clear-outline`} />
                    </a>
                    <a href="#filter" onClick={handleFilterClick}>
                    <Icon className={`ficon ${isActivatedFilter ? 'factive-icon' : ''}`} icon={`mdi:filter-outline`} />
                    </a>
                    <a href="#search" onClick={handleSearchClick}>
                    <Icon className={`sicon ${isActivatedSearch ? 'sactive-icon' : ''}`} icon={`mdi:search`} />
                    </a>
                </div>
                <main>
                    <p>Welcome to the Upgrade Mode interface.</p>
                    <button className="upgrade-button">Activate</button>
                </main>
                <div id="data-div">
                    <h3>URL History:</h3>
                    <ul>
                        {data.map((request, index) => (
                            <li key={index}>{request.url}</li>
                        ))}
                    </ul>
                </div>
    </div>

        )
    }
export default App;