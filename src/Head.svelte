<script>
import {title, description, keywords, author, url} from '../package.json';
</script>

<svelte:head>
    <html lang="de" />

    <meta charset="utf-8">
    <title>{title}</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="description" content="{description}">
    <meta name="keywords" content="{keywords.join(', ')}">
    <meta name="author" content="{author}">

    <link rel="apple-touch-icon" sizes="57x57" href="./apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="./apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="./apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="./apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="./apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="./apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="./apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="./apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="./apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="./android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="./favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png">

    <!-- google verify -->
    <meta name="google-site-verification" content="CqV3cESGHyG-BnuZ5ArKraqG8il80TAvZtgtB4PHDd8" />

    <!-- Open Graph -->
    <meta property="og:image" content="https://ingomc.github.io/coburg19/android-icon-192x192.png" />
    <meta property="og:title" content="{title}" />
    <meta property="og:description" content="{description}" />
    <meta property="og:url" content="{url}" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="{title}"/>
    <meta name="twitter:url" content="http://www.website.com/article-name"/>
    <meta name="twitter:title" content="{title}"/>
    <meta name="twitter:description" content="{description}"/>
    <meta name="twitter:image" content="https://ingomc.github.io/coburg19/android-icon-192x192.png"/>
    <meta name=”twitter:creator” value=”@ingomc” />

    <link rel="manifest" href="./manifest.json">
    <meta name="msapplication-TileColor" content="#292F36">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#292F36">

    <link rel="icon" type="image/png" href="./favicon.png">
</svelte:head>