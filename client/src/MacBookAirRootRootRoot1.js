import React, { useState } from "react";

import styled from "styled-components";
import { SecondPage } from "./SecondPage";

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

export const MacBookAirRootRootRoot1 = ({ event1, event2, event3, event4, date1, date2, date3, date4, information1, information2, information3, information4 }) => {
  const [inputValue, setInputValue] = useState("");
  const [showSecondPage, setShowSecondPage] = useState(false);

  const [Revent1, setRevent1] = useState("");
  const [Rdate1, setRdate1] = useState("");
  const [Rinfo1, setRinfo1] = useState("");
  const [Revent2, setRevent2] = useState("");
  const [Rdate2, setRdate2] = useState("");
  const [Rinfo2, setRinfo2] = useState("");
  const [Revent3, setRevent3] = useState("");
  const [Rdate3, setRdate3] = useState("");
  const [Rinfo3, setRinfo3] = useState("");
  const [Sevent1, setSevent1] = useState("");
  const [Sdate1, setSdate1] = useState("");
  const [Sinfo1, setSinfo1] = useState("");
  const [Sevent2, setSevent2] = useState("");
  const [Sdate2, setSdate2] = useState("");
  const [Sinfo2, setSinfo2] = useState("");

  const random = (e) => {
    if (e.key === "Enter") {
        // Prompt API for response
        console.log(e);
        axios.post(joinURL(baseURL, "cohere"), {prompt: `${inputValue}`}).then(response => {
            console.log(response);
            setRevent1("Got a response!");
            setRdate1(response.data.normal[0][1]);
        });
    }
  };

  const random1 = (e) => {
    console.log(e);
    axios.post(joinURL(baseURL, "cohere"), {prompt: `${inputValue}`}).then(response => {
        console.log(response);
        setRevent1("Got a response!");
        setRdate1(response.data.normal[0][1]);
    });
  };

  return (
      <>
    <MacBookAirRootRootRoot>
      {console.log(event1)}
      <Element1 />
      <Junky src={`https://file.rendit.io/n/tNal3eizguCnjEa27Fe1.png`} />
      <Component>
        <Text1>RIPPLE</Text1>

        <SearchBar>
          <CustomButton
            onClick={() => random1(inputValue)}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></CustomButton>

          <form onSubmit={random}>
            <CustomSearch
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={random}
              placeholder="Search anything...."
            />
          </form>
          {showSecondPage ? <SecondPage inputValue={inputValue} /> : null}
        </SearchBar>

        <Text3>I can find what you want to do...</Text3>
      </Component>
          <FlexColumn2>
            <Component1>
              <WhiteFlexColumn>
                <Text4>{event1}</Text4>
                <Text5>{date1}</Text5>
              </WhiteFlexColumn>
            </Component1>
            <Paragraph>{information1}</Paragraph>
          </FlexColumn2>
          <FlexColumn2>
            <Component1>
              <WhiteFlexColumn>
                <Text4>{event2}</Text4>
                <Text5>{date2}</Text5>
              </WhiteFlexColumn>
            </Component1>
            <Paragraph>{information2}</Paragraph>
          </FlexColumn2>
          <FlexColumn2>
            <Component1>
              <WhiteFlexColumn>
                <Text4>{event3}</Text4>
                <Text5>{date3}</Text5>
              </WhiteFlexColumn>
            </Component1>
            <Paragraph>{information3}</Paragraph>
          </FlexColumn2>
          <FlexColumn2>
            <Component1>
              <WhiteFlexColumn>
                <Text4>{event4}</Text4>
                <Text5>{date4}</Text5>
              </WhiteFlexColumn>
            </Component1>
            <Paragraph>{information4}</Paragraph>
          </FlexColumn2>
            </MacBookAirRootRootRoot>
          <SecondPage
                Revent1={ Revent1 ? Revent1 : "Loading" }
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
            />
        </>
        );
};

        const Text4 = styled.div`
        height: auto;
        display: inline-block;
        color: #165e53;
        font-size: 30px;
        font-family: IBM Plex Sans Condensed;
        text-align: center;
      
        `;
        const Text5 = styled.div`
        display: inline-block;
        height: auto;
        color: #19949e;
        font-size: 15px;
        font-family: IBM Plex Sans Condensed;
        text-align: center;
      
        `;
        const Paragraph = styled.div`
        width: auto;
        display: inline-block;
        position: relative;
        color: #71b7bd;
        font-size: 18px;
        font-family: IBM Plex Sans;
        text-align: center;
        `;

        const MacBookAirRootRootRoot = styled.div`
        width: 1458px;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 540px 158px 0px 191px;
        background-color: #ffffff;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        overflow: hidden;
        `;
        const Element1 = styled.div`
        width: 1458px;
        height: 805px;
        left: 0px;
        top: 0px;
        position: absolute;
        background-image: linear-gradient(
        180deg,
        #c8f1f5 0%,
        #c6eff3 44%,
        #a7e2e8 68%,
        #b0dbe4 89%,
        #b0dbe4 100%
        );
        filter: blur(0px);
        `;
        const Junky = styled.img`
        width: 1357px;
        height: 391px;
        left: 0px;
        top: 0px;
        position: absolute;
        `;
        const Component = styled.div`
        width: 1042px;
        height: 439px;
        left: 0px;
        top: 0px;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        padding: 73.5px 171px;
        background-size: cover;
        background-image: url("https://file.rendit.io/n/peoaWeK180Resi1PdWNX.png");
        `;
        const Text1 = styled.div`
        width: 302px;
        height: 130px;
        align-self: flex-end;
        margin: 0px 370px 18px 0px;
        font-size: 100px;
        font-family: IBM Plex Sans Condensed;
        text-align: center;
        white-space: nowrap;
        `;
        const FlexColumn = styled.div`
        width: 1039px;
        height: 79.4px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-self: stretch;
        margin: 0px 0px 20px 0px;
        padding: 0.3px 0px 0.3px 2.3px;
        `;
        const Image1 = styled.img`
        width: 1040px;
        height: 80px;
        left: 0px;
        top: 0px;
        position: absolute;
        `;
        const FlexRow = styled.div`
        width: 1039px;
        height: 77.4px;
        position: relative;
        gap: 7.8px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        background-size: cover;
        background-image: url("https://file.rendit.io/n/kOHGXlVxoNDNs1ntbOCe.svg");
        `;
        const FlexColumn1 = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 12.7px 19.2px 17.7px 26.9px;
        background-size: cover;
        background-image: url("https://file.rendit.io/n/VAwwgvKaFixszR8jeLSR.svg");
        `;
        const Component2 = styled.img`
        width: 50.8px;
        height: 47px;
        `;
        const Text2 = styled.div`
        width: 399px;
        height: 52px;
        margin: 10.7px 0px 0px 0px;
        color: #5fa5ab;

        font-size: 40px;
        font-family: IBM Plex Sans Condensed;
        text-align: center;

        white-space: nowrap;
        `;
        const Text3 = styled.div`
        width: 421px;
        height: 39px;
        margin: 0px 0px 0px 310px;
        font-size: 30px;
        font-family: IBM Plex Sans;
        text-align: center;
        white-space: nowrap;
        `;
        const FlexColumn2 = styled.div`
        width: 202px;
        height: 265px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        margin: 0px 41px 0px 0px;
        padding: 0px 13px 0px 14px;
        `;
        const Component1 = styled.div`
        height: 264px;
        left: 0px;
        top: 1px;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 0px 1px;
        mix-blend-mode: multiply;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        `;
        const WhiteFlexColumn = styled.div`
        width: 151px;
        height: 247px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 7px 37px;
        border-width: 1px;
        border-radius: 50px;
        border-style: solid;
        border-color: #165e53;
        background-color: #ffffff;
        `;
        const SearchBarImage = styled.img`
        width: 1040px;
        height: 80px;
        left: 0px;
        top: 0px;
        position: absolute;
        `;
        const SearchBar = styled.div`
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 12.7px 962px 17.7px 26.9px;
        background-size: cover;
        `;
        const CustomButton = styled.button`
        position: absolute;
        width: 72px;
        height: 67px;
        opacity: 0;
        `;
        const CustomSearch = styled.input`
        font-family: IBM Plex Sans;
        color: #165f54;
        font-size: 40px;
        margin-left: 100px;
        margin-top: 2px;
        height: 69px;
        position: absolute;
        border: none;
        background-color: #bbe6df;
        left: 0%;
        right: 10%;
        top: 0%;
        bottom: 0%;
        `;
