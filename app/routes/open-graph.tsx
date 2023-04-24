import { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Retro Philly Weather: OG" }];
};

export default function OpenGraph() {
  return (
    <div className="font-mono h-full flex justify-center items-center">
      <div className="logo-expanded bg-white bg-gradient-to-b from-blue-800 to-blue-400 text-outline-3d-small text-white text-9xl font-bold rounded-2xl p-2 border-2 sm:border-4 border-white inline-block">
        <div className="flex flex-col justify-center uppercase items-center">
          <span className="inline-block">Retro</span>
          <span className="inline-block">Philly</span>
          <span className="inline-block">Weather</span>
        </div>
      </div>
    </div>
  );
}
