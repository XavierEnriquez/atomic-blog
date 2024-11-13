import { useContext } from "react";
import PostContext from "./PostContext";

function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined)
    throw new Error("PostContext in usePost was used outside the PostProvider");

  return context;
}

export default usePosts;
