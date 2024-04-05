"use client";
import React from "react";
import CategoryList from "./categoryList";
import SearchPlace from "./searchPlace";
import SearchMap from "./searchMap";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

const Explore = () => {
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
    // <div className="flex gap-5">
    //   <div>
    //     <CategoryList />
    //   </div>
    //   <div className="cat flex-1 gap-10">
    //     <div>
    //       <SearchPlace />
    //     </div>
    //   </div>
    //   <div className="map flex-1 gap-10">
    //     <div style={{ maxHeight: "100%" }}>
    //       <SearchMap />
    //     </div>
    //   </div>
    // </div>
    <APIProvider apiKey={"AIzaSyBT_7Q6oBgnkM-f_18dZBRvT1BeNA8TQkY"}>
      <div style={{ height: "100vh", width: "100%" }}>
        <Map
          defaultZoom={14}
          defaultCenter={position1}
          mapId="a0c7f1864bf16324"
        >
          {" "}
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
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                  className="h-[80px] w-[100px]"
                />
                <p>{position.name}</p>
                <p>{position.location}</p>
                <p>{position.desc}</p>
              </InfoWindow>
            </>
          ))}
        </Map>
      </div>
    </APIProvider>
  );
};

export default Explore;
