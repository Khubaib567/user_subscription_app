import { get } from "svelte/store";
import { accessToken, msisdn, subStatus } from "../stores/store";

import moment from "moment";

const APP_ID = "e9aecf06c1cd4721bea533233f9fa454";

export const clearLocalStorage = () => {
  accessToken.set("");
  msisdn.set(null);
  subStatus.set("false");
};

export const getAccessToken = async () => {
  let expireTokenRes = await expireToken();
  // console.log("expireTokenRes", expireTokenRes);

  const data = await fetch(
    `https://islamic.vectracom.com/api_zong/index.php?msisdn=${get(
      msisdn
    )}&operator=Zong&menu=mza_he_reg_token_val&key=${APP_ID}`
  );

  const response = await data.json();
  return { response };
};

const expireToken = async () => {
  const data = await fetch(
    `https://islamic.vectracom.com/api_zong/index.php?msisdn=${get(
      msisdn
    )}&operator=Zong&menu=is_expired`
  );
  const response = await data.json();

  return { response };
};

export const subscribeUser = async () => {
  // console.log("---------------", new Date());
  let timeNow = moment().format().toString().split("+")[0];
  const data = await fetch(
    `https://islamic.vectracom.com/api_zong/index.php?msisdn=${get(
      msisdn
    )}&operator=Zong&dt=${timeNow}&menu=subscription&Authorization=bearer+${get(
      accessToken
    )}`
  );
  const response = await data.json();

  if (response.sub == "true") {
    subStatus.set("true");
  }
  console.log(response);
  return { response };
  // console.log('Data has fetched!')
};

export const unsubscribeUser = async () => {
  const data = await fetch(
    `https://islamic.vectracom.com/api_zong/index.php?msisdn=${get(
      msisdn
    )}&operator=Zong&menu=unsub_zong`
  );

  const response = await data.json();
  clearLocalStorage();
  return { response };
};
