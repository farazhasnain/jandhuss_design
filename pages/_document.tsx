import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
       <title>J&H Designs</title>
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&family=Pacifico&display=swap" rel="stylesheet"></link>

    {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"></link> */}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" ></link>
    <link href="lib/animate.min.css" rel="stylesheet" />
    <link href="lib/owlcarousal.min.css" rel="stylesheet" />
    <link href="lib/bootstrap-4.min.css" rel="stylesheet" />

    <link href="css/bootstrap.min.css" rel="stylesheet" />
    {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */}

    <link href="css/style.css" rel="stylesheet" />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      
    <script src='https://kit.fontawesome.com/a076d05399.js' crossOrigin='anonymous'></script>
    </Html>
  )
}
