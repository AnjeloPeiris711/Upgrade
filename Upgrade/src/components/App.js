import React,{Component,useState} from "react";
import { Icon } from '@iconify/react';
import './App.css'

function App() {
    const [isActivatedRecord, setIsActivatedRecord] = useState(false);
    const [isActivatedClear, setIsActivatedClear] = useState(false);
    const [isActivatedFilter, setIsActivatedFilter] = useState(false);
    const [isActivatedSearch, setIsActivatedSearch] = useState(false);

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
    </div>

        )
    }
export default App;