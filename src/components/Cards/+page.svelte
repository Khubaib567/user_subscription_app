<script lang="ts">
  import type { TPost } from "../../types";
  export let ayat: any;
</script>

<!-- Aaj ki ayat-->

<div class="px-3 flex justify-center">
  <div
    class="card w-screen shadow-xl"
    style="background-image:url(https://i.ibb.co/ZBdW7fK/aj-ki-ayaat.png); background-size:cover"
  >
    <div class="card-body">
      <h2 class="text-white">Ayat_ID</h2>
      <h2 class="text-white">{ayat.number}</h2>
      <p class="text-white">{ayat.text}</p>
      <p class="text-white">Ayat_text</p>
    </div>
    <br />
  </div>
</div>

<br />

<!-- <br /> -->

<!-- Aaj ki hadees -->

<div class="px-3 flex justify-center">
  <div
    class="card w-screen"
    style="background-image:url(https://i.ibb.co/D859zTz/aj-ki-hadith.png); background-size:cover"
  >
    <div class="card-body">
      <!-- <h2 class="text-2xl font-bold">Aaj Ki Hadees</h2>
       -->
      <!-- <h2>{hadees.number}</h2> -->
      <h2>Hadees Number</h2>
      <!-- <p class="text-xl font-semibold">Hadees text here!</p> -->
      <!-- <p>{hadees.text}</p> -->
      <p>Hadees Text</p>
    </div>
    <br />
  </div>
</div>

<br />

<!--Aaj ki Dua -->

<div class="px-3 flex justify-center">
  <div
    class="card w-screen shadow-xl"
    style="background-image:url(https://i.ibb.co/Tg577Cx/aaj-ki-dua.png); background-size:cover"
  >
    <div class="card-body">
      <!-- <h2 class="text-2xl font-bold">Dua_Id: {dua.number}</h2> -->
      <h2>Aaj ki Dua</h2>
      <p>Dua Text Here!</p>
      <!-- <p class="text-xl font-semibold">Dua_Text: {dua.text}</p> -->
    </div>
    <br />
  </div>
</div>
