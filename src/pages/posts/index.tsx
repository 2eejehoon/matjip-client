import { ReactElement } from "react";
import NavLayout from "@/layouts/navLayout";

const PostsPage = () => {
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
    return <NavLayout>{page}</NavLayout>;
};

export default PostsPage;
