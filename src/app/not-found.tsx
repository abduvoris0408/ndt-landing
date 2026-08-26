import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#08090a] text-center text-[#f2f3f5]">
        <h1 className="text-7xl font-bold">404</h1>
        <p className="text-sm text-[#94979f]">Page not found.</p>
        <Link
          href="/"
          className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
        >
          Back to Home
        </Link>
      </body>
    </html>
  );
}
