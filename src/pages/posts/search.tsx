import BaseLayout from "@/layouts/baseLayout";
import { ReactElement } from "react";

const PostSearchPage = () => {
    return <>post search</>;
};

PostSearchPage.getLayout = (page: ReactElement) => {
    return <BaseLayout>{page}</BaseLayout>;
};

export default PostSearchPage;
