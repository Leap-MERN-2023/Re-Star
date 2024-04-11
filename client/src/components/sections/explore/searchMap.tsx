import React, { useState, useCallback, useContext } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CloudFog } from "lucide-react";
import { IOrg } from "@/interface";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

interface IProps {
  mappedOrgByName: (searchName: string) => void;
  mapOrgs: IOrgProps[];
}

interface IOrgProps extends IOrg {
  lat: number;
  lng: string;
  location: string;
  description: string;
  openTime: string;
  closeTime: string;
}

const SearchMap = ({ mapOrgs, mappedOrgByName }: IProps) => {
  const position1 = { lat: 47.915274773004924, lng: 106.91512983001671 };

  const [searchName, setSearchName] = useState("");

  const handleMappedOrg = useCallback(() => {
    mappedOrgByName(searchName);
  }, [mappedOrgByName]);

  // const calculateDistance = (lat1, lon1, lat2, lon2) => {
  //   const earthRadius = 6371; // in kilometers

  //   const degToRad = (deg) => {
  //     return deg * (Math.PI / 180);
  //   };s

  //   const dLat = degToRad(lat2 - lat1);
  //   const dLon = degToRad(lon2 - lon1);

  //   const a =
  //     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
  //     Math.cos(degToRad(lat1)) *
  //       Math.cos(degToRad(lat2)) *
  //       Math.sin(dLon / 2) *
  //       Math.sin(dLon / 2);

  //   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  //   const distance = earthRadius * c;

  //   setDistance(distance.toFixed(1));
  //   return distance.toFixed(2); // Return the distance with 2 decimal places
  // };

  // const onDirectionClick = () => {
  //   window.open(
  //     "https://www.google.com/maps/dir/?api=1&origin=" +
  //       userLocation.lat +
  //       "," +
  //       userLocation.lng +
  //       "&destination=" +
  //       business.geometry.location.lat +
  //       "," +
  //       business.geometry.location.lng +
  //       "&travelmode=driving"
  //   );
  // };

  return (
    <div className="w-[1000px] ">
      <div className="flex justify-center items-center gap-5">
        <Input
          placeholder="Search for restaurant, cuisine or dish"
          className="w-full h-[60px] text-[20px] placeholder:text-primary"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <Button onClick={handleMappedOrg} className="h-14">
          Search
        </Button>
      </div>
      <div className="mt-10 w-full">
        <APIProvider apiKey={"AIzaSyBT_7Q6oBgnkM-f_18dZBRvT1BeNA8TQkY"}>
          <div style={{ height: "100vh", width: "100%" }}>
            <Map
              defaultZoom={14}
              defaultCenter={position1}
              mapId="a0c7f1864bf16324"
            >
              {mapOrgs?.map((org, i) => (
                <React.Fragment key={i}>
                  <AdvancedMarker
                    position={{ lat: Number(org?.lat), lng: Number(org?.lng) }}
                    // position={{ lat: org.lat, lng: 106.901336 }}
                    title={org.name}
                  >
                    <Pin
                      background={"#FE0E0E"}
                      borderColor={"#B30808"}
                      glyphColor={"#9C0909"}
                    />
                  </AdvancedMarker>

                  <InfoWindow
                    position={{
                      lat: Number(org?.lat),
                      lng: Number(org?.lng),
                    }}
                    maxWidth={250}
                    minWidth={150}
                  >
                    <div className="h-[130px] w-[200px]">
                      <img
                        src={org.images.at(0)}
                        className="h-[80px] w-full object-cover"
                      />
                      <p className="text-black text-lg font-medium w-full">
                        {org.name}
                      </p>
                      {/* <p className="text-black">{org.location}</p> */}

                      <p className="text-black font-medium justify-end flex mt-2 gap-1">
                        <span className="text-[#FB1818] ">{org.openTime}</span>:
                        <span className="text-[#27a445] ">{org.closeTime}</span>
                      </p>
                    </div>
                  </InfoWindow>

                  <div className="text-bold">{org.name}</div>
                </React.Fragment>
              ))}
            </Map>
          </div>
        </APIProvider>
      </div>
    </div>
  );
};

export default SearchMap;
