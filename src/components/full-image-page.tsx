import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";
export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  const uploaderInfo = await clerkClient.users.getUser(image?.userId);

  return (
    <div className="flex h-full w-screen min-w-0 items-center justify-center text-white">
      <div className="flex-shrink flex-grow">
        <img src={image?.url} className="object-contain" />
      </div>
      <div className="flex h-full w-56 flex-shrink-0 flex-col border-l">
        <div className="border-b text-center text-lg font-bold">
          {" "}
          {image?.name}
        </div>

        <div className="col flex p-2">
          <span>Upload by:</span>
          <span>{uploaderInfo.fullName}</span>
        </div>
        <div className="col flex p-2">
          <span>Created on:</span>
          <span>{new Date(image?.createdAt).toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
