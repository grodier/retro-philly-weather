import { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Settings" }];
};

export default function Settings() {
  return (
    <div className="font-mono">
      <div
        className={
          "fixed top-0 left-0 h-full w-full bg-gray-900 bg-opacity-70 z-10"
        }
      >
        <div className="h-full flex justify-center items-center">
          <div className="overflow-hidden rounded-lg bg-white shadow max-w-2xl">
            <div className="px-4 py-5 sm:p-6 flex flex-col items-center space-y-8">
              <h1 className="text-center font-bold text-3xl">Settings</h1>

              <div>Audio</div>
              <Link to="/">Done</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
