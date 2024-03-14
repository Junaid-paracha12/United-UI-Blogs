export default function Join({title,text,btn}) {
    return (
       <>
       <div className="text-center grid items-center gap-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="font-semibold">{text}</p>
        <span>
        <button className="button-style">
            {btn}
        </button>
        </span>
       </div>
       </>
    );
}