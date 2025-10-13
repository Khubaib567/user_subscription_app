import { writable } from "svelte/store";
import { fromLocalStorage, toLocalStorage } from "./storage";
import { QURAN_SURAH_LIST } from "../assets/data/quran";

export type TQuranStatus = {
  surah: number;
  ayat: number;
};
// export const currentSurah = writable(1);
// export const currentAyat = writable(1);
// export const currentAyat = writable({ surah: 1, ayat: 1 });
// export const currentLangs = writable(['ar', 'ur', 'en']);
// export const currentJuz = writable(1);

export const fullSurahInitialValue = fromLocalStorage("fullSurah", null);
export const fullSurah = writable(fullSurahInitialValue);
toLocalStorage(fullSurah, "fullSurah");

export const currentSurahInitialValue = fromLocalStorage(
  "currentSurah",
  QURAN_SURAH_LIST[0]
);
export const currentSurah = writable(currentSurahInitialValue);
toLocalStorage(currentSurah, "currentSurah");

export const currentAyatInitialValue = fromLocalStorage("currentAyat", {
  surah: 1,
  ayat: 1,
});
export const currentAyat = writable(currentAyatInitialValue);
toLocalStorage(currentAyat, "currentAyat");

export const currentJuzInitialValue = fromLocalStorage("currentJuz", 1);
export const currentJuz = writable(currentJuzInitialValue);
toLocalStorage(currentJuz, "currentJuz");

export const currentLangsInitialValue = fromLocalStorage("currentLangs", [
  // "ar",
  "ur",
  // "en",
]);
export const currentLangs = writable(currentLangsInitialValue);
toLocalStorage(currentLangs, "currentLangs");
