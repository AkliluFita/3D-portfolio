import { useGLTF } from "@react-three/drei";

const ComputerModel = () => {
  const computer = useGLTF("./computerGLTF/scene.gltf"); // to load the model

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={0.5}
        position={[0, -3.25, -1.5]}
      />
    </mesh>
  );
};

export default ComputerModel;
