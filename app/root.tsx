import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";

import type { LinksFunction } from "@remix-run/node";

import styles from "./tailwind.css";
import { SettingsProvider } from "./components/SettingsProvider";

export const links: LinksFunction = () => [
  { rel: "icon", type: "image/svg.xml", href: "favicon.svg" },
  { rel: "stylesheet", href: styles },
];

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full default-bg">
        <SettingsProvider>
          <Outlet />
        </SettingsProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Analytics />
      </body>
    </html>
  );
}
