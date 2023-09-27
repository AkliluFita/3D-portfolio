import { Decal, Float, useTexture } from "@react-three/drei";
import html_icon from "../../../assets/html-icon.png";

const BallModel = () => {
  const [decal] = useTexture([html_icon]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />

      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          // eslint-disable-next-line react/no-unknown-property
          polygonOffset
          // eslint-disable-next-line react/no-unknown-property
          polygonOffsetFactor={-5}
          // eslint-disable-next-line react/no-unknown-property
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

export default BallModel;
