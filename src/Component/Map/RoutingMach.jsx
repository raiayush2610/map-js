import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
//23.2584857,77.401989
//25.335649,83.007629
const createRoutineMachineLayer = (props) => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(23.2584857, 77.401989),
      L.latLng(25.335649, 83.007629),
    ],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }],
    },
    show: true,
    addWaypoints: false,
    routeWhileDragging: false,
    draggableWaypoints: true,
    fitSelectedRoutes: false,
    // showAlternatives: false,
    // showInstructions: true, // Disable overall instructions
    showStepText: false,
    language: "en", // Force English instructions
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
