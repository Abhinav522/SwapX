import Introtext from "@/components/Introtext";
import Swapui from "@/components/Swapui";

export default function Home() {
  return (
    <div className="flex justify-between items-center h-screen px-16">
      {/* Left Side */}
      <Introtext />

      {/* Right Side */}
      <Swapui />
    </div>
  );
}
