import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center pt-8">
      <Link className="font-bold text-textColor text-[24px]" href={"/"}>
        FileConverter
      </Link>
    </div>
  );
}
