/** @paper-design/shaders-react@0.0.71 */
import { LiquidMetal } from "@paper-design/shaders-react";

/**
 * from Paper
 * https://app.paper.design/file/01KJCK96WS65SBGQT5D61JD6RJ?page=01K4GP58P8JRM8PGBP0586VKYV&node=8S-0
 * on Feb 26, 2026
 */
export default function () {
    return (
        <div
            style={{
                boxSizing: "border-box",
                fontSynthesis: "none",
                MozOsxFontSmoothing: "grayscale",
                WebkitFontSmoothing: "antialiased",
                position: "relative",
                width: "100vw",
                height: "100vh",
                backgroundColor: "#000000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
            }}
        >
            {/* Content wrapper */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "60px",
                    maxWidth: "1200px",
                    width: "100%",
                    padding: "40px",
                    justifyContent: "center",
                    flexWrap: "wrap",
                }}
            >
                {/* Icon Container (z-index 10 to stay above overlay) */}
                <div
                    style={{ position: "relative", zIndex: 10, flexShrink: 0 }}
                >
                    <LiquidMetal
                        speed={1}
                        softness={0.1}
                        repetition={2}
                        shiftRed={0.3}
                        shiftBlue={0.3}
                        distortion={0.07}
                        contour={0.4}
                        scale={0.6}
                        rotation={0}
                        shape="diamond"
                        angle={70}
                        image="https://workers.paper.design/file-assets/01KJCK96WS65SBGQT5D61JD6RJ/01KJCN32T0716MHT8GAHBAJ0ZZ.svg"
                        frame={888008.7000000121}
                        colorBack="#00000000"
                        colorTint="#FFFFFF"
                        style={{
                            width: "390px",
                            height: "358px",
                            backgroundColor: "#AAAAAC00",
                        }}
                    />
                </div>

                {/* Text Container (z-index 1 to stay below overlay) */}
                <div
                    style={{
                        position: "relative",
                        zIndex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: "0px",
                    }}
                >
                    <div
                        style={{
                            boxSizing: "border-box",
                            color: "#FFFFFF",
                            fontFamily:
                                '"Darker Grotesque", system-ui, sans-serif',
                            fontSize: "106px",
                            fontWeight: 800,
                            lineHeight: "128px",
                        }}
                    >
                        NIYA METAL
                    </div>
                    <div
                        style={{
                            boxSizing: "border-box",
                            color: "#FFFFFF",
                            fontFamily:
                                '"Darker Grotesque", system-ui, sans-serif',
                            fontSize: "45px",
                            fontWeight: 800,
                            lineHeight: "54px",
                        }}
                    >
                        Industry leader since ages.
                    </div>
                </div>
            </div>

            {/* Multiply Blend Layer */}
            <LiquidMetal
                speed={1}
                softness={0.1}
                repetition={1}
                shiftRed={0.13}
                shiftBlue={0.14}
                distortion={0.07}
                contour={0.82}
                scale={0.71}
                rotation={0}
                shape="none"
                angle={200}
                frame={1363289.7360000284}
                colorBack="#00000000"
                colorTint="#FFFFFF"
                style={{
                    backgroundColor: "#AAAAAC00",
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    mixBlendMode: "multiply",
                    zIndex: 5,
                    pointerEvents: "none",
                }}
            />
        </div>
    );
}
