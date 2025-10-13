<script lang="ts">
  // import type { TPost } from "../../types.ts";
  const currentDate = new Date();
  const dateNumber = currentDate.getDate();
  const dateList: Date[] = [
    new Date("2023-07-01"),
    new Date("2023-07-02"),
    new Date("2023-07-03"),
    new Date("2023-07-04"),
    new Date("2023-07-05"),
    new Date("2023-07-06"),
    new Date("2023-07-07"),
    new Date("2023-07-08"),
    new Date("2023-07-09"),
    new Date("2023-07-10"),
    new Date("2023-07-11"),
    new Date("2023-07-12"),
    new Date("2023-07-13"),
    new Date("2023-07-14"),
    new Date("2023-07-15"),
    new Date("2023-07-16"),
    new Date("2023-07-17"),
    new Date("2023-07-18"),
    new Date("2023-07-19"),
    new Date("2023-07-20"),
    new Date("2023-07-21"),
    new Date("2023-07-22"),
    new Date("2023-07-23"),
    new Date("2023-07-24"),
    new Date("2023-07-25"),
    new Date("2023-07-26"),
    new Date("2023-07-27"),
    new Date("2023-07-28"),
    new Date("2023-07-29"),
    new Date("2023-07-30"),
    new Date("2023-07-31"),
  ];
  // console.log(dateNumber);
</script>

