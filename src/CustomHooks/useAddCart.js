/** Custom hook for setting the count values for the cart */

import { useState  } from "react";
export default function useAddCart(initialCount) 
{
    const [count, setCount] = useState(initialCount);
    const addCart = () =>
    {
        return setCount(count + 1);
    };
    return [count, addCart];
}