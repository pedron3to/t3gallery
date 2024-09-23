import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

export async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images?.map((image) => (
        <div key={image.id} className="h-48 w-48">
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              style={{
                objectFit: "contain",
              }}
              alt={image.name}
              width={480}
              height={480}
            />
          </Link>
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  const images = await db.query.images.findMany();

  return (
    <main className="flex flex-row">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
