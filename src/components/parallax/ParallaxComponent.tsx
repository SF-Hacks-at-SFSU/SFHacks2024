import { Parallax } from "react-scroll-parallax";

const ParallaxComponent = () => {
    return (
        <div>
            <Parallax translateY={[-20, 20]}>
                <p>Hello testing</p>
            </Parallax>

            <Parallax speed={-100}>
                <img src="frogs/frog1.png"></img>
            </Parallax>
            <img src="frogs/frog2.png"></img>
            <p>I am Dinosaur</p>
        </div>
    );
}

export default ParallaxComponent;