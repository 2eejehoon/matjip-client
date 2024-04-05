import { create } from "zustand";

type ViewMode = "LIST" | "MAP";

type PostViewModeStore = {
    viewMode: ViewMode;
    setViewMode: (videMode: ViewMode) => void;
};

const usePostViewModeStore = create<PostViewModeStore>((set) => ({
    viewMode: "LIST",
    setViewMode: (viewMode) => {
        set(() => ({ viewMode: viewMode }));
    }
}));

export default usePostViewModeStore;
