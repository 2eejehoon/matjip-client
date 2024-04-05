import { ReactElement, useState } from "react";
import BaseLayout from "@/layouts/baseLayout";

const PostsPage = () => {
    const [mode, setMode] = useState<"MAP" | "LIST">("LIST");
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
};

PostsPage.getLayout = (page: ReactElement) => {
    return <BaseLayout>{page}</BaseLayout>;
};

export default PostsPage;
