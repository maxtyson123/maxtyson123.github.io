import { Canvas } from "@react-three/fiber";
import css from "./ThreeScene.module.css";
import { Suspense } from "react";

//Submodules
import Floor from "@/components/ThreeScene/sub-components/Floor";
import Box from "@/components/ThreeScene/sub-components/Box";
import LightBulb from "@/components/ThreeScene/sub-components/LightBulb";
import Controls from "@/components/ThreeScene/sub-components/OrbitControls";
import Draggable from "@/components/ThreeScene/sub-components/DragControls";

export default function ThreeScene() {
    return (
        <div className={css.scene}>
            {/* The canvas that all the objects will be rendered on */}
            <Canvas
                shadows={true}
                className={css.canvas}
                camera={{
                    position: [-6, 7, 7],
                }}
            >

                <ambientLight color={"white"} intensity={0.2} />
                <LightBulb position={[0, 3, 0]} />

                <Draggable>
                    <Suspense fallback={null}>
                        <Box rotateX={3} rotateY={0.2} />
                    </Suspense>
                </Draggable>

                <Floor position={[0, -1, 0]} />
                <Controls />

            </Canvas>
        </div>
    );
}