import {
  Decal,
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";


const Box3D = () => {
  return (
    <div className="w-[20rem] h-[20rem] lg:w-[30rem] lg:h-[30rem]  opacity-50 ">
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={"aqua"}>
            {/* <RenderTexture attach="map"> */}
            {/* <PerspectiveCamera makeDefault position={[1, 1, 2]} /> */}
            {/* <color attach="background" args={["green"]} /> */}
            {/* <Text frontSize={1} color="#ffffff" position={[3, 2, 1]}> */}
            {/* Hello */}
            {/* </Text> */}
            {/* <Text frontSize={1} color="#ffffff" position={[1, 2, 1]}>
                Babb
              </Text> */}
            {/* </RenderTexture> */}
          </meshStandardMaterial>
        </mesh>
      </Canvas>
    </div>
  );
};

export default Box3D;
