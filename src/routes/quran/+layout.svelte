<script>
  import Fa from "svelte-fa";
  import {
    faArrowDown19,
    faArrowDownShortWide,
  } from "@fortawesome/free-solid-svg-icons";
  import { QURAN_SURAH_LIST} from "../../assets/data/quran";
  // import type { TQuranStatus } from "../../stores/quran";
  import { currentAyat, currentSurah } from "../../stores/quran";
  import { invalidate, invalidateAll } from "$app/navigation";

  async function handleSurahClick() {
    // console.log("Surah selected:", surah);
    currentAyat.set({ surah: surah.no, ayat: 1 });
    currentSurah.set(surah);
    invalidate("/quran");
    invalidateAll();
  }

  $: currentAyat;
</script>

<div class="navbar rounded-box">
  <div class="flex-1 px-2 lg:flex-none">
    <div class="normal-case text-xl text-secondary font-bold">Al Quran</div>
  </div>
  <div class="flex justify-end flex-1 px-2">
    <div class="flex items-stretch">
      <div class="dropdown dropdown-end">
        <label
          tabindex="0"
          class="btn btn-outline btn-secondary text-secondary rounded-btn"
        >
          <span><Fa icon={faArrowDownShortWide} /></span>
          <span>
            {QURAN_SURAH_LIST[$currentAyat.surah - 1].name}
          </span></label
        >
        <ul
          tabindex="0"
          class="w-60 h-60 overflow-y-scroll p-2 dropdown-content shadow bg-base-100 rounded-box mt-4"
        >
          {#each QURAN_SURAH_LIST as surah}
            <div class="w-full py-2  text-sm font-medium flex items-center">
              <li class="bg-base-100 text-justify">
                <a on:click={() => handleSurahClick(surah)} href={null}
                  >{surah.no} - {surah.name}</a
                >
              </li>
            </div>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>
<slot />
