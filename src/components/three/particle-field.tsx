import { useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function Particles({ count = 4000 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = 6 + Math.random() * 4
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = radius * Math.cos(phi)
    }
    return arr
  }, [count])

  const colors = useMemo(() => {
    const arr = new Float32Array(count * 3)
    const accent = new THREE.Color("#6366f1")
    for (let i = 0; i < count; i++) {
      arr[i * 3] = accent.r
      arr[i * 3 + 1] = accent.g
      arr[i * 3 + 2] = accent.b
    }
    return arr
  }, [count])

  useFrame((state) => {
    if (!pointsRef.current) return
    mouseRef.current.x = state.pointer.x
    mouseRef.current.y = state.pointer.y

    pointsRef.current.rotation.y += 0.0008
    pointsRef.current.rotation.x += 0.0003

    const targetX = mouseRef.current.y * 0.3
    const targetY = mouseRef.current.x * 0.3
    pointsRef.current.rotation.x += (targetX - pointsRef.current.rotation.x) * 0.02
    pointsRef.current.rotation.y += (targetY - pointsRef.current.rotation.y) * 0.02
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function ConnectedLines({ count = 80 }: { count?: number }) {
  const linesRef = useRef<THREE.LineSegments>(null)

  const { positions, colors } = useMemo(() => {
    const points: THREE.Vector3[] = []
    for (let i = 0; i < count; i++) {
      const radius = 6 + Math.random() * 4
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      points.push(
        new THREE.Vector3(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        )
      )
    }

    const linePositions: number[] = []
    const lineColors: number[] = []
    const accent = new THREE.Color("#818cf8")
    const maxDist = 2.5

    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dist = points[i].distanceTo(points[j])
        if (dist < maxDist) {
          linePositions.push(
            points[i].x, points[i].y, points[i].z,
            points[j].x, points[j].y, points[j].z
          )
          const alpha = 1 - dist / maxDist
          lineColors.push(
            accent.r * alpha, accent.g * alpha, accent.b * alpha,
            accent.r * alpha, accent.g * alpha, accent.b * alpha
          )
        }
      }
    }

    return {
      positions: new Float32Array(linePositions),
      colors: new Float32Array(lineColors),
    }
  }, [count])

  useFrame(() => {
    if (linesRef.current) {
      linesRef.current.rotation.y += 0.0005
      linesRef.current.rotation.x += 0.0002
    }
  })

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <lineBasicMaterial
        vertexColors
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </lineSegments>
  )
}

export function ParticleField({ className }: { className?: string }) {
  return (
    <Canvas
      className={className}
      camera={{ position: [0, 0, 8], fov: 60 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <Particles count={3500} />
      <ConnectedLines count={70} />
    </Canvas>
  )
}
