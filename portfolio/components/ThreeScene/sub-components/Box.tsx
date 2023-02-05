
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

// @ts-ignore - this ignores the props warning
export default function Box(props) {

    const texture = useLoader(TextureLoader, "/texture.jpg");

    return (

        <mesh {...props} recieveShadow={true} castShadow={true}>
            <boxBufferGeometry />
            <meshPhysicalMaterial map={texture} color={"white"} />
        </mesh>
    );
}