import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={283}
        height={64}
      />
    </div>
  );
}
