

const LeftArrow = ({ color = "#F9F6ED", height = "17", width = "9" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 9 17" fill="none">
        <path d="M7.65729 0.3255C7.73561 2.61333 5.44864 5.97053 1 8.5C5.44864 11.0295 7.73561 14.3867 7.65729 16.6745" stroke={color} stroke-linejoin="round" />
    </svg>
)

const RightArrow = ({ color = "#F9F6ED", height = "17", width = "9" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 9 17" fill="none">
        <path d="M0.97943 0.325439C0.901109 2.61327 3.18808 5.97047 7.63672 8.49993C3.18808 11.0294 0.901108 14.3866 0.979429 16.6744" stroke={color} stroke-linejoin="round" />
    </svg>
)

const DownArrow = ({ color = "#262E2F", height = "7.5", width = "15" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 18 10" fill="none">
        <path opacity="0.7" d="M16.5 1.5L9 9L1.5 1.5" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
)


export { LeftArrow, RightArrow, DownArrow }