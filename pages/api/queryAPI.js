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
    if (response.status === 200) {
      setQuestionResponse(data);
      toast({
        status: "success",
        description: `Data submited successfully for user @${user}`,
        duration: 6000,
      });
    }
  };

export default queryAPI;