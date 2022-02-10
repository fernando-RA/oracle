const queryAPI = async (user) => {
    const values = {
      handle: user?.replace("@", ""),
    };
    const response = await fetch(`/api/searchTwitterApi`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  };

export default queryAPI;