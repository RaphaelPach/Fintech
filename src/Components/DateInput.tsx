import React from 'react';

const generalStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "var(--color-2)",
  padding: "var(--gap-s) .75rem",
  backgroundColor: "var(--color-4)",
  borderRadius: "var(--gap)",
};

const LabelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-s)",
  fontWeight: "600",
  ...generalStyle
}

const InputStyle: React.CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  ...generalStyle,

}

type IDate = React.ComponentProps<"input"> & {
  label: string;
}


const DateInput = ({ label, ...props }: IDate) => {
  return (
    <div>
      <label style={ LabelStyle } htmlFor={ label }>{ label }</label>
      <input style={InputStyle} id={ label } name={ label }type="date" {...props} />
    </div>
  )
}

export default DateInput