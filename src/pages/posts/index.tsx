import { ReactElement } from "react";
import BaseLayout from "@/layouts/baseLayout";
import PostsNavigation from "@/components/posts/postsNavigation";
import usePostVideModeStore from "@/zustand/PostViewMode";
import PostVideModeSwitchButton from "@/components/posts/PostViewModeSwitchButton";

const PostsPage = () => {
    const { viewMode } = usePostVideModeStore();

    return (
        <>
            <PostsNavigation />
            {(() => {
                switch (viewMode) {
                    case "MAP":
                        return <></>;

                    case "LIST":
                        return (
                            <>
                                <div style={{ height: "50px", backgroundColor: "red" }}></div>
                                <div style={{ height: "50px", backgroundColor: "red" }}></div>
                                <div style={{ height: "50px", backgroundColor: "red" }}></div>
                                <div style={{ height: "50px", backgroundColor: "red" }}></div>
                                <div style={{ height: "50px", backgroundColor: "red" }}></div>
                                <div style={{ height: "50px", backgroundColor: "red" }}></div>
                                <div style={{ height: "50px", backgroundColor: "red" }}></div>
                                <div style={{ height: "50px", backgroundColor: "red" }}></div>
                                <div style={{ height: "50px", backgroundColor: "red" }}></div>
                                <div style={{ height: "50px", backgroundColor: "red" }}></div>
                                <div style={{ height: "50px", backgroundColor: "red" }}></div>
                                <div style={{ height: "50px", backgroundColor: "red" }}></div>
                                <div style={{ height: "50px", backgroundColor: "red" }}></div>
                                <div style={{ height: "50px", backgroundColor: "red" }}></div>
                                <div style={{ height: "50px", backgroundColor: "red" }}></div>
                                <div style={{ height: "50px", backgroundColor: "red" }}></div>
                                <div style={{ height: "50px", backgroundColor: "red" }}></div>
                                <div style={{ height: "50px", backgroundColor: "red" }}></div>
                            </>
                        );
                }
            })()}
            <PostVideModeSwitchButton />
        </>
    );
};

PostsPage.getLayout = (page: ReactElement) => {
    return <BaseLayout>{page}</BaseLayout>;
};

export default PostsPage;
