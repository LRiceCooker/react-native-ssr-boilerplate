import { useAtom } from "jotai";
import { atomWithReducer } from "jotai/utils";

type ActionType = "increment"

const initialState = {
    count: 0
}

const countReducer = (prev: typeof initialState, action: {type: ActionType}) => {
    switch (action.type) {
        case "increment":
            return { count: prev.count + 1 }
        default:
            return prev
    }
}

const countReducerAtom = atomWithReducer(initialState, countReducer);

export default () => useAtom(countReducerAtom)