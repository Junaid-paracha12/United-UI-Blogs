import Image from "next/image";

export default function Blogs({title,btn1,btn2,data}) {
    return (
        <>
        <div className=""> 
            <div className="flex items-center justify-between my-6">
                <h1 className="text-2xl font-bold">{title}</h1>
              <span>  <button className="button-style">
                    {btn1}
                </button>
                </span>
            </div>
        <div className="grid grid-cols-3 gap-5">
        {data.map((v, i) => (
          <div key={i} className="flex flex-col gap-4">
            <Image src={v.imgsrc} width={5000} height={500} className="h-[40vh] rounded-2xl w-full object-fill" alt="img" />
            <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold">{v.title}</h1>
            <Image src={v.iconsrc} width={20} height={20} alt="icon" className="" />
            </div>
            <p className="text-sm font-semibold">{v.text}</p>
              <div className="flex items-center gap-2">
              <Image src={v.imgsrc} width={50} height={50} className="w-7 h-7 rounded-full object-cover" alt="img" />
              <span className="flex items-center">
              <p className="text-sm font-semibold">{v.name}</p>
              <p className="text-sm font-semibold">{v.date}</p>
              </span>
              </div>
          </div>
        ))}
        </div>
        <span className="my-4 flex justify-center">
        <button className="button-style">
            {btn2}
        </button>
        </span>
        </div>
        </>
    );
}