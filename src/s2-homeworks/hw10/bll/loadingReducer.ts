const initState = {
    isLoading: false,
};

type IntitialStateType = {
    isLoading: boolean;
};

export const loadingReducer = (
    state: IntitialStateType = initState,
    action: LoadingActionType
): IntitialStateType => {
    switch (action.type) {
        case "CHANGE_LOADING":
            return {
                isLoading: action.isLoading,
            };
        default:
            return state;
    }
};

type LoadingActionType = {
    type: "CHANGE_LOADING";
    isLoading: boolean;
};

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: "CHANGE_LOADING",
    isLoading,
});
