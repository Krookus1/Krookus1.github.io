import React from 'react';
import './App.css'; // Importing the default styles (if any)

function Foot() {
  return (
  <section>
    <div class="flex flex-col items-center px-8 space-y-12 lg:space-y-0 lg:flex-row">
      <div class="flex flex-col lg:pt-0 space-y-0 gap-8 text-left lg:text-right">
        <div class="w-full h-full bg-linear-gradient flex flex-col rounded-xl space-y-4 lg:space-y-0">
          <h1 class="text-xl lg:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-center font-rub">Teen sünnipäevadel ja muudel üritustel vahvaid suhkruvatte</h1>
        </div>
        <div class="w-full h-full bg-linear-gradient flex flex-col rounded-xl space-y-4 lg:space-y-0 lg:space-x-6">
          <h1 class="text-xl lg:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-center font-rub">Tunni hind 50 eurot</h1>
        </div>
        <div class="w-full h-full bg-linear-gradient flex flex-col rounded-xl space-y-4 lg:space-y-0 lg:space-x-6">
          <h1 class="text-xl lg:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-center font-rub">Valmistan suhkruvatte Harjumaa piires</h1>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Foot;
