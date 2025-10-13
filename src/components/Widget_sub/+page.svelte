<script lang="ts">
  import DropDown from "../DropDown/page.svelte";
  import { msisdn } from "../../stores/store";
  // export let user_number: any;

  let phoneNumber: any;

  msisdn.subscribe((value) => {
    phoneNumber = value;

    console.log("------------", phoneNumber);
  });
</script>

<ul class="menu w-80 h-full bg-base-200 text-base-content">
  <!-- Profile seciton-->
  <div
    class=" flex flex-col items-center justify-center py-5"
    style="background-color:#DDE59F"
  >
    <div class="avatar bg-neutral-focus rounded-full w-24">
      <span class="text-3xl"
        ><img
          typeof="img"
          alt="profile_img"
          class="rounded-full"
          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        /></span
      >
    </div>
    <br />
    <div><h1 class="font-semibold">Hello {msisdn}</h1></div>
    <div><h1 class="font-semibold" /></div>
  </div>
  <!-- Language section-->
  <div class="grid grid-cols-2">
    <div><h1 class="font-semibold p-2">Language</h1></div>
    <!-- <div>01</div> -->
    <div><DropDown /></div>
  </div>
</ul>
