import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Stage } from "@react-three/drei";
import CanvasLoader from "../CanvasLoader";

// eslint-disable-next-line react/prop-types
const BallCanvas = ({ children }) => {
  return (
    <Canvas
      frameloop="demand" // canvas  only render when the user interacts with the canvas
      dpr={[1, 2]} // resolution value 1 2
      gl={{ preserveDrawingBuffer: true }} // canvas will preserve the drawing buffer
    >
      {/* used to handle loading and error states. */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls // used to add orbit controls to the camera
          enableZoom={false}
          dampingFactor={0.3} // camera will have a damping factor of 0.3. It will smooth out the camera movement.
        />
        {/* is used to create the 3D scene itself */}
        <Stage contactShadow={{ resolution: 1024, scale: 1000 }}>
          {children}
        </Stage>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
