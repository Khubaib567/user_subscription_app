<script >
  import AyatCard from "../../components/ayatOfDayCard/page.svelte";
  //   import MenuBar from "./components/MenuBar.svelte";
  // export let data;
  import { fullSurah } from "../../stores/quran";
  import { isUrdu } from "../../stores/store";

  console.log("---------------------fullSurah", $fullSurah);
  // const { ayats } = data;
</script>

<!-- <MenuBar /> -->

<!-- <div class="container justify-items-center mx-10 my-2"> -->
<ul>
  {#each $fullSurah as ayatGroup}
    {#if ayatGroup[0]?.ayat == 1 && ayatGroup[0]?.surah !== 9}
      <li class="mt-3">
        <div style="background: #d9e6b1;">
          <div class="card-body text-start">
            {#if ayatGroup[0].lang == "AR"}
              <h2 class="text-4xl p-2 leading-loose font-quran" dir="rtl">
                بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
              </h2>
            {/if}

            {#if $isUrdu}
              {#if ayatGroup[1].lang == "UR"}
                <p class="text-1xl leading-loose font-urdu" dir="rtl">
                  شُروع اَللہ کے پاک نام سے جو بڑا مہر بان نہايت رحم والا ہے
                </p>
              {/if}
            {:else}
              <p class="text-1xl">
                In the name of Allah the Entirely Merciful, the Especially
                Merciful
              </p>
            {/if}
          </div>
        </div>
      </li>
    {/if}
    <li class="mt-3">
      <!-- <AyatCard data={ayat} /> -->

      <div class="bg-pink-100 gradient-light-to-pink">
        <div class="card-body text-start">
          {#each ayatGroup as ayat}
            {#if ayat.lang == "AR"}
              <h2 class="text-4xl p-2 leading-loose font-quran" dir="rtl">
                {ayat?.qtext} o
              </h2>
            {/if}

            {#if $isUrdu}
              {#if ayat.lang == "UR"}
                <p class="text-1xl leading-loose font-urdu" dir="rtl">
                  {ayat?.qtext}
                </p>
              {/if}
            {:else if ayat.lang == "EN"}
              <p class="text-1xl">{ayat?.qtext}</p>
            {/if}
          {/each}
          <p class="text-md leading-loose">
            {ayatGroup[0]?.surah}:{ayatGroup[0]?.ayat}
          </p>
        </div>
      </div>
    </li>
  {/each}
</ul>
<br />
<br />
<br />
<br />
<br />

<!-- </div> -->
