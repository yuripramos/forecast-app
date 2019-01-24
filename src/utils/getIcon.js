import React from "react";
import ClearDay from "../components/common/Icon/ClearDay";
import Rain from "../components/common/Icon/Rain";
import ClearNight from "../components/common/Icon/ClearNight";
import Snow from "../components/common/Icon/Snow";
import Wind from "../components/common/Icon/Wind";
import Fog from "../components/common/Icon/Fog";
import Cloudy from "../components/common/Icon/Cloudy";
import PartlyCloudyDay from "../components/common/Icon/PartlyCloudyDay";
import PartlyCloudyNight from "../components/common/Icon/PartlyCloudyNight";

export default function (iconName, w, h) {
  console.log("iconname", iconName);
  switch (iconName) {
    case iconName === "clear-day":
      return <ClearDay width={w} height={h} />;
    case iconName === "clear-night":
      return <ClearNight width={w} height={h} />;
    case iconName === "rain":
      return <Rain width={w} height={h} />;
    case iconName === "snow":
      return <Snow width={w} height={h} />;
    case iconName === "wind":
      return <Wind width={w} height={h} />;
    case iconName === "fog":
      return <Fog width={w} height={h} />;
    case iconName === "cloudy":
      return <Cloudy width={w} height={h} />;
    case iconName === "partly-cloudy-day":
      return <PartlyCloudyDay width={w} height={h} />;
    case iconName === "partly-cloudy-night":
      return <PartlyCloudyNight width={w} height={h} />;
    default:
      return <ClearDay width={w} height={h} />;
  }
}
