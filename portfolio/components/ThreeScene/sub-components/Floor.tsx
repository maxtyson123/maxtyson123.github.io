
// @ts-ignore - this ignores the props warning
export default function Floor(props) {
    return (

        //NOTE to self, ... spreads the props into the mesh
        <mesh {...props} recieveShadow={true}>
            <boxBufferGeometry args={[20,1,10]} />
            <meshPhysicalMaterial color='white' />
        </mesh>
    );
}