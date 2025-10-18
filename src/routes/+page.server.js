// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// export const prerender = true;

// +page.server.js
import { error } from "@sveltejs/kit";
import { get } from "svelte/store"; // Import the `get` utility from svelte/store
import { subscriber } from "../stores/store";
import { redirect } from "@sveltejs/kit";
import { neon } from '@neondatabase/serverless';
import { msisdn } from "../stores/store";


// /** @type {import('./$types').PageLoad} */  
export async function load  () {


  const DATABASE_URL = 'postgresql://neondb_owner:npg_J8orWkUei9IL@ep-royal-forest-a86y2yvj-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require'
  const sql = neon(DATABASE_URL);
  // If `subscribers` is a client-side store, it cannot be reliably accessed on the server.
  // In a server `load` function, it is best to fetch data from a database or API directly.
  // If you must use a store, you should use the `get` utility to retrieve its current value.
  const phoneNumber = get(msisdn);
  // console.log(user)

  // const user = await sql`SELECT * FROM users WHERE msisdn = ${phoneNumber} `;
  const user = [];
  // console.log('user: ' , typeof(user))

  if(Object.keys(user).length === 0) throw redirect(307,'/unsub')

  if (user[0].subscription === false) {
    // You must return an object from the load function
    // For error handling, SvelteKit provides the `error` function
    console.log("UnSubscribe User!");
    throw redirect(307,'/unsub');
  }

  if (user[0].subscription === true) {
    // You must return an object from the load function
    // For error handling, SvelteKit provides the `error` function
    console.log("Subscribe User!");
    throw redirect(307,'/home');

  }

   
}

