import { Mukta } from "next/font/google";

const mukta = Mukta({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return <main style={mukta.style} className=""></main>;
}
