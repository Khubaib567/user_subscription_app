import { get } from "svelte/store";
import { msisdn, accessToken, subStatus } from "../../stores/store";

export const load = async () => {
  return {
    phoneNumber: get(msisdn),
    accessToken: get(accessToken),
    subStatus: get(subStatus),
  };
};
