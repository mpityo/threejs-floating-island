import { Text3D } from '@react-three/drei';

export function Words () {
    return (
        <>
            <Text3D
                font={process.env.PUBLIC_URL + "/fonts/Roboto_Regular.json"}
                size={0.275}
                height={0.065}
                // how many triangles to use
                curveSegments={12}
                // [x,y,z]
                position={[3.75, 5.65, 0.75]}
                rotation={[0, -0.2, -0.05]}
            >
                CZ1657
                {/* material to apply */}
                <meshStandardMaterial color={[1, 0.15, 0.1]} emissive={[1, 0.1, 0]} />
            </Text3D>

            <Text3D
                font={process.env.PUBLIC_URL + "/fonts/Roboto_Regular.json"}
                size={0.275}
                height={0.065}
                curveSegments={12}
                position={[3.75, 6, 0.75]}
                rotation={[0, -0.2, -0.05]}
            >
                Portal
                <meshStandardMaterial color={[1, 0.15, 0.1]} emissive={[1, 0.1, 0]} />
            </Text3D>
        </>
    )
}