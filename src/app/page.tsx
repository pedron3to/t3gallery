import Link from "next/link";

const mockUrl = [
  "https://utfs.io/f/9PQTfydC5wYyROnx9bmUBWNcbi80tMygHZCYGlPhfE43e6xo",
  "https://utfs.io/f/9PQTfydC5wYyA0QUAS97qMwaAS390ZNXnDUkyLWKhv61i2ed",
  "https://utfs.io/f/9PQTfydC5wYynLhXbbTbAa9tXEUxkdijJzuKPhYvf50qFyOC",
  "https://utfs.io/f/9PQTfydC5wYy6iKA5PqBzcYxZdSer8bko3s2w1UWmAHDtEVv",
];

const mockImages = mockUrl.map((url, index) => ({
  id: index + 1,
  url,
}));

function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div>Sign in</div>
    </nav>
  );
}

export default function HomePage() {
  return (
    <main className="">
      <TopNav />
      <div className="flex flex-col gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
