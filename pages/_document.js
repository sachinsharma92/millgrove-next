import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <a rel="shortcut icon" href="/favicon.png" />
        <meta
          name="keywords"
          content="Home | Wishit | Design Agency"
        />

        <meta name="author" content="Wishit" />

        <meta
          name="description"
          content="The energy of a start-up combined with 30 years of experience"
        />

        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js" async />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js" async />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js" async />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.min.js" async />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/debug.addIndicators.min.js" async />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js" async />

        {/* Othersss */}
        <script src='https://cdnjs.cloudflare.com/ajax/libs/smooth-scrollbar/8.5.2/smooth-scrollbar.js' async></script>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
