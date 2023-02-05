import { extend, useThree } from "@react-three/fiber";

// @ts-ignore
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });

// @ts-ignore - this ignores the props warning
export default function Controls(props) {
    const { camera, gl } = useThree();

    // @ts-ignore
    return <orbitControls attach={"orbitControls"}  args={[camera, gl.domElement]} />;
}

