import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const UseFlagContext = createContext(null);

export const FlagContextProvide = UseFlagContext.Provider;

export default function useFlag(){
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});
  
    async function fetchFeatureFlags() {
      try {
        setLoading(true);
        //original service call
        const response = await featureFlagsDataServiceCall();
        setEnabledFlags(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        throw new Error(error);
      }
    }
  
    useEffect(() => {
      fetchFeatureFlags();
    }, []);
  
    return (
      <FlagContextProvide.Provider value={{ loading, enabledFlags }}>
        {children}
      </FlagContextProvide.Provider>
    );
}