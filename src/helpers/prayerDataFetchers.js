import  { cityData } from "../assets/data/constants";

import { isHanafi } from "../stores/store";
import { get } from "svelte/store";
import {
  currentCityMonthSchedule,
  currentCityDailyPrayerTime,
} from "../stores/prayerTime";

import { convertTime12to24 } from "./dateConvertor";

export const fetchCityPrayerTime = async (cityData) => {
  // console.log("getting prayer timings : " , cityData);
  const city = get(cityData)
  // console.log("City : ",city)
  let calcMethod;
  if (get(isHanafi)) {
    calcMethod = "KARACHI";
    // console.log("------------is Hanafi should be true = ", calcMethod);
  } else {
    calcMethod = "QUM";
    // console.log("------------is Hanafi should be false = ", calcMethod);
  }

  const url = `https://ap-1.ixon.cc/api/v3/prayertime/pt?lt=${city.location.coordinates[0]}&lg=${city.location.coordinates[1]}&m=${calcMethod}&a=HANAFI&tz=5&f=12h`;
  // console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  // console.log("Data : ",data)

  currentCityDailyPrayerTime.set(data);
  return data;
};

export const fetchCityMonthCalendar = async (city) => {
  const url = `https://ap-1.ixon.cc/api/v3/prayertime/pt/range?lt=${city.location.coordinates[0]}&lg=${city.location.coordinates[1]}&m=${city.name}&a=HANAFI&tz=5&f=12hNS&std=2023-03-23&dys=30`;
  // console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);
  currentCityMonthSchedule.set(data);
  return data;
};

// STEP 06.4: APPEND THE DATE BASED ON THE SPECIFIC TIME
const appendPrayerDateToTime = (time) => {
  
  // STEP 06.5 : INITIALIZE THE DATE.
  // Get current date
  const date = new Date();

  // STEP 06.6 : GET THE DATE IN ISO FORMAT.
  // * Format the date
  let isoString = date.toISOString();
  // STEP 06.7: EXTRACT ONLY FROM THE ISO FORMAT DATE.
  let dateOnly = isoString.substring(0, 10);
  // STEP 06.8 : APPLY REGEX TO GET THE DATE.
  let dateFormat = dateOnly.replace(/(\d{4})-(\d{2})-(\d{2})/, '$1/$2/$3');
  
  // STEP 06.9 : CONVERT THE DATE INTO EPOCHS IN ORDER TO COMPARE THE VALUES BETWEEN THE EPOCHS 
    // ? (CURRENTEPOCH - SPECIFIC TIME EPOCH)
  const ishaPrayerTime = convertTime12to24(get(currentCityDailyPrayerTime).isha)
  const ishaPrayerTimeEpochs = Date.parse(`${dateFormat} ${ishaPrayerTime}` )
  const currentTime = new Date().toLocaleTimeString();
  const currentTimeEpochs = Date.parse(`${dateFormat} ${currentTime}`)
  // console.log('CurrentTime: ',currentTimeEpochs);
  // console.log('ishaPrayerTime: ',ishaPrayerTimeEpochs);

  // console.log("Prayer time: " , ishaPrayerTimeEpochs);
  if (currentTimeEpochs > ishaPrayerTimeEpochs) {
    // Use tomorrow's date
    date.setDate(date.getDate() + 1);
    isoString = date.toISOString();
    dateOnly = isoString.substring(0, 10);
    dateFormat = dateOnly.replace(/(\d{4})-(\d{2})-(\d{2})/, '$1/$2/$3');

    // * RETURN THE DATE WITH TIME .
    return `${dateFormat} ${time}`
  }


  return `${dateFormat} ${time}`

  
};

