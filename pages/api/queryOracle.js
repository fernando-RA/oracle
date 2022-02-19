import mockData from "./mockData";
const link = "https://sentientmachine.online";
const password = "jf288jsdbbvga345xaa1319";

export const fetchQuery = async (req, res) => {
  const token = req.token;
  try {
    const response = await fetch(`${link}/fetch`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
        password: password,
      }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e, "error");
  }
};

export const runQuery = async (req) => {
  const question = req.question;
  try {
    const response = await fetch(`${link}/run`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: question,
        password: password,
      }),
    });
    return await response.json();
  } catch (e) {
    console.log(e, "error");
  }
};

// export const listAllQuery = async (req) => {
//   try {
//     const response = await fetch(`${link}/output/summary.json`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//     });
//     console.log("response listAllQuery", response);
//     return await response.json();
//   } catch (e) {
//     console.log(e, "error");
//   }
// };

export const listAllQuery = async (req) => {
  return mockData;
}