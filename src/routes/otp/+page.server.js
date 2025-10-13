// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// export const prerender = false;

// +page.server.js
import { error } from "@sveltejs/kit";
import { get  } from "svelte/store"; // Import the `get` utility from svelte/store
import { number, otp, otp, otp, subscriber } from "../../stores/store";
import { redirect } from "@sveltejs/kit";

export const prerender = false;

/** @type {import('./$types').PageLoad} */  
export function load () {
 
  // If `subscribers` is a client-side store, it cannot be reliably accessed on the server.
  // In a server `load` function, it is best to fetch data from a database or API directly.
  // If you must use a store, you should use the `get` utility to retrieve its current value.
  const token = get(otp);
  //console.log(token)


  return {
    otp : token
  }
    
}

// /** @satisfies {import('./$types').Actions} */
export const actions = {
      // CALLBACK FUNCTION
      verify : async ({request}) => {
        const data = await request.formData()
        const token = parseInt(data.get("otp"))
        // console.log(token)
        const usertoken = get(otp)
        // console.log(usertoken)
       
        if(!token) {
          console.log("OTP is null!")
          throw error(400, {
       		 message: 'OTP is null!'
      		});
        }
         
        if(usertoken === token){
          console.log("OTP is valid!")
          throw redirect(303 , "/home")
        }

        if(usertoken !== token){
          throw error(403,{
          message:"OTP is invalid!"
        })
        }
        
      }
}



