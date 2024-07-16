import React from 'react';

function MetaIndex() {

  const googleAnalyticsId = 'GTM-K2N3R5L2'; 

  return (
    <>
      <title>Hello Celular - Um mundo conectado na palma da sua mão</title>
      <meta name="description" content="A primeira operadora digital com acesso a séries, filmes e canais de TV. Planos nacionais e conexão em 180 países. Mobilidade 5G e Suporte 24h" />
      <meta name="author" content="Equipe Hello" />
      <meta property="og:title" content="Hello Celular - Uma operadora para você chamar de sua" />
      <meta property="og:description" content="A primeira operadora digital com acesso a séries, filmes e canais de TV. Planos nacionais e conexão em 180 países. Mobilidade 5G e Suporte 24h." />
      <meta property="og:image" content="/../public/img/og-imagem.jpg" />
      <meta name="twitter:title" content="Hello Celular - Uma operadora para você chamar de sua" />
      <meta name="twitter:description" content="A primeira operadora digital com acesso a séries, filmes e canais de TV. Planos nacionais e conexão em 180 países. Mobilidade 5G e Suporte 24h." />
      <meta name="twitter:image" content="/../public/img/og-imagem.jpg" />
      <meta name="adopt-website-id" content="6f190bd1-05e0-462c-9023-40087fd097cd" />
      {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleAnalyticsId}');
        `}
      </script> */}
    </>
  );
}

export default MetaIndex;

