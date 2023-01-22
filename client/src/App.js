import { useEffect, useState } from "react";
import { MacBookAirRootRootRoot1 } from "./MacBookAirRootRootRoot1";
import { SecondPage } from "./SecondPage";

const https = require("https");
const http = require("http");
const fetch = require("fetch");
import axios from 'axios'

const baseURL = "http://localhost:5000"

function joinURL(...urls) {
    var result = "";
    for (let i = 0; i < urls.length - 1; i++) {
        result += urls[i] + '/';
    }
    result += urls[urls.length - 1];
    return result
}

export default function App() {
    var [getEvents, setGetEvents] = useState({});
    var [getEvent1, setEvent1] = useState("");
    var [getDate1, setDate1] = useState("");
    var [getInformation1, setInformation1] = useState("");

    var [getEvent2, setEvent2] = useState("");
    var [getDate2, setDate2] = useState("");
    var [getInformation2, setInformation2] = useState("");

    var [getEvent3, setEvent3] = useState("");
    var [getDate3, setDate3] = useState("");
    var [getInformation3, setInformation3] = useState("");

    var [getEvent4, setEvent4] = useState("");
    var [getDate4, setDate4] = useState("");
    var [getInformation4, setInformation4] = useState("");
    

    var events, json, loading = {"events": []};

    for (let i = 0; i < 4; i++) {
        loading["events"].push([]);
        for (let j = 0; j < 6; j++) 
            loading["events"].at(-1).push("Loading");
    }

    useEffect(function () {
        axios.get(joinURL(baseURL, "get-events")).then( response => {
            console.log(response);
            events = response.data;
            setEvent1(events.events.one.name);
            setDate1(events.events.one.start_date);
            setInformation1(events.events.one.description);
            setEvent2(events.events.two.name);
            setDate2(events.events.two.start_date);
            setInformation2(events.events.two.description);
            setEvent3(events.events.three.name);
            setDate3(events.events.three.start_date);
            setInformation3(events.events.three.description);
            setEvent4(events.events.four.name);
            setDate4(events.events.four.start_date);
            setInformation4(events.events.four.description);
            setGetEvents(response.data);
        }).catch(error => console.log(error));
    }, []);
    

    document.body.style.backgroundColor = "#1e1e1e";
    document.body.style.margin = "0";
    
    return (
        <>
            <MacBookAirRootRootRoot1 event1 = { getEvent1 } event2 = { getEvent2 } event3 = { getEvent3 } event4 = { getEvent4 } date1 = { getDate1 } date2 = { getDate2 } date3 = { getDate3 } date4 = { getDate4 } information1 = { getInformation1 } information2 = { getInformation2 } information3 = { getInformation3 } information4 = { getInformation4 }/>
            {/* <SecondPage
                Revent1={""}
                Rdate1={""}
                Rinfo1={""}
                Revent2={""}
                Rdate2={""}
                Rinfo2={""}
                Revent3={""}
                Rdate3={""}
                Rinfo3={""}
                Sevent1={""}
                Sdate1={""}
                Sinfo1={""}
                Sevent2={""}
                Sdate2={""}
                Sinfo2={""}
            /> */}
        </>
    );
}
