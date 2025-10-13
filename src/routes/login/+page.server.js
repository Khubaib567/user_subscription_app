import { redirect  , error } from '@sveltejs/kit';
import { number, otp } from '../../stores/store';
 

export const prerender = false;

export function load() {
	console.log("Load Function has triggered!");
}

/** @satisfies {import('./$types').Actions} */
export const actions = {
	otp : async ({request}) => {
		let msisdn;
    	// The regular expression to validate the phone number format
    	const phoneRegex = /^(9230[0-9]{8})$/;
		const data = await request.formData();
		const userNumber = data.get("number");

		if (!phoneRegex.test(userNumber)) {
      		throw error(400, {
       		 message: 'Invalid phone number. Please use the following format i.e 923XXXXXXXX.'
      		});
    	}

		// If validation passes, you can process the data, e.g., save to a database.
    	if(phoneRegex.test(userNumber)){
			console.log('Phone number is valid:', userNumber);
			number.set(parseInt(userNumber))
			// otp.set(parseInt(userNumber))
			throw redirect(303, '/otp');
		}

		
	}
}


