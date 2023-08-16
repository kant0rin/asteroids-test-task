import React from "react";

interface IsInLunarParams {
  isInLunar: boolean,
  setIsInLunar: (e: boolean) => void
}


export const IsInLunarContext = React.createContext<IsInLunarParams>({isInLunar: false, setIsInLunar: () => []})
