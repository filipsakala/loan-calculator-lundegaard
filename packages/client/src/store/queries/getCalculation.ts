const getCalculation = (
  amount: number,
  length: number,
  withInsurance: boolean
): Promise<number | undefined> => {
  const urlParams = new URLSearchParams();
  urlParams.append("amount", String(amount));
  urlParams.append("length", String(length));
  urlParams.append("withInsurance", String(withInsurance));

  return fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/calculator?` + urlParams.toString()
  )
    .then(async (response) => {
      if (!response.ok) {
        console.log("[apiFetch] Failed to complete query.");
        throw new Error("Network response was not ok");
      }

      const responseBody = await response.json();
      if (responseBody?.errors) {
        console.error(
          "[apiFetch] Failed to complete query with errors: ",
          responseBody.errors
        );
        throw new Error("Network response was not ok");
      }

      return responseBody;
    })
    .catch(() => {
      console.log(
        "[apiFetch] Something went wrong while loading calculator data"
      );
      throw new Error("Network response was not ok");
    });
};

export default getCalculation;
