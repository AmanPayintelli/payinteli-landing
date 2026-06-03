"use client";

import { COUNTRIES_STATES_URL } from "@/api";
import { apiRequest } from "@/api/apiClient";
import { Country } from "@/components/onboarding/company-profile/schema";
import { useEffect, useState } from "react";

export const useCountriesStates = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoadingCountries, setIsLoadingCountries] = useState(false);

  useEffect(() => {
    const fetchCountriesStates = async () => {
      try {
        setIsLoadingCountries(true);

        const result = await apiRequest<{ countries: Country[] }>({
          method: "get",
          url: COUNTRIES_STATES_URL,
        });

        setCountries(result?.countries || []);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingCountries(false);
      }
    };

    fetchCountriesStates();
  }, []);

  return {
    countries,
    isLoadingCountries,
  };
};
