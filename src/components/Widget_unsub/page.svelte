<script lang="ts">
  import DropDown from "../../components/DropDown/page.svelte";
  import { mssidn } from "../../routes/store";
  // export let user_number: any;

  let phoneNumber: any;

  mssidn.subscribe((value) => {
    phoneNumber = value;
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
    <div><h1 class="font-semibold">Hello</h1></div>
    <div><h1 class="font-semibold">{phoneNumber}</h1></div>
  </div>
  <br />
  <!-- Subscription button-->
  <!-- The button to open modal -->
  <div class="flex justify-center">
    <label for="my_modal_6" class="btn w-28 bg-pink-700 hover:bg-pink-800"
      >Un Subscribe</label
    >

    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my_modal_6" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Unsubscribe</h3>
        <p class="py-4">Do you want tp unsubscribe?</p>
        <div class="modal-action">
          <label for="my_modal_6" class="btn bg-pink-700 hover:bg-pink-800"
            >No</label
          >
          <a href="/unsubscribe_en" class="btn bg-pink-700 hover:bg-pink-800"
            >Yes</a
          >
        </div>
      </div>
    </div>
  </div>

  <br />
  <!-- Language section-->
  <div class="grid grid-cols-2">
    <!-- The button to open modal -->

    <div><h1 class="font-semibold p-2">Language</h1></div>
    <!-- <div>01</div> -->
    <div><DropDown /></div>
  </div>
</ul>
