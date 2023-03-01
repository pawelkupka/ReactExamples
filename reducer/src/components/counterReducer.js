import { INCREASE, DECREASE, RESET } from "./counterActions";

const counterReducer = (state, action) => {
    switch (action.type) {
        case INCREASE:
            return { counter: state.counter + 1 };
        case DECREASE:
            return { counter: state.counter - 1 };
        case RESET:
            return { counter: 0 };
        default:
            return { counter: 0 };
    }
}

export default counterReducer;
