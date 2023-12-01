import React from "react";
import '../../style/IndexPage/SlideShow.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
const SlideShow = () => {

    return (
        <>
            <div className="slide-show">
                <AwesomeSlider animation="cubeAnimation" bullets={false} >
                    <div>
                        <img src="https://hips.hearstapps.com/hmg-prod/images/hoka-zinal-13085-1643565794.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://skinners.cc/themes/skinners20/assets/img/hero/en/Carousel-Walker_II-840.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://hips.hearstapps.com/hmg-prod/images/run-nike-running-shoes-646cdd1a19c41.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*" alt="" />
                    </div>
                    <div>
                        <img src="https://skinners.cc/themes/skinners20/assets/img/hero/en/Carousel-Easygoer-840.jpg" alt="" />
                    </div>
                </AwesomeSlider>
            </div>
        </>
    )
}
export default SlideShow;