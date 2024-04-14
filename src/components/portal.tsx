import { useState, useEffect, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

type PortalProps = PropsWithChildren & {};

const Portal = ({ children }: PortalProps) => {
    const [mount, setMount] = useState(false);

    const portal = typeof window && mount && document.getElementById("portal");

    useEffect(() => {
        setMount(true);
    }, []);

    if (!mount) {
        return null;
    }

    return <>{portal && createPortal(children, portal)}</>;
};

export default Portal;
