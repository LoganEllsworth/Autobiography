import React, { useState, useEffect } from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Fab } from "@mui/material";

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            {showTopBtn && (
                <Fab
                    size="large"
                    style={{
                        position: "fixed",
                        bottom: 12,
                        right: 12,
                    }}
                >
                    <ExpandLessIcon onClick={goToTop} />
                </Fab>
            )}
        </div>
    );
};
export default ScrollToTop;