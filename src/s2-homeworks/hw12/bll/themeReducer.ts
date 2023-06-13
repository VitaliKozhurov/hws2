const initState = {
    themeId: 1,
};

export const themeReducer = (
    state: { themeId: number } = initState,
    action: ChangeThemeActionType
): { themeId: number } => {
    switch (action.type) {
        case "SET_THEME_ID":
            return { themeId: Number(action.id) };

        default:
            return state;
    }
};
export type ChangeThemeActionType = {
    type: "SET_THEME_ID";
    id: string;
};

export const changeThemeId = (id: string): ChangeThemeActionType => ({
    type: "SET_THEME_ID",
    id,
});
