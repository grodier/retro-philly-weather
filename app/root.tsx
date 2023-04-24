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
        <meta
          property="og:description"
          content="Get the local Philadelphia weather with a retro style"
        />
        <meta property="og:site_name" content="Retro Philly Weather" />
        <meta property="og:title" content="Retro Philly Weather" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://retrophillyweather.com/" />
        <meta
          property="og:image"
          content="https://retrophillyweather.com/assets/og-img.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://retrophillyweather.com/assets/og-img.jpg"
        />
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
