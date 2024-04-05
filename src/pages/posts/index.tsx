import { ReactElement } from "react";
import BaseLayout from "@/layouts/baseLayout";
import CategoryNavigation from "@/components/posts/categoryNavigation";
import usePostVideModeStore from "@/zustand/PostViewMode";
import PostViewModeSwitchButton from "@/components/posts/PostViewModeSwitchButton";
import List from "@/components/posts/postList";

const PostsPage = () => {
    const { viewMode } = usePostVideModeStore();

    return (
        <>
            <CategoryNavigation />
            {(() => {
                switch (viewMode) {
                    case "MAP":
                        return;

                    case "LIST":
                        return <List />;
                }
            })()}
            <PostViewModeSwitchButton />
        </>
    );
};

PostsPage.getLayout = (page: ReactElement) => {
    return <BaseLayout>{page}</BaseLayout>;
};

export default PostsPage;
