import mockData from "./mockData";
const link = "https://sentientmachine.online";
const password = "jf288jsdbbvga345xaa1319";

export const fetchQuery = async (req, res) => {
  const token = req.token;
  console.log("token", token);
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
    console.log('data', data);
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
// curl https://sentientmachine.online/run -k -d '{"question": "What are 3 ways to get cash?", "password": "jf288jsdbbvga345xaa1319"}'  -H 'Content-Type: application/json'\n
// curl https://sentientmachine.online/fetch -k -d '{"token": "_1644274202_7wzzh891", "password": "jf288jsdbbvga345xaa1319"}'  -H 'Content-Type: application/json'\n
// curl https://sentientmachine.online/run -k -d '{"question": "What is the oracle?", "password": "jf288jsdbbvga345xaa1319"}'  -H 'Content-Type: application/json'\n
// curl https://sentientmachine.online/fetch -k -d '{"token": "_1644275176_nw428eq8", "password": "jf288jsdbbvga345xaa1319"}'  -H 'Content-Type: application/json'\n

// Q
// curl https://sentientmachine.online/run -k -d '{"question": "What is the meaning of life on Mars?", "password": "jf288jsdbbvga345xaa1319"}'  -H 'Content-Type: application/json'\n
// Response
// {"status":{"status":"queued","queue_position":1},"token":"_1644532575_ho7odsxn"}%

// Q
// curl https://sentientmachine.online/fetch -k -d '{"token": "_1644275754_qv6n5wza", "password": "jf288jsdbbvga345xaa1319"}'  -H 'Content-Type: application/json'
// Response
// {"status":{"status":"complete"},"config":{"question":"what is beyound the thin veil of the material world?","stylegan_template":true,"password":"jf288jsdbbvga345xaa1319","username":""},"output":{"question":"what is beyound the thin veil of the material world?","response":"Nothing.","video":"output/result_44416_final.mp4","html":"output/result_44416.html"}}

// https://sentientmachine.online/output/summary.json
// > ask for Genes help with CORS error
