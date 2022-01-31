export const handleAndroidChange = (e) => {
    dispatch({ type: ACTIONS.ANDROID_CHANGE, payload: e });
};

export const handleIosChange = (e) => {
    dispatch({ type: ACTIONS.ANDROID_CHANGE, payload: e });
};

export const handleWebChange = (e) => {
    dispatch({ type: ACTIONS.ANDROID_CHANGE, payload: e });
};

export const ACTIONS = {
    SLUG_CHANGE: "slug_change",
    IOS_CHANGE: "ios_change",
    ANDROID_CHANGE: "android_change",
    WEB_CHANGE: "web_change",
};

export const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.IOS_CHANGE:
            return { ios_url: "" };

        case ACTIONS.ANDROID_CHANGE:
            return { android_url: "" };

        case ACTIONS.WEB_CHANGE:
            return { web_url: "" };

        default:
            return state;
    }
};
