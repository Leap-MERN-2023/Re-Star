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
    <div className="">
      <div>
        <Input
          type="search"
          placeholder="Search for restaurant, cuisine or dish"
          className=" w-full h-[60px] text-[20px] "
        />
      </div>
      <APIProvider apiKey={"AIzaSyBT_7Q6oBgnkM-f_18dZBRvT1BeNA8TQkY"}>
        <div style={{ height: "100vh", width: "100%" }}>
          <Map
            defaultZoom={14}
            defaultCenter={position}
            mapId="a0c7f1864bf16324"
          >
            <AdvancedMarker position={position} title={"KFC Mongolia"}>
              <Pin
                background={"grey"}
                borderColor={"black"}
                glyphColor={"green"}
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
    </div>
  );
};

export default SearchMap;
