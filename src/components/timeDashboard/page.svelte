<script >
  import { HIJRI_MONTHS_LIST } from "../../assets/data/constants";
  import { currentCityDailyPrayerTime } from "../../stores/prayerTime";
  // import { currentCity } from "../../stores/store";

  // STEP 01 : IMPORT THE GETNEXTSALAH FUNCTION FROM HELPERS.
  import { getNextSalah } from "../../helpers/prayerDataFetchers";

  // STEP 02 : INITIALIZE THE REQ. VARIABLES.
  let currentDateTime = new Date();

  let hours;
  let minutes;
  let seconds;

  // STEP 03 : INITIALIZE A PRAYER OBJECT TO AN ARRAY & RENDER IT WHEN SHOWNEXTTIME IS 'TRUE'
  let nextPrayer = {};
  let showNextTime = false;

  // STEP 04 : CREATE A FUNCTION FOR GETTING HOURS & MINUTES FROM SECONDS.
  function toHoursAndMinutes(totalSeconds) {
    const totalMinutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return { h: hours, m: minutes, s: seconds };
  }

  // STEP 05: EXOPRT THIS FUNCTION WHENEVER WE IMPORTED THIS COMPONENT
  const timeTracker = setInterval(() => {
    // STEP 05.1 : GET THE CURRENT DATE.
    currentDateTime = new Date();
    // STEP 05.2 : GET THE NEXT PRAYER OBJECT
    nextPrayer = getNextSalah(currentDateTime);
    console.log("Time : " , nextPrayer)
    // STEP 05.3 : IF THE NEXTPRAYER IS NOT UNDEFINED.
    if (nextPrayer != undefined) {
      // console.log("----------nextPrayer", nextPrayer);
      // STEP 04.3 : SET THE HOURS , MINUTES , & SECONDS TO TIMETONEXT VARIABLE & SET 'showNextTime' TO TRUE.
      let timeToNext = toHoursAndMinutes((nextPrayer.timeDiff / 1000) * -1);
      showNextTime = true;
      hours = timeToNext.h;
      minutes = timeToNext.m;
      seconds = timeToNext.s;
    } else {
      // STEP 04.4: SET THE SHOWNEXT_TIME TO FALSE IF NEXTPRAYER OBJECT IS EMPTY.
      showNextTime = false;
    }
  }, 1000);
</script>

<div class="flex justify-center px-5 pt-4 pb-50">
  <div
    class="bg-[url('$lib/images/banner.png')] stats w-screen h-100 bg-no-repeat bg-cover"
  >
    <div class="stat pl-10 content-center">
      {#if showNextTime}
        <div>
          <h2 class="card-title text-2xl text-white">
            {nextPrayer.prayer} in
            <span class="countdown text-xl">
              <span style="--value:{hours};" />h
              <span style="--value:{minutes};" />m
              <span style="--value:{seconds};" />s
            </span>
          </h2>
          <br />
        </div>
      {/if}

      <div class="stat-title text-white">
        {$currentCityDailyPrayerTime.date_str}
      </div>
      <div class="stat-title text-white">
        <span>
          {$currentCityDailyPrayerTime.hijri_date.hd}
        </span>
        {HIJRI_MONTHS_LIST[+$currentCityDailyPrayerTime.hijri_date.hm - 1]}
        {$currentCityDailyPrayerTime.hijri_date.hy}
      </div>
    </div>
    <div class="stat" />
  </div>
</div>
