/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 computerDraco.gltf --transform 
Files: computerDraco.gltf [3.85MB] > computerDraco-transformed.glb [772.37KB] (80%)
Author: Nick Broad (https://sketchfab.com/nickbroad)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/laptop-and-mouse-c6e193ac304e477aaed7946289dbe150
Title: Laptop and mouse
*/
import { useGLTF } from "@react-three/drei";

export default function ComputerDraco(props) {
  const { nodes, materials } = useGLTF("/computerDraco-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.MouseWheel_MouseTrans_0.geometry}
        material={materials.PaletteMaterial001}
        position={[10.118, 4.687, 30.64]}
        rotation={[-Math.PI, -Math.PI / 9, -Math.PI / 2]}
        scale={[0.185, 0.037, 0.037]}
      />
      <mesh
        geometry={nodes.MouseWheel_GreenEmissive_0.geometry}
        material={materials.PaletteMaterial002}
        position={[10.118, 4.687, 30.64]}
        rotation={[-Math.PI, -Math.PI / 9, -Math.PI / 2]}
        scale={[0.185, 0.037, 0.037]}
      />
      <mesh
        geometry={nodes.ButtonsTop_MouseTopButton_0.geometry}
        material={materials.MouseTopButton}
        position={[5.747, 4.218, 28.277]}
        rotation={[-Math.PI / 2, 0, -1.222]}
        scale={[4.165, 6.564, 2.188]}
      />
      <mesh
        geometry={nodes.MouseBody_MouseMatte_0.geometry}
        material={materials.MouseMatte}
        position={[6.895, 2.683, 30.734]}
        rotation={[-Math.PI / 2, 0, -1.222]}
        scale={100}
      />
      <mesh
        geometry={nodes.ButtonsGlass_MouseYellowTrans_0.geometry}
        material={materials.PaletteMaterial003}
        position={[8.032, 2.578, 27.127]}
        rotation={[-2.961, -0.314, 1.804]}
        scale={0.438}
      />
      <mesh
        geometry={nodes.CableHolder_MouseCable_0.geometry}
        material={materials.MouseCable}
        position={[11.895, 2.126, 28.92]}
        rotation={[Math.PI, 1.222, 0]}
        scale={[-0.384, 0.384, 0.384]}
      />
      <mesh
        geometry={nodes.Buttons_LaptopKeys_0.geometry}
        material={materials.LaptopKeys}
        position={[12.411, 6.664, 13.904]}
        rotation={[-1.541, -0.082, 1.968]}
        scale={100}
      />
      <mesh
        geometry={nodes.LaptopLid_LaptopLid_0.geometry}
        material={materials.LaptopLid}
        position={[9.799, 7.015, -5.236]}
        rotation={[2.891, 1.211, -2.907]}
        scale={100}
      />
      <mesh
        geometry={nodes.MouseUSB_MouseUSB_0.geometry}
        material={materials.MouseUSB}
        position={[-2.979, 5.015, -0.352]}
        rotation={[-1.541, -0.082, 1.921]}
        scale={100}
      />
    </group>
  );
}

useGLTF.preload("/computerDraco-transformed.glb");
