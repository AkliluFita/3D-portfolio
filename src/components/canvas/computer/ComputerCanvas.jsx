import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Stage } from "@react-three/drei";

import CanvasLoader from "../CanvasLoader";

// a main component that creates the 3D scene
// eslint-disable-next-line react/prop-types
const ComputersCanvas = ({ children }) => {
  return (
    <Canvas
      frameloop="demand" // canvas  only render when the user interacts with the canvas
      shadows // canvas will have shadows.
      dpr={[1, 2]} // resolution value 1 2
      camera={{ position: [0.2, 0.1, 0.3], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }} // canvas will preserve the drawing buffer
    >
      {/* used to handle loading and error states. */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls // used to add orbit controls to the camera
          enableZoom={true}
          maxPolarAngle={Math.PI / 2} // user can only rotate the camera vertically.
          minPolarAngle={Math.PI / 2}
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

export default ComputersCanvas;
