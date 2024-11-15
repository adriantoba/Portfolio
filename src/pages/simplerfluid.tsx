import { useEffect, useRef } from "react";
import Simulation from "../components/fluidAnimation";
import { useCurrentTheme } from "../hooks/useCurrentTheme";

export default function SimulationFluid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const simulationRef = useRef<Simulation | null>(null);

  const theme = useCurrentTheme();

  console.log(theme);

  useEffect(() => {
    if (containerRef.current) {
      const simulation = new Simulation(containerRef.current);
      simulationRef.current = simulation;
      simulation.setConfig({
        simResolution: 256, // 256 Resolution of the simulation grid
        dyeResolution: 1280, // 1024 Resolution of the dye grid
        captureResolution: 512, //512 Resolution of captured frames
        densityDissipation: 1, //1.2 Rate at which density dissipates
        velocityDissipation: 0.25, //0.5 Rate at which velocity dissipates
        pressure: 0.9, //0.7 Pressure value used in the simulation
        pressureIterations: 10, //20 Number of pressure iterations
        curl: 24, //30 Curl value used in the simulation

        splatRadius: 0.12, //0.3 Radius of the splats
        splatForce: 8000, // Force applied by the splats
        inverted: theme === "dark" ? false : true, // Inverts the colors of the simulation
        shading: false, // Enables shading in the visualization
        colorful: true, // Enables rapid changing of colors
        colorUpdateSpeed: 3, // Speed of color update
        colorPalette:
          theme === "dark"
            ? ["#F27ED3", "#0396A6", "#7f61c2", "#df8aeb", ""]
            : ["#000000"], // #F27ED3", "#B884BF", "#9D8EBF", "#0396A6", "#038C7F" Custom color palette (empty by default, uses hex colors)
        hover: true, // Enables interaction on hover
        backgroundColor: "#052224", // Background color of the canvas
        transparent: true, // Makes the canvas transparent if true
        brightness: 0.7, // Color brightness (Recommend lower than 1.0 if BLOOM is true)
        bloom: true, // Enables bloom effect
        bloomIterations: 8, // Number of bloom effect iterations
        bloomResolution: 512, // Resolution of the bloom effect
        bloomIntensity: 0.02, // Intensity of the bloom effect
        bloomThreshold: 0.9, // Threshold for the bloom effect
        bloomSoftKnee: 0.6, // Soft knee value for the bloom effect
        sunrays: true, // Enables sunrays effect
        sunraysResolution: 256, // Resolution of the sunrays effect
        sunraysWeight: 0.2, // Weight of the sunrays effect
      });

      simulation.start();

      return () => {
        simulation.stop();
      };
    }
  }, [theme]);

  return (
    <div
      className="simplerfluid max-h-screen"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      <div
        ref={containerRef}
        style={{
          backgroundColor: "var(--background)",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "between",
          alignItems: "center",
        }}
      ></div>
    </div>
  );
}
