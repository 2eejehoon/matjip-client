import { ReactElement } from "react";
import BaseLayout from "@/layouts/baseLayout";
import CategoryNavigation from "@/components/posts/categoryNavigation";
import usePostViewModeStore from "@/zustand/postViewMode";
import PostViewModeSwitchButton from "@/components/posts/postViewModeSwitchButton";
import PostMap from "@/components/posts/postMap";
import PostList from "@/components/posts/postList";

const PostsPage = () => {
    const { viewMode } = usePostViewModeStore();

    return (
        <>
            <CategoryNavigation />
            {(() => {
                switch (viewMode) {
                    case "MAP":
                        return <PostMap />;

                    case "LIST":
                        return <PostList />;
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
