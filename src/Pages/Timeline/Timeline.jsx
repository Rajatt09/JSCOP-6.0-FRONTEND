import React, { useEffect, useState } from "react";
import "./Timeline.css";
import Tiline from "./Tline.jsx";
import timelinedown from "/images/timelinedown.jpeg";

function Timeline() {
  let arr1 = [
    {
      pic: "",
      name: "INAUGURATION CEREMONY",
      time: "10:00 AM - 10:30 AM",
      venue: "LT-4",
    },
    {
      pic: "",
      name: "Physics Talk",
      time: "10:30 AM - 11:30 AM",
      venue: "LT-4",
    },
    {
      pic: "",
      name: "Refreshments ",
      time: "11:30 AM - 12:00 PM",
      venue: "JBS Atrium",
    },
    {
      pic: "",
      name: "Physics Talk",
      time: "12:00 PM - 1:00 PM",
      venue: "LT-4",
    },
    {
      pic: "",
      name: "LUNCH ",
      time: "1:00 PM - 2:30 PM",
      venue: "Annapurna",
    },
    {
      pic: "",
      name: " CSE, ECE Event",
      time: "2:30 PM - 4:00 PM",
      venue: "CL-01, EDC LAB Respectively",
    },
    {
      pic: "",
      name: "Secret Games",
      time: "4:00 PM - 6:00 PM",
      venue: "JBS Atrium",
    },
    {
      pic: "",
      name: "Closing ceremony",
      time: "6:00 PM - 7:00 PM",
      venue: "Auditorium",
    },
  ];

  // let arr2 = [
  //   { pic: talk, name: "TALK3", time: "10:00 AM - 10:45 AM", venue: "LT-4" },
  //   {
  //     pic: tea2,
  //     name: "TEA BREAK",
  //     time: "10:45 AM - 11:15 AM",
  //     venue: "Infront of LT-4",
  //   },
  //   {
  //     pic: onlinem,
  //     name: "ONLINE TALK",
  //     time: "11:05 AM - 12:00 PM",
  //     venue: "Google Meet",
  //   },
  //   { pic: lunch, name: "LUNCH", time: "12:00 AM - 1:30 PM", venue: "Mess" },
  // ];

  // const [arr, setArr] = useState(arr1);
  // const [reference, setReference] = useState(1);

  // function showschedule(day) {
  //   if (day == 1) {
  //     setArr(arr1);
  //     setReference(1);
  //   } else {
  //     setArr(arr2);
  //     setReference(2);
  //   }
  // }

  return (
    <div id="timeline" className="timet">
      <div className="timeline">
        <div className="theading">TIMELINE</div>

        <div className="acttime">
          {/* <div id="tlbtndiv1" className="tlbtndiv">
            <button
              style={{
                backgroundColor: reference === 1 ? "white" : "black",
                color: reference === 1 ? "black" : "white",
              }}
              className="tlbtn"
              onClick={() => showschedule(1)}
            >
              Day-1 Timeline
            </button>
            <button
              style={{
                backgroundColor: reference === 2 ? "white" : "black",
                color: reference === 2 ? "black" : "white",
              }}
              className="tlbtn"
              onClick={() => showschedule(2)}
            >
              Day-2 Timeline
            </button>
          </div> */}

          <Tiline arr={arr1} />

          <div id="tlbtndiv2" className="tlbtndiv">
            <a href={timelinedown} download>
              <button className="tlbtn tlbtn2">Download Schedule</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
