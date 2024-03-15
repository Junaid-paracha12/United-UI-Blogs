
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
         {
          imgsrc:"/b2.jpg",
          title:"Interview with Economist and UX Designer,Maya Loviere",
          text:"Maya Louviever is an Economist and UX Designer from Wellington,New Zeland.She has worked with Spotify,Nike,Chews,Makr, and Square.Mia de Silva Sat Down wit...",
          iconsrc:"/up.png",
          name :"Demi Wllkinson.",
          date:"16 jan 2024",
         },
         {
          imgsrc:"/b3.jpg",
          title:"A Relentless Pursuit of Perfection in Product Design",
          text:"I began to notice that there was a sharp contrast between well-made, crafted products and poorly made ones, and an even greater distinction between the people who ma..",
          iconsrc:"/up.png",
          name :"Lana Setiner.",
          date:"16 jan 2024",
         },
         {
          imgsrc:"/b4.jpg",
          title:"A Continually Unfolding History Hillview by Made by Hand",
          text:"A single building occupies the hillside at Hillview, a historic 240-hectare former sheep farm on Tasmania's Bruny Island. The much-lauded work of Made by Hand Architec...",
          iconsrc:"/up.png",
          name :"Phonix Baker.",
          date:"16 jan 2024",
         },
         {
          imgsrc:"/b5.jpg",
          title:"How Remote Collaboration Makes Us Better Product Designers",
          text:"Collaboration can make our teams stronger, and our individual designs better Remote work has made brought new challenges to remote collaboration, but thankfully..",
          iconsrc:"/up.png",
          name :"Phonix Baker.",
          date:"16 jan 2024",
         },
         {
          imgsrc:"/b6.jpg",
          title:"Best Books on Scaling Your Early- Stage Startup",
          text:"This collection of the best startup books for scaling your startup are packed full with valuable and actionable advice to take your business to the next level!",
          iconsrc:"/up.png",
          name :"Phonix Baker.",
          date:"16 jan 2024",
         },
         {
          imgsrc:"/b7.jpg",
          title:"How to Run a Successful Business With Your Partner",
          text:"Starting a business with your spouse or significant other is an exciting but delicate process and requires a great deal of faith. We spoke to a dozen successful businesses..",
          iconsrc:"/up.png",
          name :"Phonix Baker.",
          date:"16 jan 2024",
         },
         {
          imgsrc:"/b8.jpg",
          title:"Why Food Matters - Disease Prevention & Treatment",
          text:"Eating more plants and less meat has been tied to a longer life and a reduced risk of cardiovascular disease in a new study with a 16% lower risk of cardiovascular..",
          iconsrc:"/up.png",
          name :"Phonix Baker.",
          date:"16 jan 2024",
         },
         {
          imgsrc:"/b9.jpg",
          title:"Conversations with London Makr & Co.",
          text:"We sat down with London's fast-growing brand and product design studio, Makr & Co. to find out how they've used Untitled Ul to 2x their revenue...",
          iconsrc:"/up.png",
          name :"Phonix Baker.",
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