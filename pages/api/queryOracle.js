import mockData from "./mockData";
const link = "https://sentientmachine.online/";
const password = "jf288jsdbbvga345xaa1319";

export const fetchQuery = async (req, res) => {
  const token = req.body.token;
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
  console.log(req);
  const question = req.q;
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

export const listAllQuery = async (req, res) => {
  try {
    const response = await fetch(`${link}/run`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return await response.json();
  } catch (e) {
    console.log(e, "error");
  }
};

export const runMockData = async (req, res) => {
  const data = mockData;
  return data;
};

// curl https://sentientmachine.online/run -k -d '{"question": "What are 3 ways to get cash?", "password": "jf288jsdbbvga345xaa1319"}'  -H 'Content-Type: application/json'\n
// curl https://sentientmachine.online/fetch -k -d '{"token": "_1644274202_7wzzh891", "password": "jf288jsdbbvga345xaa1319"}'  -H 'Content-Type: application/json'\n

// curl https://sentientmachine.online/run -k -d '{"question": "What is the oracle?", "password": "jf288jsdbbvga345xaa1319"}'  -H 'Content-Type: application/json'\n
// curl https://sentientmachine.online/fetch -k -d '{"token": "_1644275176_nw428eq8", "password": "jf288jsdbbvga345xaa1319"}'  -H 'Content-Type: application/json'\n

// curl https://sentientmachine.online/run -k -d '{"question": "What is the meaning of life on Mars?", "password": "jf288jsdbbvga345xaa1319"}'  -H 'Content-Type: application/json'\n
// curl https://sentientmachine.online/fetch -k -d '{"token": "_1644275754_qv6n5wza", "password": "jf288jsdbbvga345xaa1319"}'  -H 'Content-Type: application/json'\n

// https://sentientmachine.online/output/summary.json
// > ask for Genes help with CORS error
