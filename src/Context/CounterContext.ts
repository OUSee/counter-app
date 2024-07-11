import { createContext } from "react";

type CounterContext = {
    value: number;
    onChange: (value: number) => void;
}

export const counterContext = createContext<CounterContext>({
    value: 0,
    onChange: () => {},
});



