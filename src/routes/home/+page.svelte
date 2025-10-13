<script lang="ts">
  import { ayatList, hadithList, isUrdu } from "../../stores/store";

  // import type { Actions } from "@sveltejs/kit";
  import Slider from "../../components/Slider/page.svelte";
  import PrayerWidget from "../../components/prayerwidget/page.svelte";
  // import AyatOfDayCard from "../../components/ayatOfDayCard/page.svelte";
  import ContentOfTheDayCard from "../../components/contentOfTheDayCard/page.svelte";
  import Dashboard from "../../components/dashboard/page.svelte";

  let contentDayToGet = new Date().getDate() - 1;

  let ayatProp = {
    contentType: "Ayat",
    topic: $ayatList[contentDayToGet].topic,
    item: $ayatList[contentDayToGet].ayat,
  };

  let hadithProp = {
    contentType: "Hadith",
    topic: $hadithList[contentDayToGet].topic,
    item: $hadithList[contentDayToGet].hadith,
  };
</script>

<div >
  <div class="bg-gray-50">
    <div class="flex justify-center border-t-2 rounded-xl">
      <h1 class="text-4xl pl-5 pt-2 font-bold text-secondary">!السلام عليكم</h1>
    </div>
    <Dashboard />
    <PrayerWidget />
    <br />
    <Slider />
    <br />
    <ContentOfTheDayCard contentProp={ayatProp} />
    <br />
    <ContentOfTheDayCard contentProp={hadithProp} />
  </div>
</div>
