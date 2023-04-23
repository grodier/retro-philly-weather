import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

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
        {process.env.NODE_ENV === "production" && (
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-0FSZ48TVKD"
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-0FSZ48TVKD');`,
              }}
            />
          </>
        )}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <SettingsProvider>
          <Outlet />
        </SettingsProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