// SETP 06 : FUNCTION TO GET NEXT SALAH OBJECT.
export const getNextSalah = (currentDateTime) => {
  const currentPrayerSchedule = get(currentCityDailyPrayerTime);

  // STEP 06.1 : INITIALIZE THE PRAYERDATE WITH TIME INTO OBJECT TO GET THE NEXT SALAH DATE EPOCHS.
  const currentFajrTime = {
    // STEP 06.2 : INITIALIZE THE PRAYER PROPERTY VALUE.
    prayer: "fajr",
    // STEP 06.3:  FUNCTION TO GET TIME BASED ON DATE PARSING WITH TIME.
    time: appendPrayerDateToTime(convertTime12to24(currentPrayerSchedule.fajr)),
  };
  const currentDhuhrTime = {
    prayer: "dhuhr",
    time: appendPrayerDateToTime(
      convertTime12to24(currentPrayerSchedule.dhuhr)
    ),
  };
  const currentAsrTime = {
    prayer: "asr",
    time: appendPrayerDateToTime(convertTime12to24(currentPrayerSchedule.asr)),
  };
  const currentMaghribTime = {
    prayer: "maghrib",
    time: appendPrayerDateToTime(
      convertTime12to24(currentPrayerSchedule.maghrib)
    ),
  };
  const currentIshaTime = {
    prayer: "isha",
    time: appendPrayerDateToTime(convertTime12to24(currentPrayerSchedule.isha)),
  };
  // fajr
  // dhuhr
  // asr
  // maghrib
  // isha
  // date_str
  // date

  // STEP 06.4 : NOW ENCAUPSULAETED THE OBJECT VALUE(S) INTO AN ARRAY.
  const prayerTimeArray = [
    currentFajrTime,
    currentDhuhrTime,
    currentAsrTime,
    currentMaghribTime,
    currentIshaTime,
  ];

  // STEP 06.5: FUNCTION TO GET TIME TO NEXT PRAYER .
  let prayerStatusArray = getTimeToNext(currentDateTime, prayerTimeArray);

    // STEP 06.6: RETURN THE NEXT PRYAER WHOSE EPOCHS VALUE IS GREATER THEN CURRENT DATE EPOCHS VALUE.
  // return prayerStatusArray
  for (let i = 0; i < 5; i++) {
    if (!prayerStatusArray[i].prayerTimeStarted) {
      // console.log("Prayer status : " ,prayerStatusArray[i])
      return prayerStatusArray[i];
    }
  }
};



// STEP 07: FUNCTION TO GET NEXT SALAH OBJECT.
const getTimeToNext = (currentDateTime, prayerTimeArray) => {
  let prayerTimeDiffArray;

  // STEP 07.2 : FUNCTION TO RETURN THE CURRENT DATETIME FROM KARACHI. (NEEDS TO MAKE THIS TIME ZONE DYNAMIC)
  currentDateTime = new Date().toLocaleString("en", {
    timeZone: "Asia/Karachi",
  });

  // STEP 07.3 : FUNCTION TO INITIALIZE THE PRAYERTIME ARRAY PROPERTY TIME BASED ON PRAYER SPECIFIC DATE TIME.
  for (let i = 0; i < prayerTimeArray.length; i++) {
    prayerTimeArray[i].time = new Date(prayerTimeArray[i].time).toLocaleString(
      "en",
      {
        timeZone: "Asia/Karachi",
      }
    );
  }


  // STEP 07.4 : FUNCTION TO INITIALIZE THE ARRAY VALUES INTO 'prayerTimeDiffArray' ARRAY.
        // ? In order to find the time difference values (currentime - specific prayertime) within array. 
  prayerTimeDiffArray = [...prayerTimeArray];

  let currentDateEpochs = Date.parse(currentDateTime);

  // console.log("---------------prayerTimeArray", prayerTimeArray);
  for (let i = 0; i < prayerTimeArray.length; i++) {
      let prayerTimeEpoch = Date.parse(prayerTimeDiffArray[i].time),
       timeDiff = currentDateEpochs - prayerTimeEpoch;
      prayerTimeDiffArray[i] = {
      prayer: prayerTimeDiffArray[i].prayer.toUpperCase(),
      prayerTimeStarted: currentDateEpochs > prayerTimeEpoch,
      timeDiff: timeDiff,
    };
  }
  return prayerTimeDiffArray;
};
