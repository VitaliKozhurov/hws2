import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                // стили для слайдера // пишет студент
                color: "#00CC22",
                width: "150px",
                margin: "0px 20px 0px 10px",

                "& .MuiSlider-thumb": {
                    backgroundColor: "#fff",
                    border: "1px solid currentColor",
                    width: "18px",
                    height: "18px",
                    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
                        boxShadow: "0 0 0 5px rgba(58, 133, 137, 0.16)",
                    },
                    "&:before": {
                        content: "''",
                        width: "6px",
                        height: "6px",
                        backgroundColor: "#00CC22",
                        boxShadow: "none",
                    },
                },
                "& .MuiSlider-rail": {
                    color: "#8B8B8B",
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    );
};

export default SuperRange;
