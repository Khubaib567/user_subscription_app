<script lang="ts">
  import { isUrdu } from "../../stores/store";
  import quran from "../../lib/images/quran.png";
  import tashbeeh from "../../lib/images/tasbeeh.png"
</script>

<div class="flex justify-center border-t-2 rounded-xl">
  <h1 class="text-xl p-5 font-bold">
    {#if $isUrdu}<span dir="rtl"> آپ کیا کرنا چاہیں گے؟ </span>
    {:else}<span> Which One Will You Choose?</span>
    {/if}
  </h1>
</div>

<div
  class="carousel carousel-center w-full max-w-screen-lg p-4 bg-white rounded-box shadow-lg flex flex-row items-center justify-center space-x-6 mx-auto"
>
  <!-- <div class="carousel-item flex flex-col items-center w-40">
    <a href="/quran">
      <div class="flex justify-center text-black h-10">
        {#if $isUrdu}<span dir="rtl"> قرآن </span>
        {:else}<span> Quran </span>
        {/if}
      </div>

      <div>
        <img
          alt="Quran"
          src={quran}
          class="rounded-box w-full h-auto"
        />
      </div>
    </a>
  </div> -->

  <div class="carousel-item flex flex-col items-center w-40">
    <a href="/tasbeeh">
      <div class="flex justify-center text-black h-10">
        {#if $isUrdu}<span dir="rtl"> تسبیح </span>
        {:else}<span> Tasbeeh</span>
        {/if}
      </div>
   
      <div >
        <img
          alt="Tasbeeh"
          src={tashbeeh}
          class="rounded-box w-full h-auto"
        />
      </div>
    </a>
  </div>
</div>