export const setPathToSessionStorage = () => {
    const storage = window?.sessionStorage;
    if (!storage) return;

    const prevPath = storage.getItem("currentPath") || "/";

    const currentPath = window.location.search
        ? window.location.pathname + window.location.search
        : window.location.pathname;

    if (prevPath === currentPath) return;

    storage.setItem("prevPath", prevPath);
    storage.setItem("currentPath", currentPath);
};

export const getPrevPathFromSessionStorage = () => {
    const storage = window?.sessionStorage;
    if (!storage) return;

    const prevPath = storage.getItem("prevPath") || "/";

    return prevPath;
};
