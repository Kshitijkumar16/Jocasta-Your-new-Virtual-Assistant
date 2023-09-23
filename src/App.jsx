import React from "react";

import { Hero, Navbar, Brand, Blog, Footer, Possibilities, Features } from "./sections";
import { FootMessageCard, PossibilityCard } from "./containers";

const App = () => {
  return (
    <main className="max-w-[2000px]">
      <div className="gradient-night padding-x">
        <Navbar />
        <section className="lg:padding-x">
          <Hero />
        </section>
        <section className="lg:padding-x">
          <Brand />
        </section>
        <section className="lg:padding-x">
          <Possibilities />
        </section>
        <section className="lg:padding-x">
          <PossibilityCard />
        </section>
        <Features />
      </div>

      <section className=" bg-black lg:padding-x">
        <Blog />
      </section>

      <section className="padding-x bg-black">
        <FootMessageCard textcolor="text-white" />
      </section>

      <section className="bg-black md:padding-x md:pt-32">
        <Footer />
      </section>
    </main>
  );
};

export default App;
