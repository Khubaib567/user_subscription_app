<script>
  // import type { PageData } from "../../routes/$types";

  export let contentProp;

  let color = "#f1f5cd";

  switch (contentProp.contentType) {
    case "Ayat":
      color = "#a2bc86";
      break;
    case "Hadith":
      color = "#ed7bb5";
      break;
    default:
      color = "#ffb5c2";
  }
</script>

<!-- <div class="card w-full">
  <div class="card-body">
    <h2 class="card-title">Hadith of the Day</h2>

    <h3>{props.topic}</h3>
    <p>{props.hadith}</p>
  </div>
</div> -->

<div class="px-5 flex justify-center">
  <div class="card w-screen shadow-xl" style="background-color:{color};">
    <div class="card-body">
      <h2 class="text-3xl font-bold">
        {contentProp.contentType} Of The Day:
      </h2>
      <h3>{contentProp.topic}</h3>
      <p class="text-white text-lg">
        {contentProp.item}
      </p>
    </div>
  </div>
</div>
