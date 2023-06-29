import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";



const particlesOptions = {
  name: "Mouse Attract",
    particles: {
        number: {
            value: 180,
            density: {
                enable: true,
            },
        },
        color: {
            value: "#ff0000",
            animation: {
                enable: true,
                speed: 5,
                sync: false,
            },
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 0.5,
        },
        size: {
            value: {
                min: 1,
                max: 3,
            },
        },
        links: {
            enable: true,
            distance: 100,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 6,
        },
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "attract",
            },
            onClick: {
                enable: true,
                mode: "push",
            },
        },
        modes: {
            grab: {
                distance: 400,
                links: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 0.8,
            },
            attract: {
                distance: 600,
                duration: 0.4,
                speed: 3,
            },
            repulse: {
                distance: 200,
            },
            push: {
                quantity: 4,
            },
            remove: {
                quantity: 2,
            },
        },
    },
    background: {
        color: "transparent",
    },
}


function App() {

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
}, []);

// const particlesLoaded = useCallback(async container => {
//     await console.log(container);
// }, []);
  return (
    <div className="App">
       <Particles
            id="tsparticles"
            init={particlesInit}
            // loaded={particlesLoaded}
            options={particlesOptions}
        />
      <Navigation />
      <Logo />
      <Rank/>
      <ImageLinkForm />
     {/*<FaceRecognition /> */}
    </div>
  );
}

export default App;
