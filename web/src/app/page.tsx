import { Balancer } from "react-wrap-balancer";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-[32px] font-bold">
        <h1 className="text-center py-20">
          <Balancer>
            Convert <span className="text-primary ">PDF</span> files to{" "}
            <span className="text-primary">DOCX</span> and vice versa
          </Balancer>
        </h1>
      </div>
    </div>
  );
}
