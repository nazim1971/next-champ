import Navbar from "@/components/shared/Navbar";
import { ReactNode } from "react";


interface ICommonLayout {
    children: ReactNode
}

const CommonLayout = ({children}:ICommonLayout) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
};

export default CommonLayout;