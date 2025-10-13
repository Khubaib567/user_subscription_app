// import type { PageLoad } from "./$types";

import {
  msisdn,
  accessToken,
  subStatus,
  currentCity,
  isHanafi,
} from "../stores/store";
import {cityData} from "../assets/data/constants";
import { get } from "svelte/store";
import { currentCityDailyPrayerTime } from "../stores/prayerTime";
import { getAccessToken } from "../helpers/subscriptionHelpers";
import { fetchCityPrayerTime } from "../helpers/prayerDataFetchers";

export const load = async ({ parent, data }) => {
  // await parent();

  // let { page_server_data } = data;

  // let phoneNumber = data.page_server_data.msisdn;

  // msisdn.set(phoneNumber);

  // const getAccessTokenResponse = await getAccessToken();

  // if (getAccessTokenResponse.response[0]["desc"] == "Verified User") {
  //   accessToken.set(getAccessTokenResponse.response[0]["token"]);
  //   subStatus.set(getAccessTokenResponse.response[0]["sub_status"]);
  // }

  // return {
  //   prayerTime: fetchCityPrayerTime(get(currentCity)),
  // };
};
