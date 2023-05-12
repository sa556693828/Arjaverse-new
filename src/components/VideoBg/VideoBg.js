import React from "react";
import NewBg from "../Background/NewBg";

export default function VideoBg() {
  //h-[50vh]
  return (
    <NewBg>
      <div className="h-[20vh] sm:h-[60vh] md:h-[60vh] lg:h-[65vh] xl:h-[80vh]">
        <video controls width="100%" height="100%">
          <source src="/videos/vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </NewBg>
  );
}
