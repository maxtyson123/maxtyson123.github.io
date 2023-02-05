import { extend, useThree } from "@react-three/fiber";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import React from "react";
extend({ DragControls });



//@ts-ignore - this ignores the props warning
export default function Draggable(props){

    const groupRef = React.useRef();                            //This is the group that the objects will be in
    const controlsRef = React.useRef();                         //This is the controls that will be applied to the objects

    const [objects, setObjects] = React.useState();
    const { camera, gl, scene } = useThree();

    React.useEffect(() => {
        setObjects(groupRef.current.children);
    }, [groupRef]);


    React. useEffect(() => {
        controlsRef.current.addEventListener("hoveron", () => {
            scene.orbitControls.enabled = false;
        });
        controlsRef.current.addEventListener("hoveroff", () => {
            scene.orbitControls.enabled = true;
        });
    }, [objects]);

    return (
        <group ref={groupRef}>
            <dragControls ref={controlsRef} args={[objects, camera, gl.domElement]} />
            {props.children}
        </group>
    );
}