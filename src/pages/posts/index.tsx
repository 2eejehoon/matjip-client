import { ReactElement, useState } from "react";
import BaseLayout from "@/layouts/baseLayout";
import PostsNavigation from "@/components/posts/postsNavigation";

const PostsPage = () => {
    const [mode, setMode] = useState<"MAP" | "LIST">("LIST");
    return (
        <>
            <PostsNavigation />
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
};

PostsPage.getLayout = (page: ReactElement) => {
    return <BaseLayout>{page}</BaseLayout>;
};

export default PostsPage;
