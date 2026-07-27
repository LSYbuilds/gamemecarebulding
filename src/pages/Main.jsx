import React, { useState } from "react";
import { MainContainer } from "../styles/Main.styled";
import sideSlideData from "../data/sideSlideData.json";
import mainSlideData from "../data/slideData.json";


 const Main = () => {
    const mainSlide =mainSlideData.mainSlide;
    const sideContents = sideSlideData.sideSlide;
    console.log(mainSlide,sideContents);
    return(
        <MainContainer>
            <div className="inner">
                <section className="hero_section">
                    <div className="main_slide">
                        <div className="slide_frame">
                            <div className="slide_item">

                            </div>
                            <div className="slide_title"></div>
                        </div>
                    </div>
                    <div className="top_contents">
                    </div>
                </section>
            </div>
        </MainContainer>
    );
 }

 export default Main