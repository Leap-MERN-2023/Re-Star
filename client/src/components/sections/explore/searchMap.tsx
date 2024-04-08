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

interface IProps {
  mappedOrgByName: (searchName: string) => void;
  mapOrgs: IOrgProps[];
}

interface IOrgProps extends IOrg {
  lat: number;
  lng: string;
  location: string;
  description: string;
}

const SearchMap = ({ mapOrgs, mappedOrgByName }: IProps) => {
  const locations = [
    {
      lat: 47.91941168353897,
      lng: 106.91512983001671,
      name: "asbdhj",
      description: "tasty foods",
      category: "korean",
      location: "3gal",
    },
    {
      lat: 47.91941168353897,
      lng: 106.9252848216232,
      name: "chinese",
      description: "tasty foods",
      category: "korean",
      location: "3gal",
    },
  ];

  const position1 = { lat: 47.915274773004924, lng: 106.91512983001671 };

  const [searchName, setSearchName] = useState("");

  const handleMappedOrg = useCallback(() => {
    mappedOrgByName(searchName);
    console.log("ORGS", mapOrgs);
    console.log("search", searchName);
  }, [searchName, mappedOrgByName]);

  console.log("ammped", mapOrgs);

  // const calculateDistance = (lat1, lon1, lat2, lon2) => {
  //   const earthRadius = 6371; // in kilometers

  //   const degToRad = (deg) => {
  //     return deg * (Math.PI / 180);
  //   };

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
    <div className="w-[1000px]">
      <div className="flex">
        <Input
          placeholder="Search for restaurant, cuisine or dish"
          className="w-full h-[60px] text-[20px]"
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
                      background={"grey"}
                      borderColor={"green"}
                      glyphColor={"purple"}
                    />
                  </AdvancedMarker>
                  <InfoWindow
                    // position={{ lat: 47.925472, lng: 106.901336 }}
                    position={{ lat: Number(org?.lat), lng: Number(org?.lng) }}
                    maxWidth={200}
                    minWidth={100}
                  >
                    <div className="">
                      <img
                        src={org.images.at(0)}
                        alt=""
                        className="h-[80px] w-full object-cover"
                      />
                      <p className="text-primary text-bold">{org.name}</p>
                      <p className="text-primary">{org.location}</p>
                      <p className="text-primary">{org.description}</p>
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
