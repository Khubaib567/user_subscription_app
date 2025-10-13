<script>
  import "../app.css";
  import TopNavBar from "../components/topNavBar/page.svelte";
  import Footer from "../components/footer/page.svelte"
</script>

<TopNavBar />

<slot />

<br />
<Footer />