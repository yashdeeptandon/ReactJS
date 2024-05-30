import Link from "next/link";

export default function Home() {
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">About Us</Link>{" "}
        {/* If we use anchor tag instead of Link tag then that will cause page to refresh that is new page is rendered while Link tag helps us to stay on that page only. */}
      </p>
    </main>
  );
}
