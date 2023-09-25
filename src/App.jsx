import React from "react";

import {
  Hero,
  Navbar,
  Brand,
  Blog,
  Footer,
  Possibilities,
  Features,
} from "./sections";
import { FootMessageCard, PossibilityCard, WhoJocasta } from "./containers";

const App = () => {
  return (
    <main className="max-w-[2000px] m-auto">
      <div className="gradient-night padding-x">
        <Navbar />
        <section className="lg:padding-x">
          <Hero />
        </section>
      </div>

      <div className="bg-night-shade lg:padding-x">
        <section className="padding-x">
          <Brand />
        </section>
        <section className="padding-x">
          <WhoJocasta />
        </section>
        <section className="padding-x">
          <Features />
        </section>
        <section className="padding-x">
          <Possibilities />
        </section>
        <section className="padding-x">
          <PossibilityCard />
        </section>
        <section className="padding-x">
          <Blog />
        </section>
      </div>

      <div className="bg-black">
        <section className="padding-x">
          <FootMessageCard textcolor="text-white" />
        </section>
        <section className=" md:padding-x md:pt-32">
          <Footer />
        </section>
      </div>
    </main>
  );
};

export default App;
