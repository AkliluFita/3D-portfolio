import { Decal, Float, useTexture } from "@react-three/drei";

const BallModel = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />

      <mesh castShadow receiveShadow scale={2.7}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#7F2F92"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          // scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

export default BallModel;
