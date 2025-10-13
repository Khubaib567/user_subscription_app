<script>
  let { data } = $props();
  const otp = data.otp;
</script>

<form method="POST">
  <div class="flex justify-center grid grid-flow-col grid-rows-4 gap-4">
    <h1>Welcome to Our App</h1>
    <div role="alert" class="alert alert-success">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>Your OTP is {otp}</span>
    </div>
    <div>
      <input
        type="text"
        id="otp"
        name="otp"
        placeholder="Enter Digits"
        class="input"
      />
    </div>
    <div class="text-center">
      <!-- <a href="/home"> -->
      <button formaction="?/verify" class="btn btn-active btn-success"
        >Proceed</button
      >
      <!-- </a> -->
    </div>
  </div>
</form>
