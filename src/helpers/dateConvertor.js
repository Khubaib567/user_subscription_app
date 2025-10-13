export const convertTime12to24 = (time12h) => {
  // console.log("Time Format: ",time12h)
  const [time, modifier] = time12h.split(" ");

  let [hours, minutes] = time.split(":");

  if (hours === "12") {
    hours = "00";
  }

  if (modifier === "pm") {
    hours = parseInt(hours, 10) + 12;
  }


  return `${hours}:${minutes}`;
};
