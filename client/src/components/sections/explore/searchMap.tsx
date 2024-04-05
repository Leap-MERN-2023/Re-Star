"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import React from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

const SearchMap = () => {
  const position = { lat: 47.915274773004924, lng: 106.91512983001671 };

  return (
    // <div className="">
    //   <div>
    //     <Input
    //       type="search"
    //       placeholder="Search for restaurant, cuisine or dish"
    //       className=" w-full h-[60px] text-[20px] "
    //     />
    //   </div>
    //   <div className="flex flex-col space-y-3 mt-10">
    //     {/* <div className="space-y-2 border-2 p-2 rounded-md  border-white">
    //       <iframe
    //         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9245.51287873066!2d106.91410023980148!3d47.917852827384515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d969246cb53d827%3A0xeaf75a1777f2b910!2sMongolian%20National%20Art%20Gallery!5e0!3m2!1sen!2smn!4v1710937365001!5m2!1sen!2smn"
    //         style={{ border: 0, width: 600, height: 800 }}
    //         loading="lazy"
    //         referrerPolicy="no-referrer-when-downgrade"
    //       ></iframe>
    //     </div> */}

    <APIProvider apiKey={"AIzaSyBT_7Q6oBgnkM-f_18dZBRvT1BeNA8TQkY"}>
      <div style={{ height: "100vh", width: "100%" }}>
        <Map defaultZoom={14} defaultCenter={position} mapId="a0c7f1864bf16324">
          <AdvancedMarker position={position} title={"KFC Mongolia"}>
            <Pin
              background={"grey"}
              borderColor={"green"}
              glyphColor={"purple"}
            />
          </AdvancedMarker>
          <InfoWindow position={position} maxWidth={200}>
            <p>
              This is the content for another infowindow with <em>HTML</em>
              -elements.
            </p>
          </InfoWindow>
        </Map>
      </div>
    </APIProvider>
    //   </div>
    // </div>
  );
};

export default SearchMap;
