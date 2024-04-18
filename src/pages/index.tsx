import { ReactElement } from "react";
import BaseLayout from "@/layouts/baseLayout";
import BottomSheet, { useBottomSheetContext } from "@/components/bottomSheet";

const HomePage = () => {
    const { toggle } = useBottomSheetContext();

    return (
        <>
            <button onClick={toggle}>토글 버튼</button>
            <BottomSheet renderHeader={() => <div style={{ backgroundColor: "orange" }}>나는 헤더야</div>}>
                <div style={{ height: "700px", backgroundColor: "pink" }}>나는 컨텐츠야</div>
            </BottomSheet>
        </>
    );
};

HomePage.getLayout = (page: ReactElement) => {
    return <BaseLayout>{page}</BaseLayout>;
};

export default HomePage;
