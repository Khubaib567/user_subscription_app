<div class="hero min-h-screen">
  <form method="POST">
    <div class="flex justify-center grid grid-flow-col grid-rows-3 gap-4">
      <h1>Welcome to Our App</h1>
      <div class="text-center">
        <label class="text-xl"
          >Enter Mobile Number
          <input
            id="number"
            name="number"
            type="text"
            placeholder="92 3XXXXXXXXX"
            class="input"
            required
          />
        </label>
      </div>

      <div class="text-center">
        <button formaction="?/otp" class="btn btn-active btn-success"
          >Get OTP</button
        >
      </div>
    </div>
  </form>
</div>
