import React,{Component,useState,useEffect} from "react";
import { Icon } from '@iconify/react';
import {Box,Heading} from "@chakra-ui/react"
import './App.css'
import TaskTable from "./TaskTable";
import { updateData } from './data';

function App() {
    const [isActivatedRecord, setIsActivatedRecord] = useState(false);
    const [isActivatedClear, setIsActivatedClear] = useState(false);
    const [isActivatedFilter, setIsActivatedFilter] = useState(false);
    const [isActivatedSearch, setIsActivatedSearch] = useState(false);
    // const [data, setData] = useState([]);

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
                console.log(message.data.initiator);
                const responseMessage = updateData(message.data);
                sendResponse({ message: responseMessage });
                // Handle the message and update the data
                // if (message.data) {
                //     sendResponse((prevHistory) => [...prevHistory, updateData(message.data)]);
                // } else {
                //     console.error("Received message with no data.");
                // }
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
                <div id="data-div">
                    <Box maxW="auto" mx="auto" px={6} pt={24} fontSize="13" backgroundColor={"#242424"}>
                        <Heading mb={10}> Network request</Heading>
                        <TaskTable/>
                    </Box>
                    {/* {/* {/* <ul>
                        {data.map((request, index) => (
                            <li key={index}>{request.name}</li>
                        ))}
                    </ul> */}
                </div>
    </div>

        )
    }
export default App;