import ReactSelect, { components } from "react-select";

const OptionItem = ({ ...props }) => {
  return (
    <components.Option {...props}>
      <div className="flex items-center justify-between">
        {props.data.icon && <img src={props.data.icon} className={"mr-2"} />}
        <span className={props?.selectProps?.labelClass || ""}>
          {props.data.label}
        </span>
        {props.data.comingSoon && (
          <span className="text-[8px] self-end text-blue animate-pulse">
            Coming Soon
          </span>
        )}
      </div>
    </components.Option>
  );
};

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg
        width="12"
        height="7"
        viewBox="0 0 12 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 4.66688L10.0003 0.666562C10.3684 0.29843 10.9653 0.29843 11.3334 0.666562C11.7016 1.03469 11.7016 1.63155 11.3334 1.99969L6.70711 6.62602C6.31658 7.01654 5.68342 7.01654 5.29289 6.62602L0.666562 1.99968C0.29843 1.63155 0.298429 1.03469 0.666561 0.666561C1.03469 0.298429 1.63155 0.298429 1.99969 0.666561L6 4.66688Z"
          fill="white"
          fill-opacity="0.65"
        />
      </svg>
    </components.DropdownIndicator>
  );
};

const Select = ({ placeholder = "Select...", ...props }) => {
  const defaultStyles = {
    valueContainer: (styles: any) => ({
      ...styles,
      paddingLeft: "20px",
      paddingRight: "20px",
    }),
    control: (styles: any) => ({
      ...styles,
      height: props.height || 40,
      background: "#262728",
      border: props.border || "none",
      borderRadius: props.borderRadius || 20,
      minWidth: 160,
      maxWidth: 160,
      width: "100%",
    }),
    input: (styles: any) => ({
      ...styles,
      color: "rgba(255, 255, 255, 0.65)",
      fontSize: "14px",
    }),
    placeholder: (styles: any) => ({
      ...styles,
      color: "#ffffff",
      fontSize: "14px",
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: "#ffffff",
      fontSize: "14px",
    }),
    menu: (styles: any) => ({
      ...styles,
      zIndex: 10,
      minWidth: props.menuMinWidth || null,
      background: "#363738",
      overflow: "hidden",
      borderColor: "#6A6A6A",
      padding: "0px !important",
      boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.45)",
    }),
    menuList: (styles: any) => ({
      ...styles,
      padding: "0",
    }),
    option: (styles: any, state: any) => ({
      ...styles,
      color: "#ffffff",
      fontSize: "12px",
      background: state.isSelected
        ? "#3F99FF"
        : state.isFocused
        ? "#262728"
        : "transparent",
      padding: "6px 15px",
      borderBottom: "1px solid #262728",
    }),
  };

  const {
    isError,
    customStyles = {},
    components = {},
    Option = OptionItem,
    ...rest
  } = props;
  const _customStyles = Object.assign(defaultStyles, customStyles);
  return (
    <ReactSelect
      classNamePrefix="react-select"
      styles={_customStyles}
      placeholder={placeholder}
      components={{ DropdownIndicator, Option, ...components }}
      {...rest}
    />
  );
};

export default Select;
