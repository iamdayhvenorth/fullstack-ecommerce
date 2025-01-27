import axios, { AxiosError } from "axios";

export const fetchCountryStates = async (countryCode: string) => {
  if (!countryCode) throw new Error("Invalid country code");
  try {
    const response = await axios.get(
      `https://country-state-city-search-rest-api.p.rapidapi.com/states-by-countrycode?countrycode=${countryCode}`,
      {
        headers: {
          "x-rapidapi-host":
            "country-state-city-search-rest-api.p.rapidapi.com",
          "x-rapidapi-key":
            "e8e2cf65admsh5c3ab71cce5a753p1dd699jsndf23113189dc",
        },
      }
    );
    if (response.status !== 200) {
      throw new Error(
        `Error fetching data: ${response.status} - ${response.statusText}`
      );
    }
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
    throw error;
  }
};
