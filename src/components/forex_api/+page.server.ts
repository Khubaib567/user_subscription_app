export const load = async ({ fetch }: { fetch: any; }) => {
        const res = await fetch('https://ap-1.ixon.cc/api/v2/forex?clientid=10010&api_key=c4d3db743df74385b7e7&currency=usd,aed,gbp')
        const data = await res.json()
        console.log(data)

        return{
            data
        }         
}
