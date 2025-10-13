<script lang="ts">
  export let data;
  const currency: any = data.data;
</script>

<!-- <center> -->
<div class="py-10">
  <table class="table table-zebra w-screen">
    <!-- head -->
    <thead>
      <tr>
        <th />
        <th class="text-lg">Currency</th>
        <th class="text-lg">Symbol</th>
        <th class="text-lg">Buying</th>
        <th class="text-lg">Selling</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr>
        <th>1</th>
        <td>{currency.data[0].name}</td>
        <td>{currency.data[0].symbol}</td>
        <td>{currency.data[0].buying}</td>
        <td>{currency.data[0].selling}</td>
      </tr>
      <!-- row 2 -->
      <tr>
        <th>2</th>
        <td>{currency.data[1].name}</td>
        <td>{currency.data[1].symbol}</td>
        <td>{currency.data[1].buying}</td>
        <td>{currency.data[1].selling}</td>
      </tr>
      <!-- row 3 -->
      <tr>
        <th>3</th>
        <td>{currency.data[2].name}</td>
        <td>{currency.data[2].symbol}</td>
        <td>{currency.data[2].buying}</td>
        <td>{currency.data[2].selling}</td>
      </tr>
    </tbody>
  </table>
</div>
