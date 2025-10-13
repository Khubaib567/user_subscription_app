<script lang="ts">
  import type { Actions } from "@sveltejs/kit";
  export let form: Actions;
</script>

{#if form == null}
  <!-- Prayer Timings-->
  <div class="grid grid-cols-6 divide-x px-5 py-56">
    <div
      class="flex items-center justify-center rounded-l-2xl h-24"
      style="background-color: #8DC736"
    >
      <!-- #ffffff00 -->
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <div class="justify-self-center">
            <img src="https://i.ibb.co/3Y1sGpP/Location.png" class="w-8 h-8" />
          </div>
        </label>

        <div
          class="mt-3 z-[1] p-2 dropdown-content overflow-y-auto h-20 w-28 bg-white"
        >
          <div>
            <form method="POST" action="?/getPrayerTiming">
              <!-- <option value="KARACHI">Karachi</option> -->
              <input name="city" value="Karachi" type="submit" />
            </form>
          </div>
          <br />

          <div>
            <form method="POST" action="?/getPrayerTiming">
              <!-- <option value="KARACHI">Karachi</option> -->
              <input name="city" value="Malakand" type="submit" />
            </form>
          </div>
          <br />

          <div>
            <form method="POST" action="?/getPrayerTiming">
              <!-- <option value="KARACHI">Karachi</option> -->
              <input name="city" value="Mardan" type="submit" />
            </form>
          </div>
          <br />

          <div>
            <form method="POST" action="?/getPrayerTiming">
              <!-- <option value="KARACHI">Karachi</option> -->
              <input name="city" value="Peshawar" type="submit" />
            </form>
          </div>
          <br />

          <div>
            <form method="POST" action="?/getPrayerTiming">
              <!-- <option value="KARACHI">Karachi</option> -->
              <input name="city" value="Kohat" type="submit" />
            </form>
          </div>
          <br />

          <div>
            <form method="POST" action="?/getPrayerTiming">
              <!-- <option value="KARACHI">Karachi</option> -->
              <input name="city" value="Bannu" type="submit" />
            </form>
          </div>
          <br />

          <div>
            <form method="POST" action="?/getPrayerTiming">
              <!-- <option value="KARACHI">Karachi</option> -->
              <input name="city" value="D.I Khan" type="submit" />
            </form>
          </div>
          <br />

          <div>
            <form method="POST" action="?/getPrayerTiming">
              <!-- <option value="KARACHI">Karachi</option> -->
              <input name="city" value="Rawalpindi" type="submit" />
            </form>
          </div>
          <br />

          <div>
            <form method="POST" action="?/getPrayerTiming">
              <!-- <option value="KARACHI">Karachi</option> -->
              <input name="city" value="Sargodha" type="submit" />
            </form>
          </div>
          <br />

          <div>
            <form method="POST" action="?/getPrayerTiming">
              <!-- <option value="KARACHI">Karachi</option> -->
              <input name="city" value="Faisalabad" type="submit" />
            </form>
          </div>
          <br />
          <div>
            <form method="POST" action="?/getPrayerTiming">
              <!-- <option value="KARACHI">Karachi</option> -->
              <input name="city" value="Gujhranwala" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--Fajr timing-->
    <div class="grid grid-rows-2 h-24" style="background-color:#F38020">
      <div>
        <p class="text-sm py-1 text-center text-white">
          <span class="font-bold">Fajar</span> <br /> 4:23 am
        </p>
      </div>
      <div class="justify-self-center py-5">
        <img
          src="https://i.ibb.co/xqNpC2n/Fajar.png"
          class="w-8 h-6"
          alt="fajar_icon"
        />
      </div>
    </div>

    <!--Zuhr timing-->
    <div class="grid grid-rows-2 h-24" style="background-color:#F38020">
      <div>
        <p class="text-sm py-1 text-center text-white">
          <span class="font-bold">Duhr</span> <br /> 12:38 pm
        </p>
      </div>
      <div class="justify-self-center px-2">
        <img
          src="https://i.ibb.co/SQyYcVS/Duhr.png"
          class="w-20 h-12"
          alt="zohar_icon"
        />
      </div>
    </div>
    <!--Asar timing-->
    <div class="grid grid-rows-2 h-24" style="background-color:#F38020">
      <div>
        <p class="text-sm py-1 text-center text-white">
          <span class="font-bold">Asar</span> <br /> 5:20 pm
        </p>
      </div>
      <div class="justify-self-center px-2 py-2">
        <img
          src="https://i.ibb.co/X8WmFSR/asar-3.png"
          class="w-16 h-10"
          alt="asar_icon"
        />
      </div>
    </div>
    <!--Maghrib timing-->
    <div class="grid grid-rows-2 h-24" style="background-color:#F38020">
      <div>
        <p class="text-sm py-1 text-center text-white">
          <span class="text-xs font-bold">Maghrib</span> <br /> 7:25 pm
        </p>
      </div>
      <div class="justify-self-center px-2 py-4">
        <img
          src="https://i.ibb.co/MGxkppP/magrib.png"
          class="w-16 h-8"
          alt="fajar_icon"
        />
      </div>
    </div>

    <!--Isha timing-->
    <div
      class="grid grid-rows-2 h-24 rounded-r-2xl"
      style="background-color:#F38020"
    >
      <div>
        <p class="text-sm py-1 text-center text-white">
          <span class="font-bold">Isha</span> <br /> 8:52 pm
        </p>
      </div>
      <div class="justify-self-center py-3">
        <img
          src="https://i.ibb.co/1nHVMCh/Isha.png"
          class="w-8 h-8"
          alt="fajar_icon"
        />
      </div>
    </div>
  </div>
{:else if form?.success}
  <!-- Prayer Timings-->
  <div class="grid grid-cols-6 divide-x px-5 py-56">
    <div
      class="flex items-center justify-center rounded-l-2xl h-24"
      style="background-color: #8DC736"
    >
      <!-- #ffffff00 -->
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <div class="justify-self-center">
            <img src="https://i.ibb.co/3Y1sGpP/Location.png" class="w-8 h-8" />
          </div>
        </label>

        <div
          class="mt-3 z-[1] p-2 dropdown-content overflow-y-auto h-20 w-28 bg-white"
        >
          <div>
            <form method="POST" action="?/getPrayerTiming">
              <!-- <option value="KARACHI">Karachi</option> -->
              <input name="city" value="Karachi" type="submit" />
            </form>
          </div>
          <br />

          <div>
            <form method="POST" action="?/getPrayerTiming">
              <!-- <option value="KARACHI">Karachi</option> -->
              <input name="city" value="Malakand" type="submit" />
            </form>
          </div>
          <br />

          <div>
            <form method="POST" action="?/getPrayerTiming">
              <!-- <option value="KARACHI">Karachi</option> -->
              <input name="city" value="Mardan" type="submit" />
            </form>
          </div>
          <br />

          <div>
            <form method="POST" action="?/getPrayerTiming">
              <!-- <option value="KARACHI">Karachi</option> -->
              <input name="city" value="Peshawar" type="submit" />
            </form>
          </div>
          <br />

          <div>
            <form method="POST" action="?/getPrayerTiming">
              <!-- <option value="KARACHI">Karachi</option> -->
              <input name="city" value="Kohat" type="submit" />
            </form>
          </div>
          <br />

          <div>
            <form method="POST" action="?/getPrayerTiming">
              <!-- <option value="KARACHI">Karachi</option> -->
              <input name="city" value="Bannu" type="submit" />
            </form>
          </div>
          <br />

          <div>
            <form method="POST" action="?/getPrayerTiming">
              <!-- <option value="KARACHI">Karachi</option> -->
              <input name="city" value="D.I Khan" type="submit" />
            </form>
          </div>
          <br />

          <div>
            <form method="POST" action="?/getPrayerTiming">
              <!-- <option value="KARACHI">Karachi</option> -->
              <input name="city" value="Rawalpindi" type="submit" />
            </form>
          </div>
          <br />

          <div>
            <form method="POST" action="?/getPrayerTiming">
              <!-- <option value="KARACHI">Karachi</option> -->
              <input name="city" value="Sargodha" type="submit" />
            </form>
          </div>
          <br />

          <div>
            <form method="POST" action="?/getPrayerTiming">
              <!-- <option value="KARACHI">Karachi</option> -->
              <input name="city" value="Faisalabad" type="submit" />
            </form>
          </div>
          <br />
          <div>
            <form method="POST" action="?/getPrayerTiming">
              <!-- <option value="KARACHI">Karachi</option> -->
              <input name="city" value="Gujhranwala" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--Fajr timing-->
    <div class="grid grid-rows-2 h-24" style="background-color:#F38020">
      <div>
        <p class="text-sm py-1 text-center text-white">
          <span class="font-bold">Fajar</span> <br />
          {form?.fajar}
        </p>
      </div>
      <div class="justify-self-center py-5">
        <img
          src="https://i.ibb.co/xqNpC2n/Fajar.png"
          class="w-8 h-6"
          alt="fajar_icon"
        />
      </div>
    </div>

    <!--Zuhr timing-->
    <div class="grid grid-rows-2 h-24" style="background-color:#F38020">
      <div>
        <p class="text-sm py-1 text-center text-white">
          <span class="font-bold">Duhr</span> <br />
          {form?.zohar}
        </p>
      </div>
      <div class="justify-self-center px-2">
        <img
          src="https://i.ibb.co/SQyYcVS/Duhr.png"
          class="w-20 h-12"
          alt="zohar_icon"
        />
      </div>
    </div>
    <!--Asar timing-->
    <div class="grid grid-rows-2 h-24" style="background-color:#F38020">
      <div>
        <p class="text-sm py-1 text-center text-white">
          <span class="font-bold">Asar</span> <br />
          {form?.asar}
        </p>
      </div>
      <div class="justify-self-center px-2 py-2">
        <img
          src="https://i.ibb.co/X8WmFSR/asar-3.png"
          class="w-16 h-10"
          alt="asar_icon"
        />
      </div>
    </div>
    <!--Maghrib timing-->
    <div class="grid grid-rows-2 h-24" style="background-color:#F38020">
      <div>
        <p class="text-sm py-1 text-center text-white">
          <span class="text-xs font-bold">Maghrib</span> <br />
          {form?.maghrib}
        </p>
      </div>
      <div class="justify-self-center px-2 py-4">
        <img
          src="https://i.ibb.co/MGxkppP/magrib.png"
          class="w-16 h-8"
          alt="fajar_icon"
        />
      </div>
    </div>

    <!--Isha timing-->
    <div
      class="grid grid-rows-2 h-24 rounded-r-2xl"
      style="background-color:#F38020"
    >
      <div>
        <p class="text-sm py-1 text-center text-white">
          <span class="font-bold">Isha</span> <br />
          {form?.isha}
        </p>
      </div>
      <div class="justify-self-center py-3">
        <img
          src="https://i.ibb.co/1nHVMCh/Isha.png"
          class="w-8 h-8"
          alt="fajar_icon"
        />
      </div>
    </div>
  </div>
{/if}
