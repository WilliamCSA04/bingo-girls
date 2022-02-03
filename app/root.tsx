import type { ThemeConfig } from '@chakra-ui/react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';
import type { MetaFunction } from 'remix';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export const meta: MetaFunction = () => {
  return { title: 'Bingo Girls' };
};

// TODO add <link rel="canonical" href="http://example.com/" />

export default function App() {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          name="description"
          content="Site feito para as streamers Myummi Fox, Liwphael e Misthy que fazem conteúdos em diversas plataformas"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="William Caetano" />

        <Meta />
        <Links />
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <Outlet />
        </ChakraProvider>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
