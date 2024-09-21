import { db } from "~/server/db";

export const dynamic = "force-dynamic";

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

export default async function HomePage() {
  const images = await db.query.images.findMany();

  return (
    <main className="">
      <div className="flex flex-col gap-4">
        {images.map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