{#if dateList[0].getDate() == dateNumber}
  <div class="px-5 flex justify-center pb-5">
    <div class="card w-screen shadow-xl" style="background-color: #8DC736">
      <div class="card-body">
        <!-- <h2 class="text-white">Quote_ID</h2> -->
        <h2 class="text-white text-3xl font-bold">Quote Of The Day:</h2>
        <p class="text-white text-lg">
          A man's word and his intestinal fortitude are two of the most
          honorable virtues known to mankind. -Jim Nantz.
        </p>
      </div>
      <br />
    </div>
  </div>
{:else if dateList[1].getDate() == dateNumber}
  <div class="px-5 flex justify-center pb-5">
    <div class="card w-screen shadow-xl" style="background-color: #8DC736">
      <div class="card-body">
        <!-- <h2 class="text-white">Quote_ID</h2> -->
        <h2 class="text-white text-3xl font-bold">Quote Of The Day:</h2>
        <p class="text-white text-lg">
          Don't be satisfied with stories, how things have gone with others.
          Unfold your own myth. - Rumi.
        </p>
      </div>
      <br />
    </div>
  </div>
{:else if dateList[2].getDate() == dateNumber}
  <div class="px-5 flex justify-center pb-5">
    <div class="card w-screen shadow-xl" style="background-color: #8DC736">
      <div class="card-body">
        <!-- <h2 class="text-white">Quote_ID</h2> -->
        <h2 class="text-white text-3xl font-bold">Quote Of The Day:</h2>
        <p class="text-white text-lg">
          There is no victory at bargain basement prices. -Dwight D. eisenhower.
        </p>
      </div>
      <br />
    </div>
  </div>
{:else if dateList[3].getDate() == dateNumber}
  <div class="px-5 flex justify-center pb-5">
    <div class="card w-screen shadow-xl" style="background-color: #8DC736">
      <div class="card-body">
        <!-- <h2 class="text-white">Quote_ID</h2> -->
        <h2 class="text-white text-3xl font-bold">Quote Of The Day:</h2>
        <p class="text-white text-lg">
          He who fights against the truth, the truth will defeat him. - Hazrat
          Ali R.A.
        </p>
      </div>
      <br />
    </div>
  </div>
{:else if dateList[4].getDate() == dateNumber}
  <div class="px-5 flex justify-center pb-5">
    <div class="card w-screen shadow-xl" style="background-color: #8DC736">
      <div class="card-body">
        <!-- <h2 class="text-white">Quote_ID</h2> -->
        <h2 class="text-white text-3xl font-bold">Quote Of The Day:</h2>
        <p class="text-white text-lg">
          Empty pockets never held anyone back. Only empty heads and empty
          hearts can do that. - Norman Vincent Peale
        </p>
      </div>
      <br />
    </div>
  </div>
{:else if dateList[5].getDate() == dateNumber}
  <div class="px-5 flex justify-center pb-5">
    <div class="card w-screen shadow-xl" style="background-color: #8DC736">
      <div class="card-body">
        <!-- <h2 class="text-white">Quote_ID</h2> -->
        <h2 class="text-white text-3xl font-bold">Quote Of The Day:</h2>
        <p class="text-white text-lg">
          The difference between the impossible and the possible lies in a man's
          determination. -Tommy Lasorda.
        </p>
      </div>
      <br />
    </div>
  </div>
{:else if dateList[6].getDate() == dateNumber}
  <div class="px-5 flex justify-center pb-5">
    <div class="card w-screen shadow-xl" style="background-color: #8DC736">
      <div class="card-body">
        <!-- <h2 class="text-white">Quote_ID</h2> -->
        <h2 class="text-white text-3xl font-bold">Quote Of The Day:</h2>
        <p class="text-white text-lg">Virtue is the only true nobility.</p>
      </div>
      <br />
    </div>
  </div>
{:else if dateList[7].getDate() == dateNumber}
  <div class="px-5 flex justify-center pb-5">
    <div class="card w-screen shadow-xl" style="background-color: #8DC736">
      <div class="card-body">
        <!-- <h2 class="text-white">Quote_ID</h2> -->
        <h2 class="text-white text-3xl font-bold">Quote Of The Day:</h2>
        <p class="text-white text-lg">
          In the last analysis, our only freedom is the freedom to discipline
          ourselves. -Bernard Baruch.
        </p>
      </div>
      <br />
    </div>
  </div>
{:else if dateList[8].getDate() == dateNumber}
  <div class="px-5 flex justify-center pb-5">
    <div class="card w-screen shadow-xl" style="background-color: #8DC736">
      <div class="card-body">
        <!-- <h2 class="text-white">Quote_ID</h2> -->
        <h2 class="text-white text-3xl font-bold">Quote Of The Day:</h2>
        <p class="text-white text-lg">
          My Mama always said, 'Life is like a box of chocolates; you never know
          what you're going to get.'" - Forest Gump 1994.
        </p>
      </div>
      <br />
    </div>
  </div>
{:else if dateList[9].getDate() == dateNumber}
  <div class="px-5 flex justify-center pb-5">
    <div class="card w-screen shadow-xl" style="background-color: #8DC736">
      <div class="card-body">
        <!-- <h2 class="text-white">Quote_ID</h2> -->
        <h2 class="text-white text-3xl font-bold">Quote Of The Day:</h2>
        <p class="text-white text-lg">
          Always treat a famous person as if they're not, and a person who's not
          as if they were." - Adam Lawrence ~ Perfect 1985.
        </p>
      </div>
      <br />
    </div>
  </div>
{:else if dateList[10].getDate() == dateNumber}
  <div class="px-5 flex justify-center pb-5">
    <div class="card w-screen shadow-xl" style="background-color: #8DC736">
      <div class="card-body">
        <!-- <h2 class="text-white">Quote_ID</h2> -->
        <h2 class="text-white text-3xl font-bold">Quote Of The Day:</h2>
        <p class="text-white text-lg">
          Nothing great was ever achieved without enthusiasm." - Ralph Waldo
          Emerson.
        </p>
      </div>
      <br />
    </div>
  </div>
{:else if dateList[11].getDate() == dateNumber}
  <div class="px-5 flex justify-center pb-5">
    <div class="card w-screen shadow-xl" style="background-color: #8DC736">
      <div class="card-body">
        <!-- <h2 class="text-white">Quote_ID</h2> -->
        <h2 class="text-white text-3xl font-bold">Quote Of The Day:</h2>
        <p class="text-white text-lg">
          A positive attitude may not solve all your problems but it will annoy
          enough people to make it worth the effort. " - Herm Albright.
        </p>
      </div>
      <br />
    </div>
  </div>
{:else if dateList[12].getDate() == dateNumber}
  <div class="px-5 flex justify-center pb-5">
    <div class="card w-screen shadow-xl" style="background-color: #8DC736">
      <div class="card-body">
        <!-- <h2 class="text-white">Quote_ID</h2> -->
        <h2 class="text-white text-3xl font-bold">Quote Of The Day:</h2>
        <p class="text-white text-lg">
          Not everything that is faced can be changed but nothing can be changed
          until it is faced. ~ James Baldwin.
        </p>
      </div>
      <br />
    </div>
  </div>
{:else if dateList[13].getDate() == dateNumber}
  <div class="px-5 flex justify-center pb-5">
    <div class="card w-screen shadow-xl" style="background-color: #8DC736">
      <div class="card-body">
        <!-- <h2 class="text-white">Quote_ID</h2> -->
        <h2 class="text-white text-3xl font-bold">Quote Of The Day:</h2>
        <p class="text-white text-lg">
          Obstacles are those frightful things you see when you take your eyes
          off your goal. ~ Henry Ford.
        </p>
      </div>
      <br />
    </div>
  </div>
{:else if dateList[14].getDate() == dateNumber}
  <div class="px-5 flex justify-center pb-5">
    <div class="card w-screen shadow-xl" style="background-color: #8DC736">
      <div class="card-body">
        <!-- <h2 class="text-white">Quote_ID</h2> -->
        <h2 class="text-white text-3xl font-bold">Quote Of The Day:</h2>
        <p class="text-white text-lg">
          One of the greatest discoveries a man makes, one of his great
          surprises, is to find he can do what he was afraid he couldn't do. ~
          Henry Ford.
        </p>
      </div>
      <br />
    </div>
  </div>
{:else if dateList[15].getDate() == dateNumber}
  <div class="px-5 flex justify-center pb-5">
    <div class="card w-screen shadow-xl" style="background-color: #8DC736">
      <div class="card-body">
        <!-- <h2 class="text-white">Quote_ID</h2> -->
        <h2 class="text-white text-3xl font-bold">Quote Of The Day:</h2>
        <p class="text-white text-lg">
          Pleasure in the job puts perfection in the work. ~ Aristotle.
        </p>
      </div>
      <br />
    </div>
  </div>
{:else if dateList[16].getDate() == dateNumber}
  <div class="px-5 flex justify-center pb-5">
    <div class="card w-screen shadow-xl" style="background-color: #8DC736">
      <div class="card-body">
        <!-- <h2 class="text-white">Quote_ID</h2> -->
        <h2 class="text-white text-3xl font-bold">Quote Of The Day:</h2>
        <p class="text-white text-lg">
          The greatest inspiration is often born of desperation. ~ Comer
          Cottrell.
        </p>
      </div>
      <br />
    </div>
  </div>
{:else if dateList[17].getDate() == dateNumber}
  <div class="px-5 flex justify-center pb-5">
    <div class="card w-screen shadow-xl" style="background-color: #8DC736">
      <div class="card-body">
        <!-- <h2 class="text-white">Quote_ID</h2> -->
        <h2 class="text-white text-3xl font-bold">Quote Of The Day:</h2>
        <p class="text-white text-lg">
          The greatest mistake you can make in life is to be continually fearing
          that you will make one. ~ Ellen Hubbard.
        </p>
      </div>
      <br />
    </div>
  </div>
{:else if dateList[18].getDate() == dateNumber}
  <div class="px-5 flex justify-center pb-5">
    <div class="card w-screen shadow-xl" style="background-color: #8DC736">
      <div class="card-body">
        <!-- <h2 class="text-white">Quote_ID</h2> -->
        <h2 class="text-white text-3xl font-bold">Quote Of The Day:</h2>
        <p class="text-white text-lg">
          Things turn out best for the people who make the best out of the way
          things turn out. ~ Art Link letter.
        </p>
      </div>
      <br />
    </div>
  </div>
{:else if dateList[19].getDate() == dateNumber}
  <div class="px-5 flex justify-center pb-5">
    <div class="card w-screen shadow-xl" style="background-color: #8DC736">
      <div class="card-body">
        <!-- <h2 class="text-white">Quote_ID</h2> -->
        <h2 class="text-white text-3xl font-bold">Quote Of The Day:</h2>
        <p class="text-white text-lg">
          Wherever you go, go with all your heart. ~ Confucius.
        </p>
      </div>
      <br />
    </div>
  </div>
{:else if dateList[20].getDate() == dateNumber}
  <div class="px-5 flex justify-center pb-5">
    <div class="card w-screen shadow-xl" style="background-color: #8DC736">
      <div class="card-body">
        <!-- <h2 class="text-white">Quote_ID</h2> -->
        <h2 class="text-white text-3xl font-bold">Quote Of The Day:</h2>
        <p class="text-white text-lg">
          When you do not know what you are doing and what you are doing is the
          best -- that is inspiration. ~ Robert Bresson.
        </p>
      </div>
      <br />
    </div>
  </div>
{:else if dateList[21].getDate() == dateNumber}
  <div class="px-5 flex justify-center pb-5">
    <div class="card w-screen shadow-xl" style="background-color: #8DC736">
      <div class="card-body">
        <!-- <h2 class="text-white">Quote_ID</h2> -->
        <h2 class="text-white text-3xl font-bold">Quote Of The Day:</h2>
        <p class="text-white text-lg">
          When you make a mistake, don't look back at it long. Take the reason
          of the thing into your mind, and then look forward. Mistakes are
          lessons of wisdom. The past cannot be changed. The future is yet in
          your power. ~ Phyllis Bottome .
        </p>
      </div>
      <br />
    </div>
  </div>
{:else if dateList[22].getDate() == dateNumber}
  <div class="px-5 flex justify-center pb-5">
    <div class="card w-screen shadow-xl" style="background-color: #8DC736">
      <div class="card-body">
        <!-- <h2 class="text-white">Quote_ID</h2> -->
        <h2 class="text-white text-3xl font-bold">Quote Of The Day:</h2>
        <p class="text-white text-lg">
          No one is in control of your happiness but you; therefore, you have
          the power to change anything about yourself or your life that you want
          to change. ~ Barbara De Angelis.
        </p>
      </div>
      <br />
    </div>
  </div>
{:else if dateList[23].getDate() == dateNumber}
  <div class="px-5 flex justify-center pb-5">
    <div class="card w-screen shadow-xl" style="background-color: #8DC736">
      <div class="card-body">
        <!-- <h2 class="text-white">Quote_ID</h2> -->
        <h2 class="text-white text-3xl font-bold">Quote Of The Day:</h2>
        <p class="text-white text-lg">
          We take greater pains to persuade others we are happy than in trying
          to think so ourselves. ~ Confucius.
        </p>
      </div>
      <br />
    </div>
  </div>
{:else if dateList[24].getDate() == dateNumber}
  <div class="px-5 flex justify-center pb-5">
    <div class="card w-screen shadow-xl" style="background-color: #8DC736">
      <div class="card-body">
        <!-- <h2 class="text-white">Quote_ID</h2> -->
        <h2 class="text-white text-3xl font-bold">Quote Of The Day:</h2>
        <p class="text-white text-lg">
          Remember that very little is needed to make a happy life. ~ Marcus
          Aurelius.
        </p>
      </div>
      <br />
    </div>
  </div>
{:else if dateList[25].getDate() == dateNumber}
  <div class="px-5 flex justify-center pb-5">
    <div class="card w-screen shadow-xl" style="background-color: #8DC736">
      <div class="card-body">
        <!-- <h2 class="text-white">Quote_ID</h2> -->
        <h2 class="text-white text-3xl font-bold">Quote Of The Day:</h2>
        <p class="text-white text-lg">
          A happy person is not a person in a certain set of circumstances, but
          rather a person with a certain set of attitudes. ~ Hugh Downs.
        </p>
      </div>
      <br />
    </div>
  </div>
{:else if dateList[26].getDate() == dateNumber}
  <div class="px-5 flex justify-center pb-5">
    <div class="card w-screen shadow-xl" style="background-color: #8DC736">
      <div class="card-body">
        <!-- <h2 class="text-white">Quote_ID</h2> -->
        <h2 class="text-white text-3xl font-bold">Quote Of The Day:</h2>
        <p class="text-white text-lg">
          Dukhan: Surely We revealed it on a blessed night surely We are ever
          warning.
        </p>
      </div>
      <br />
    </div>
  </div>
{:else if dateList[27].getDate() == dateNumber}
  <div class="px-5 flex justify-center pb-5">
    <div class="card w-screen shadow-xl" style="background-color: #8DC736">
      <div class="card-body">
        <!-- <h2 class="text-white">Quote_ID</h2> -->
        <h2 class="text-white text-3xl font-bold">Quote Of The Day:</h2>
        <p class="text-white text-lg">
          Now and then it's good to pause in our pursuit of happiness and just
          be happy. ~ Guillaume Apollinaire.
        </p>
      </div>
      <br />
    </div>
  </div>
{:else if dateList[28].getDate() == dateNumber}
  <div class="px-5 flex justify-center pb-5">
    <div class="card w-screen shadow-xl" style="background-color: #8DC736">
      <div class="card-body">
        <!-- <h2 class="text-white">Quote_ID</h2> -->
        <h2 class="text-white text-3xl font-bold">Quote Of The Day:</h2>
        <p class="text-white text-lg">
          Knowledge of what is possible is the beginning of happiness. ~ George
          Santayana.
        </p>
      </div>
      <br />
    </div>
  </div>
{:else if dateList[29].getDate() == dateNumber}
  <div class="px-5 flex justify-center pb-5">
    <div class="card w-screen shadow-xl" style="background-color: #8DC736">
      <div class="card-body">
        <!-- <h2 class="text-white">Quote_ID</h2> -->
        <h2 class="text-white text-3xl font-bold">Quote Of The Day:</h2>
        <p class="text-white text-lg">
          You can avoid reality, but you cannot avoid the consequences of
          avoiding reality." - Ayn Rand (1905-1982).
        </p>
      </div>
      <br />
    </div>
  </div>
{:else if dateList[30].getDate() == dateNumber}
  <div class="px-5 flex justify-center pb-5">
    <div class="card w-screen shadow-xl" style="background-color: #8DC736">
      <div class="card-body">
        <!-- <h2 class="text-white">Quote_ID</h2> -->
        <h2 class="text-white text-3xl font-bold">Quote Of The Day:</h2>
        <p class="text-white text-lg">
          Problems worthy of attack prove their worth by fighting back." - Paul
          erdos (1913-1996).
        </p>
      </div>
      <br />
    </div>
  </div>
{/if}
