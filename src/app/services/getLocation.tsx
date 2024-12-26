// example of how to call and api
// 1. GET FROM online
// 2. paste api key in .env
// 3. update url path and what will u get

// async function getLocation() {
//   const url = process.env.NEXT_PUBLIC_API_URL + "/member";

//   const response = await fetch(url, {
//     headers: {
//       "X-Authorization": process.env.NEXT_PUBLIC_X_AUTHORIZATION || "",
//       "Content-Type": "application/json",
//       "Accept-Language": "en",
//     },
//     cache: "no-store",
//   });
//   if (!response.ok) {
//     throw new Error(await response.text());
//   }
//   return await response.json();
// }

// async function getLocationTwo(id?: number) {
//   const url = `${process.env.NEXT_PUBLIC_API_URL}/member?id=${
//     id ? `${id}` : 1
//   }`;

//   const response = await fetch(url, {
//     headers: {
//       "X-Authorization": process.env.NEXT_PUBLIC_X_AUTHORIZATION || "",
//       "Content-Type": "application/json",
//       "Accept-Language": "en",
//     },
//     cache: "no-store",
//   });
//   if (!response.ok) {
//     throw new Error(await response.text());
//   }
//   return await response.json();
// }

// export default async function QuickCoachGuide({
//   searchParams,
// }: //   params: { locale },
// Readonly<{
//   searchParams: {
//     id: number;
//   };
//   //   params: {
//   //     locale: string;
//   //   };
// }>) {
//   const tutorials = await getLocation();

//   const id = searchParams.id || 1;
//   const details = await getLocationTwo(id);

//   return (
//     <>
//       <div className="block">
//         <Location
//           tutorials={tutorials.data} // pass first api as json
//           id={searchParams.id}
//           details={details.data} // pass second api as json with had the id as parms
//         />
//       </div>
//     </>
//   );
// }
