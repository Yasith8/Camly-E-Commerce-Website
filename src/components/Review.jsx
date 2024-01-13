import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "180px",
  color: "#fff",
  lineHeight: "180px",
  textAlign: "center",
  background: "#f97316",
};

function Review() {
  return (
    <div className="mt-[5rem]">
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>
            "Great product! I love it. Keep up the good work." - Udara Avishka
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            "This helps me to manage all of my tasks and my hobby"  - Amanda Goonathilaka
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
          "Capturing moments with precision. This camera shop delivers exceptional quality" - Nemash Randeniya
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            
"camera shop for quality gear and unmatched expertise." - Mark Rober
          </h3>
        </div>
      </Carousel>
    </div>
  );
}

export default Review;
