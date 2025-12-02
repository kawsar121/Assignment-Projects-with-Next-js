import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
  <h1 className="text-3xl md:text-5xl font-bold text-center">
    Welcome to Product Explorer
  </h1>
  <p className="text-gray-500 mt-5 text-center">Browse products easily</p>
</div>

  );
}
