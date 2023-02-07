import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
       <title>J&H Designs</title>
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&family=Pacifico&display=swap" rel="stylesheet"></link>

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"></link>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" ></link>
    <link href="lib/animate.min.css" rel="stylesheet" />
    <link href="lib/owlcarousal.min.css" rel="stylesheet" />
    <link href="lib/bootstrap-4.min.css" rel="stylesheet" />

    <link href="css/bootstrap.min.css" rel="stylesheet" />

    <link href="css/style.css" rel="stylesheet" />
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script src="https://code.jquery.com/jquery-3.4.1.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></Script>
        <Script src="lib/wow/wow.min.js"></Script>
        <Script src="lib/easing/easing.min.js"></Script>
        <Script src="lib/waypoints/waypoints.min.js"></Script>
        <Script src="lib/owlcarousel/owl.carousel.min.js"></Script>
        <Script src="lib/tempusdominus/js/moment.min.js"></Script>
        <Script src="lib/tempusdominus/js/moment-timezone.min.js"></Script>
        <Script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></Script>
        <Script src="js/main.js"></Script>
      </body>
    </Html>
  )
}
