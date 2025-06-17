import Head from "next/head";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Telexcoin</title>
        <meta
          name="description"
          content="description"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://yourdomain.com/"
        />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta
          property="og:title"
          content="title"
        />
        <meta
          property="og:description"
          content="description"
        />
        <meta
          property="og:url"
          content="https://yourdomain.com/"
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/og-image.jpg"
        />

        {/* Twitter Card */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content="Title"
        />
        <meta
          name="twitter:description"
          content="description"
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/og-image.jpg"
        />
      </Head>

      <div className="min-h-screen w-full overflow-hidden bg-black">
        <Hero />
      </div>
    </>
  );
}
