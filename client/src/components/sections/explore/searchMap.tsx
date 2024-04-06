"use client";
import React from "react";

import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { Input } from "@/components/ui/input";

const SearchMap = () => {
  const locations = [
    {
      lat: 47.91941168353897,
      lng: 106.91512983001671,
      name: "asbdhj",
      desc: "tasty foods",
      category: "korean",
      location: "3gal",
    },
    {
      lat: 47.91941168353897,
      lng: 106.9252848216232,
      name: "chinese",
      desc: "tasty foods",
      category: "korean",
      location: "3gal",
    },
  ];
  const position1 = { lat: 47.915274773004924, lng: 106.91512983001671 };
  // { lat: 47.91941168353897, lng: 106.9252848216232 },

  return (
    <div className="w-[1000px]">
      <div>
        <Input
          type="search"
          placeholder="Search for restaurant, cuisine or dish"
          className=" w-full h-[60px] text-[20px] "
        />
      </div>
      <div className="mt-10 w-full">
        <APIProvider apiKey={"AIzaSyBT_7Q6oBgnkM-f_18dZBRvT1BeNA8TQkY"}>
          <div style={{ height: "100vh", width: "100%" }}>
            <Map
              defaultZoom={14}
              defaultCenter={position1}
              mapId="a0c7f1864bf16324"
            >
              {locations.map((position: any) => (
                <>
                  <AdvancedMarker position={position} title={"KFC Mongolia"}>
                    <Pin
                      background={"grey"}
                      borderColor={"green"}
                      glyphColor={"purple"}
                    />
                  </AdvancedMarker>
                  <InfoWindow position={position} maxWidth={200} minWidth={100}>
                    <div className="">
                      <img src="" alt="" className="h-[80px] w-[100px]" />
                      <p className="text-primary">{position.name}</p>
                      <p className="text-primary">{position.location}</p>
                      <p className="text-primary">{position.desc}</p>
                    </div>
                  </InfoWindow>
                </>
              ))}
            </Map>
          </div>
        </APIProvider>
      </div>
    </div>
  );
};

export default SearchMap;
