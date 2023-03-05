import React from 'react';
import {useState} from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

export default function MapContainer() {

    const [selected, setSelected] = useState({})

    const onSelect = item => {
        console.log(item)
        setSelected(item)
    }
  
  const mapStyles = {        
    height: "50vh",
    width: "80vh"
}
  
  const defaultCenter = {
    lat: 39.7813353, lng: -104.9715600
  }

  const locations = [
    {
      name: "Location 1",
      price: "$45",
      imgUrl: 'https://i.imgur.com/FQDM0jt.png',
      location: { 
        lat: 39.7813353,
        lng: -104.9715600
      },
    },
    {
      name: "Location 2",
      price: "",
      imgUrl: 'https://i.imgur.com/s4z7IpF.png',
      location: { 
        lat: 39.7855353,
        lng: -104.9765600
      },
    },
    {
      name: "Location 3",
      price: "",
      imgUrl: 'https://i.imgur.com/8WVsf5w.png',
      location: { 
        lat: 39.7855353,
        lng: -104.9365600
      },
    },
    {
      name: "Location 4",
      price: "",
      imgUrl: 'https://i.imgur.com/KKTtGrM.png',
      location: { 
        lat: 39.7855353,
        lng: -104.9465600
      },
    },
    {
      name: "Location 5",
      price: "",
      imgUrl: 'https://i.imgur.com/0YOeqmE.png',
      location: { 
        lat: 39.7875353,
        lng: -104.9565600
      },
    }
  ];
  
  return (

     <LoadScript
       googleMapsApiKey='AIzaSyBYzVwD8aWVeJYHz70eZPtmHC8sxV7bDZ8'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
         
         {
            locations.map(item => {
              return (
              <Marker 
                key={item.name} 
                position={item.location}
                onClick={() => onSelect(item)}/>
              )
            })
         }
         {
            selected.location && 
            (
            <div>
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
            <div style={{ color: "black" }}>
              {/* <h1>{selected.name}</h1>
              <h1>{selected.price}</h1> */}
              <img src={selected.imgUrl} width='100%' height='100px'/>
            </div>
            </InfoWindow>
            </div>
            )
         }

     </GoogleMap>
     </LoadScript>
  )
}