import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const BottomToTop = () => {
  const bottomToTop = () => {
    window.scrollTo({ top: 0, left: 0, behaviour: "smooth" });
  };

  const [slideBtn, setSlideBtn] = useState(false);

  const listenToScroll = () => {
    const currentWidth =
      document.body.scrollTop || document.documentElement.scrollTop;
    const targetWidth = 850;
    if (currentWidth >= targetWidth) {
      setSlideBtn(true);
    } else {
      setSlideBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  return (
    <Wrapper style={{display: slideBtn ? "flex" : "none"}}>
      <span onClick={bottomToTop}>
        <FontAwesomeIcon className="arrow" icon="fa-solid fa-arrow-up" />
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  > span {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    font-size: 1.5rem;
    background: #f09d18;
    padding: 10px;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
    z-index: 99;
  }
  .arrow {
    animation: upDown 1s linear infinite alternate-reverse;
  }
  @keyframes upDown {
    0% {
      transform: translateY(-0.5rem);
    }
    100% {
      transform: translateY(0.5rem);
    }
  }
`;

export default BottomToTop;
