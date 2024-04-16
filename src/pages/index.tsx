import { ReactElement, useState } from "react";
import BaseLayout from "@/layouts/baseLayout";
import BottomSheet from "@/components/bottomSheet";

const HomePage = () => {
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsBottomSheetOpen((prev) => !prev)}>123</button>
            <BottomSheet isOpen={isBottomSheetOpen}>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
            </BottomSheet>
        </>
    );
};

HomePage.getLayout = (page: ReactElement) => {
    return <BaseLayout>{page}</BaseLayout>;
};

export default HomePage;
