import React from "react";
import { string } from "prop-types";
import ClearDay from "../components/common/Icon/ClearDay";
import Rain from "../components/common/Icon/Rain";
import ClearNight from "../components/common/Icon/ClearNight";
import Snow from "../components/common/Icon/Snow";
import Wind from "../components/common/Icon/Wind";
import Fog from "../components/common/Icon/Fog";
import Cloudy from "../components/common/Icon/Cloudy";
import PartlyCloudyDay from "../components/common/Icon/PartlyCloudyDay";
import PartlyCloudyNight from "../components/common/Icon/PartlyCloudyNight";

const IconGenerator = props => {
  switch (props.name) {
    case "clear-day":
      return <ClearDay {...props} />;
    case "clear-night":
      return <ClearNight {...props} />;
    case "rain":
      return <Rain {...props} />;
    case "snow":
      return <Snow {...props} />;
    case "wind":
      return <Wind {...props} />;
    case "fog":
      return <Fog {...props} />;
    case "cloudy":
      return <Cloudy {...props} />;
    case "partly-cloudy-day":
      return <PartlyCloudyDay {...props} />;
    case "partly-cloudy-night":
      return <PartlyCloudyNight {...props} />;
    default:
      return;
  }
}

IconGenerator.propTypes = {
  name: string
};


export default IconGenerator;

