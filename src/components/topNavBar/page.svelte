<script lang="ts">
  import { goto, invalidateAll } from "$app/navigation";
  import {
    subscribeUser,
    unsubscribeUser,
  } from "../../helpers/subscriptionHelpers";
  import { subStatus } from "../../stores/store";

  import { isHanafi, msisdn, isUrdu, isMale } from "../../stores/store";

  const toggleCalcMethod = (e: any) => {
    invalidateAll();
  };

  let openSubscriptionModal = false;
  let openUnsubscribeModal = false;

  const sendSubscriptionReq = async () => {
    console.log("sending subscription request");
    await subscribeUser();
    invalidateAll();
    goto("/home");
  };

  const sendUnsubReq = async () => {
    console.log("sending unsub request");
    await unsubscribeUser();
    invalidateAll();
    goto("/home");
  };
</script>

<div class="navbar rounded-b-xl" style="background-color:#DDE59F">
  <div class="navbar-start" />
  <div class="navbar-center">
    <a href="/home" class="btn btn-ghost normal-case text-2xl">
      <span style="color:#99B83B">USER&nbsp;</span><span style="color:#E40077"
        >SUBSCRIPTION </span
      >
    </a>
  </div>

  <div class="navbar-end">
    {#if !($subStatus == "true")}
      <button
        class="btn btn-primary text-white rounded p-1"
        on:click={() => (openSubscriptionModal = true)}
      >
        <a href="/home">Subscribe</a>
      </button>
    {/if}
    <!-- <label  class="btn btn-ghost btn-circle avatar"> -->
    <div class="dropdown dropdown-end">
      <button class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          {#if $isMale}
            <img
              typeof="img"
              alt="profile_img"
              class="rounded-full"
              src="img/profile/Male_avatar.png"
            />
          {:else}
            <img
              typeof="img"
              alt="profile_img"
              class="rounded-full"
              src="img/profile/female_avatar.png"
            />
          {/if}
        </div>
      </button>
      <button
        tabindex="0"
        class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52"
      >
        <ul>
          <li class="font-bold">
            {#if $msisdn != null}
              <span>{$msisdn}</span>
            {/if}
          </li>
          <li>
            <label class="label">
              {#if $isUrdu}
                <span class="label-text" dir="rtl">عورت</span>
              {:else}
                <span class="label-text">Female</span>
              {/if}
              <input
                name="toggle_calcmethod"
                type="checkbox"
                class="toggle toggle-secondary"
                bind:checked={$isMale}
              />
              {#if $isUrdu}
                <span class="label-text" dir="rtl">مرد</span>
              {:else}
                <span class="label-text">Male </span>
              {/if}
            </label>
          </li>
          <li>
            <label class="label">
              <span class="label-text">English</span>
              <input
                name="toggle_calcmethod"
                type="checkbox"
                class="toggle toggle-secondary"
                bind:checked={$isUrdu}
              />
              <span class="label-text" dir="rtl">اردو</span>
            </label>
          </li>
          <li>
           <label  class="label">
             <span class="label-text">Fiqh Ja'afria</span>
              <input
                on:click={toggleCalcMethod}
                name="toggle_calcmethod"
                type="checkbox"
                class="toggle toggle-secondary bg-white"
                bind:checked={$isHanafi}
              />
             <span class="label-text">Fiqh Hanafi</span>
           </label>
          </li>
          {#if $subStatus == "true"}
            <li>
              <button
                class="btn btn-ghost text-primary"
                on:click={() => (openUnsubscribeModal = true)}
              >
                {#if $isUrdu}
                  <span dir="rtl">ان سبسکرائب </span>
                {:else}
                  <span>Unsubscribe</span>
                {/if}</button
              >
            </li>
          {/if}
        </ul>
      </button>
    </div>
  </div>
</div>

<div class="modal" class:modal-open={openUnsubscribeModal}>
  <div class="modal-box">
    <h3 class="font-bold text-lg">
      {#if $isUrdu}
        <span dir="rtl">کیا آپ واقعی ان سبسکرائب کرنا چاہتے ہیں؟</span>
      {:else}
        <span>Do you really want to unsubscribe?</span>
      {/if}
    </h3>
    <div class="modal-action">
      <button
        class="btn btn-outline btn-primary"
        on:click={() => {
          sendUnsubReq();
          openUnsubscribeModal = false;
        }}>Yes</button
      >

      <button
        class="btn btn-secondary text-white"
        on:click={() => (openUnsubscribeModal = false)}
      >
        No
      </button>
    </div>
  </div>
</div>

<div class="modal " class:modal-open={openSubscriptionModal}>
  <div class="modal-box bg-white">
    <h3 class="font-bold text-lg">
      {#if $isUrdu}
        <span dir="rtl"
          >آپ کو زونگ اسلامک سروس کا سبسکرائب کیا جا رہا ہے جس کے ساتھ آپ کو
          نماز الرٹ، روزانہ آیات اور احادیث موصول ہوں گی۔
        </span>

        <span>Rs. 3 + tax</span><span dir="rtl"
          >اس سروس پر چارج کیا جائے گا</span
        >
      {:else}
        <p>
          You are being subscribed to Zong Islamic service with Prayer alerts,
          Ayat and Hadith of the Day. This service will be charged at Rs. 3 +
          tax
        </p>
      {/if}
    </h3>
    <div class="modal-action">
      <button
        class="btn btn-outline btn-primary"
        on:click={() => {
          sendSubscriptionReq();
          openSubscriptionModal = false;
        }}>Yes</button
      >

      <button
        class="btn btn-secondary text-white"
        on:click={() => (openSubscriptionModal = false)}
      >
        No
      </button>
    </div>
  </div>
</div>
