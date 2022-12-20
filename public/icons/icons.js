const LeftArrow = ({ color = "#F9F6ED", height = "17", width = "9" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 9 17"
    fill="none"
  >
    <path
      d="M7.65729 0.3255C7.73561 2.61333 5.44864 5.97053 1 8.5C5.44864 11.0295 7.73561 14.3867 7.65729 16.6745"
      stroke={color}
      stroke-linejoin="round"
    />
  </svg>
);

const RightArrow = ({ color = "#F9F6ED", height = "17", width = "9" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 9 17"
    fill="none"
  >
    <path
      d="M0.97943 0.325439C0.901109 2.61327 3.18808 5.97047 7.63672 8.49993C3.18808 11.0294 0.901108 14.3866 0.979429 16.6744"
      stroke={color}
      stroke-linejoin="round"
    />
  </svg>
);

const DownArrow = ({ color = "#262E2F", height = "7.5", width = "15" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 18 10"
    fill="none"
  >
    <path
      opacity="0.7"
      d="M16.5 1.5L9 9L1.5 1.5"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const WarningOctagon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  >
    <path
      d="M10.0664 6.25V10.625"
      stroke="#9F5454"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.918 2.5H7.21485C7.13369 2.49972 7.05327 2.51544 6.9782 2.54628C6.90313 2.57711 6.83488 2.62245 6.77735 2.67969L2.7461 6.71094C2.68885 6.76847 2.64352 6.83672 2.61268 6.9118C2.58185 6.98687 2.56613 7.06728 2.56641 7.14844V12.8516C2.56613 12.9327 2.58185 13.0131 2.61268 13.0882C2.64352 13.1633 2.68885 13.2315 2.7461 13.2891L6.77735 17.3203C6.83488 17.3776 6.90313 17.4229 6.9782 17.4537C7.05327 17.4846 7.13369 17.5003 7.21485 17.5H12.918C12.9991 17.5003 13.0795 17.4846 13.1546 17.4537C13.2297 17.4229 13.2979 17.3776 13.3555 17.3203L17.3867 13.2891C17.444 13.2315 17.4893 13.1633 17.5201 13.0882C17.551 13.0131 17.5667 12.9327 17.5664 12.8516V7.14844C17.5667 7.06728 17.551 6.98687 17.5201 6.9118C17.4893 6.83672 17.444 6.76847 17.3867 6.71094L13.3555 2.67969C13.2979 2.62245 13.2297 2.57711 13.1546 2.54628C13.0795 2.51544 12.9991 2.49972 12.918 2.5V2.5Z"
      stroke="#9F5454"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.0664 14.0625C10.4116 14.0625 10.6914 13.7827 10.6914 13.4375C10.6914 13.0923 10.4116 12.8125 10.0664 12.8125C9.72123 12.8125 9.44141 13.0923 9.44141 13.4375C9.44141 13.7827 9.72123 14.0625 10.0664 14.0625Z"
      fill="#9F5454"
    />
  </svg>
);

export { LeftArrow, RightArrow, DownArrow, WarningOctagon };
