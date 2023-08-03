import Image from "next/image";
import Link from "next/link";

interface FileSelectCardProps {
  title: string;
  fileType: string;
}

export default function FileSelectCard(params: FileSelectCardProps) {
  const titleItems = params.title.split(" ");

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h2 className="text-[24px] font-bold">
        <span className="text-primary">{titleItems[0]}</span> {titleItems[1]}{" "}
        <span className="text-primary">{titleItems[2]}</span>
      </h2>
      <div className="bg-secondary w-full flex flex-col justify-center items-center px-[25px] py-[35px]">
        <div className="flex flex-col justify-center items-center gap-4 px-[24px] py-[35px] border-textColor border-2 rounded-[8px] border-dashed">
          <Image
            width={26}
            height={26}
            src={"/upload.svg"}
            alt={"upload image"}
          />
          <p className="text-[14px] mt-1">
            Drag and Drop file or{" "}
            <button className="font-bold underline">Choose file</button>
          </p>
          <p className="text-[12px] text-[#4B4B4B]">{params.fileType}</p>
        </div>
        <Link
          href={"/"}
          className="bg-primary py-[15px] px-[30px] rounded-[7px] mt-[50px]"
        >
          <button className="text-background text-[20px]">Convert File</button>
        </Link>
      </div>
    </div>
  );
}
