import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-x flex min-h-screen flex-col items-start justify-center gap-4 font-mono">
      <p className="text-signal">$ curl -I /this-page</p>
      <p className="text-fog-300">HTTP/1.1 404 Not Found</p>
      <Link href="/" className="text-cyan underline-offset-4 hover:underline">
        cd ~
      </Link>
    </main>
  );
}
