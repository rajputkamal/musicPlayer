import React, { createContext } from "react";
// import { useContext } from "react";
// import { useState } from "react";


// type AudioPlayerInterface = {
//   id: number;
//   url: String;
// }

// type SongD = {
//   id: number;
//   url: String;
// };



// const store = createContext<AudioPlayerInterface>({
//   activeSong: {} as SongD,
// } as AudioPlayerInterface);

// const { Provider } = store;

// export default function AudioPlayerContext({ children }: any) {
//   const [activeSong, setActiveSong] = useState<SongD>({} as SongD);


//   return <Provider value={{ activeSong, setActiveSong }}>{children}</Provider>;
// }

// export function useAudioPlayer(): AudioPlayerInterface {
//   const context = useContext<AudioPlayerInterface>(store);
//   if (context === undefined) {
//     throw new Error("useAudioPlayer must be used within a AudioPlayerContext");
//   }
//   return context;
// }
