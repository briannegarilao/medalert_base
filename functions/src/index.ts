// ESM
// import * as v2 from "firebase-functions/v2";
// import * as v1 from "firebase-functions/v1";

// type Indexable = { [key: string]: string };

// export const helloworld = v2.https.onRequest((request, response) => {
//   const name = request.params[0].replace("/", "");
//   const items: Indexable = { lamp: "This is a lamp", chair: "This is a chair" };
//   const message = items[name];
//   response.send(`<h1>${message}</h1>`);
// });

// type Sku = {
//   name: string;
//   usd: number;
//   eur?: number;
// };

// const USD_TO_EUR = 0.95;

// export const newsku = v1.firestore
//   .document("/inventory/{sku}")
//   .onCreate((snapshot) => {
//     const data = snapshot.data();
//     const eur = data.usd * USD_TO_EUR;
//     return snapshot.ref.set({ eur, ...data }, { merge: true });
//   });
