'use client'

import BrushStrokeHighlight from "./components/BrushStrokeHighlight";
import BouncyButton from "./components/BouncyButton";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="relative">
    <Header/>
     <main style={{minHeight:"calc(100vh - 78px)"}} className="border flex flex-col items-center justify-start md:justify-center pt-12 md:py-8">
       <div className="flex flex-col gap-16 md:gap-20">
        <div className="badge flex py-1 px-3 gap-2 border border-[#adadb3] self-center items-center rounded-sm">
          <span className="pulsating-dot"></span>
          <span>Available for projects</span>
        </div>
        <section className=" mt-6 md:mt-0 text-[#0d0c22]">
        <div className="text-center text-3xl md:text-6xl max-w-[30ch] font-bold">
          <span>Crafting intelligent solutions, solving real problems </span>
        <BrushStrokeHighlight>
        quickly and elegantly.
        </BrushStrokeHighlight>
        </div>
        <p className="mt-6 text-center text-md md:text-xl font-semibold"> Let&apos;s build something extraordinary together!</p>
        </section>
       <BouncyButton/>
       </div>
     </main>
     </div>
  );
}
