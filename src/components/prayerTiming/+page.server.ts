import type { Actions } from '@sveltejs/kit';


export const actions = {
    getPrayerTiming:async ({ request }) => {
        const reqData = await request.formData(); 
        const city = reqData.get('city')
        // console.log(city)
        // console.log(reqData)

        if(city == 'Karachi'){
            const res = await fetch(`https://ap-1.ixon.cc/api/v3/prayertime/pt?lt=24.8607&lg=67.0011&m=${city}&a=HANAFI&tz=5&f=12h`)
            const result = await res.json()
            // console.log(result['fajr'])

            return{
                success:true,
                city_name:city,
                fajar:result['fajr'],
                zohar:result['dhuhr'],
                asar:result['asr'],
                maghrib:result['maghrib'],
                isha:result['isha']
            }
        }
        else if(city == 'Malakand'){
            const res = await fetch(`https://ap-1.ixon.cc/api/v3/prayertime/pt?lt=34.503&lg=71.9046&m=${city}&a=HANAFI&tz=5&f=12h`)
            const result = await res.json()
            // console.log(result['fajr'])

            return{
                success:true,
                city_name:city,
                fajar:result['fajr'],
                zohar:result['dhuhr'],
                asar:result['asr'],
                maghrib:result['maghrib'],
                isha:result['isha']
            }
        }
        else if(city == 'Mardan'){
            const res = await fetch(`https://ap-1.ixon.cc/api/v3/prayertime/pt?lt=34.1986&lg=72.0404&m=${city}&a=HANAFI&tz=5&f=12h`)
            const result = await res.json()
            // console.log(result['fajr'])

            return{
                success:true,
                city_name:city,
                fajar:result['fajr'],
                zohar:result['dhuhr'],
                asar:result['asr'],
                maghrib:result['maghrib'],
                isha:result['isha']
            }
        }

        else if(city == 'Peshawar'){
            const res = await fetch(`https://ap-1.ixon.cc/api/v3/prayertime/pt?lt=34.0151&lg=71.5249&m=${city}&a=HANAFI&tz=5&f=12h`)
            const result = await res.json()
            // console.log(result['fajr'])

            return{
                success:true,
                city_name:city,
                fajar:result['fajr'],
                zohar:result['dhuhr'],
                asar:result['asr'],
                maghrib:result['maghrib'],
                isha:result['isha']
            }
        }
        else if(city == 'Kohat'){
            const res = await fetch(`https://ap-1.ixon.cc/api/v3/prayertime/pt?lt=33.583401&lg=71.433219&m=${city}&a=HANAFI&tz=5&f=12h`)
            const result = await res.json()
            // console.log(result['fajr'])

            return{
                success:true,
                city_name:city,
                fajar:result['fajr'],
                zohar:result['dhuhr'],
                asar:result['asr'],
                maghrib:result['maghrib'],
                isha:result['isha']
            }
        }

        else if(city == 'Bannu'){
            const res = await fetch(`https://ap-1.ixon.cc/api/v3/prayertime/pt?lt=32.991&lg=70.6455&m=${city}&a=HANAFI&tz=5&f=12h`)
            const result = await res.json()
            // console.log(result['fajr'])

            return{
                success:true,
                city_name:city,
                fajar:result['fajr'],
                zohar:result['dhuhr'],
                asar:result['asr'],
                maghrib:result['maghrib'],
                isha:result['isha']
            }
        }

        else if(city == 'D.I Khan'){
            const res = await fetch(`https://ap-1.ixon.cc/api/v3/prayertime/pt?lt=31.8626&lg=70.9019&m=${city}&a=HANAFI&tz=5&f=12h`)
            const result = await res.json()
            // console.log(result['fajr'])

            return{
                success:true,
                city_name:city,
                fajar:result['fajr'],
                zohar:result['dhuhr'],
                asar:result['asr'],
                maghrib:result['maghrib'],
                isha:result['isha']
            }
        }

        else if(city == 'Rawalpindi'){
            const res = await fetch(`https://ap-1.ixon.cc/api/v3/prayertime/pt?lt=33.5651&lg=73.0169&m=${city}&a=HANAFI&tz=5&f=12h`)
            const result = await res.json()
            // console.log(result['fajr'])

            return{
                success:true,
                city_name:city,
                fajar:result['fajr'],
                zohar:result['dhuhr'],
                asar:result['asr'],
                maghrib:result['maghrib'],
                isha:result['isha']
            }
        }

        else if(city == 'Sargodha'){
            const res = await fetch(`https://ap-1.ixon.cc/api/v3/prayertime/pt?lt=32.074&lg=72.6861&m=${city}&a=HANAFI&tz=5&f=12h`)
            const result = await res.json()
            // console.log(result['fajr'])

            return{
                success:true,
                city_name:city,
                fajar:result['fajr'],
                zohar:result['dhuhr'],
                asar:result['asr'],
                maghrib:result['maghrib'],
                isha:result['isha']
            }
        }
        else if(city == 'Faisalabad'){
            const res = await fetch(`https://ap-1.ixon.cc/api/v3/prayertime/pt?lt=32.074&lg=72.6861&m=${city}&a=HANAFI&tz=5&f=12h`)
            const result = await res.json()
            // console.log(result['fajr'])

            return{
                success:true,
                city_name:city,
                fajar:result['fajr'],
                zohar:result['dhuhr'],
                asar:result['asr'],
                maghrib:result['maghrib'],
                isha:result['isha']
            }
        }
        else if(city == 'Gujhranwala'){
            const res = await fetch(`https://ap-1.ixon.cc/api/v3/prayertime/pt?lt=32.1877&lg=74.1945&m=${city}&a=HANAFI&tz=5&f=12h`)
            const result = await res.json()
            // console.log(result['fajr'])

            return{
                success:true,
                city_name:city,
                fajar:result['fajr'],
                zohar:result['dhuhr'],
                asar:result['asr'],
                maghrib:result['maghrib'],
                isha:result['isha']
            }
        }
         
    }
} satisfies Actions;