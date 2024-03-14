import Image from "next/image";

export default function Hero({ imgsrc, title, text,subtitle,}) {
  return (
    <>
      <div className="relative">
       
            <Image src={imgsrc} width={3000} height={3000} alt="img"   className="h-[90vh] w-full object-cover rounded-xl"/>
        <div className="absolute bottom-0 p-5 w-full">
            <div className="bg-slate-700 bg-opacity-50 p-6 rounded-xl">
        <div className="flex flex-col gap-4 max-w-4xl">
          <h1 className="text-xl text-white font-semibold">{title}</h1>
          <h1 className="text-4xl font-bold text-white">{subtitle}</h1>
          <p className="text-base font-normal text-white">{text}</p>
        </div>
        </div>
       </div>
      </div>
    </>
  );
}