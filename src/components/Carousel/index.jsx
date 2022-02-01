import React from "react";
import "./style.scss";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function useTilt(active) {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (!ref.current || !active) {
            return;
        }

        const state = {
            rect: undefined,
            mouseX: undefined,
            mouseY: undefined,
        };

        let el = ref.current;

        const handleMouseMove = (e) => {
            if (!el) {
                return;
            }
            if (!state.rect) {
                state.rect = el.getBoundingClientRect();
            }
            state.mouseX = e.clientX;
            state.mouseY = e.clientY;
            const px = (state.mouseX - state.rect.left) / state.rect.width;
            const py = (state.mouseY - state.rect.top) / state.rect.height;

            el.style.setProperty("--px", px);
            el.style.setProperty("--py", py);
        };

        el.addEventListener("mousemove", handleMouseMove);

        return () => {
            el.removeEventListener("mousemove", handleMouseMove);
        };
    }, [active]);

    return ref;
}

function Slide({ product, offset }) {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);
    return (
        <div
            ref={ref}
            className="slide"
            data-active={active}
            style={{
                "--offset": offset,
                "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
            }}
        >
            <div
                className="slideContent"
                style={{
                    backgroundImage: `url('${BACKEND_URL}/products/image/${product.image}')`,
                    backgroundSize: "contain",
                    height: "450px",
                }}
            >
                <div className="slideContentInner">
                    <h2 className="slideTitle">{product.name}</h2>
                    <p className="slideDescription">{product.price}</p>
                </div>
            </div>
        </div>
    );
}

export default Slide;
