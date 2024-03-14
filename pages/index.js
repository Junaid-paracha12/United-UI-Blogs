
import Blogs from "@/components/Blogs";
import Hero from "@/components/Hero";
import Join from "@/components/Join";

export default function() {
 const Blogsdata =[
         {
          imgsrc:"/b1.jpg",
          title:"Interview with Economist and UX Designer,Maya Loviere",
          text:"Maya Louviever is an Economist and UX Designer from Wellington,New Zeland.She has worked with Spotify,Nike,Chews,Makr, and Square.Mia de Silva Sat Down wit...",
          iconsrc:"/up.png",
          name :"Demi Wllkinson.",
          date:"16 jan 2024",
         },
 ];
  return (

    <>
    <div className="app-container my-2 flex flex-col gap-8">
    <Hero
    imgsrc={"/hero.jpg"}
    title={"Featured"}
    subtitle={"Switching From Photography to UX Design: Everything You Need to Know With Viola LeBlane"}
        text={
          "Viola LeBlance is a 23-year-old photographer and product designer from Toronto,Ontario.She has worked with Spotify,Nike,Chews,Makr,and Square.Sophia Munn asked her a few questions about her work."
        }
        
      />

      <Blogs title={"Recent blog posts"}
      btn1={"View all posts"}
       data={Blogsdata}
       btn2={"loading more.."}
       />
       
       <Join 
       title={"Let's get started on something great"}
       text={"Join over 4,000+ startups already growing with Untitled."}
       btn={"Start your 7-day free trail"}
       />
    </div>
    </>
  );
}