import React, { useState, useEffect } from "react";
import style from "./Activities.module.css";
import activitiesImg1 from "../assets/activity_left.png";
import NumberCounter from "number-counter";
import { useInView } from "react-intersection-observer";

const Activities = () => {
  const [counterVisible, setCounterVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 1.0, // adjust the threshold to trigger the effect when the component is fully in view
  });

  useEffect(() => {
    if (inView) {
      setCounterVisible(true);
    }
  }, [inView]);
  return (
    <div id="Activities" className={style.activities}>
      <div className={style.activities_heading}>
        <h1>Our Activities</h1>
        <p>Our activities and experience</p>
      </div>
      <div className={style.activities_content}>
        <img src={activitiesImg1} alt="" />
        <div className={style.activities_rightcontent}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
            numquam modi, cum dolores nobis eaque optio saepe vitae ex magni
            accusantium nostrum voluptatum quod voluptatibus sit nihil tenetur
            dolore suscipit? Lorem ipsum dolor, sit amet consectetur adipisicing.
          </p>
          <div ref={ref} className={style.achievements}>
            {counterVisible && (
              <>
                <div className={style.achievements_data}>
                  <p>
                    <NumberCounter
                      delay={4}
                      end={2000}
                      start={1900}
                      postFix="+"
                    />
                  </p>
                  <p>Projects Done</p>
                </div>
                <div className={style.achievements_data}>
                  <p>
                    <NumberCounter delay={4} start={20} end={28} postFix="+" />
                  </p>
                  <p>Awards Winner</p>
                </div>
                <div className={style.achievements_data}>
                  <p>
                    <NumberCounter
                      delay={4}
                      start={250}
                      end={300}
                      postFix="+"
                    />
                  </p>
                  <p>Team Workers</p>
                </div>
                <div className={style.achievements_data}>
                  <p>
                    <NumberCounter
                      delay={4}
                      start={2000}
                      end={2100}
                      postFix="+"
                    />
                  </p>
                  <p>Happy Clients</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
