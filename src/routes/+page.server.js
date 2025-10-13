// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// export const prerender = true;

// +page.server.js
import { error } from "@sveltejs/kit";
import { get } from "svelte/store"; // Import the `get` utility from svelte/store
import { subscriber } from "../stores/store";
import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */  
export function load () {

  // If `subscribers` is a client-side store, it cannot be reliably accessed on the server.
  // In a server `load` function, it is best to fetch data from a database or API directly.
  // If you must use a store, you should use the `get` utility to retrieve its current value.
  // const user = get(subscriber);
  // console.log(user)

  // if(user.status === 404) throw redirect(307,'/unsub')

  // if (user.subscription === false) {
  //   // You must return an object from the load function
  //   // For error handling, SvelteKit provides the `error` function
  //   console.log("UnSubscribe User!");
  //   throw redirect(307,'/unsub');
  // }

  // if (user.subscription === true) {
  //   // You must return an object from the load function
  //   // For error handling, SvelteKit provides the `error` function
  //   console.log("Subscribe User!");
  //   throw redirect(307,'/login');

  // }

   
}

