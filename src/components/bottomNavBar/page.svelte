<script>
  function handleClick() {
    alert("no more alerts");
  }
</script>

<div class="btm-nav my-50 pt-50">
  <button class="text-">
    <img
      class="nav-bar-icon"
      src="https://i.ibb.co/9YxSKsX/home.png"
      alt="home_logo"
    />
  </button>

  <button class="text-primary" on:click|once={handleClick}>
    <img
      class="nav-bar-icon"
      src="https://i.ibb.co/QPRfzNk/menu.png"
      alt="menu_logo"
    />
  </button>
</div>

<style>
  .nav-bar-icon {
    height: auto;
    width: auto;
    max-height: 35px;
  }
</style>
