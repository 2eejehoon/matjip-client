import BaseLayout from "@/layouts/baseLayout";
import { ReactElement } from "react";

const PostCreatePage = () => {
    return <>post create</>;
};

PostCreatePage.getLayout = (page: ReactElement) => {
    return <BaseLayout>{page}</BaseLayout>;
};

export default PostCreatePage;
