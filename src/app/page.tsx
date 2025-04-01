import Hero from "./hero/hero";
import Steps from "./steps/steps";
import WhatWeOffer from "./wwo/wwo";
import FAQ from "./faq/faq";
import Footer from "./footer/footer";

export default function Home() {
  return (
    <div>
<Hero/>
{/* <Services/>    */}
{/* <Steps/> */}
<WhatWeOffer/>
<Steps/>
<FAQ/>
<Footer/>
    </div>


  );
}
