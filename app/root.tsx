import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";
import { ChakraProvider } from "@chakra-ui/react";

export const meta: MetaFunction = () => {
  return { title: "Bingo Girls" };
};

        
//TODO add <link rel="canonical" href="http://example.com/" />

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="Site feito para as streamers Myummi Fox, Liwphael e Misthy que fazem conteúdos em diversas plataformas"></meta>
        <meta name="robots" content="index, follow" />
        <Meta />
        <Links />
      </head>
      <body>
        <ChakraProvider>
          <Outlet />
        </ChakraProvider>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
