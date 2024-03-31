import NavLayout from "@/layouts/navLayout";
import { ReactElement } from "react";

const PostsPage = () => {
    return <></>;
};

PostsPage.getLayout = (page: ReactElement) => {
    return <NavLayout>{page}</NavLayout>;
};

export default PostsPage;
