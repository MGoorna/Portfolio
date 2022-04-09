import styles from './Button.module.scss'

const STYLES = [
"btn--primary--solid",
"btn--warning--solid",
"btn--danger--solid",
"btn--success--solid",
"btn--primary--outline",
"btn--warning--outline",
"btn--danger--outline",
"btn--success--outline",
]

const SIZE = [
    "btn__small",
    "btn__medium",
    "btn__large"
]
const DEFAULT = [
    {"SIZE" : "btn__medium"},
    {"STYLES" : "btn__primary__solid"},
]
const Button = ({ children, type, onClick, buttonStyle, buttonSize, disabled }) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) 
        ? styles[buttonStyle]
        : styles[STYLES[0]];
    const checkButtonSize = SIZE.includes(buttonSize)
        ? styles[buttonSize]   
        : styles[SIZE[0]];

    return ( 
    <button
    className={`${styles.btn}  
        ${styles[buttonStyle] || styles.btn__primary__solid } 
        ${styles[buttonSize] || styles.btn__medium }`}
        onClick={onClick}
        type={type}
        disabled={disabled}
        >
        { children }
    </button> );
}
 
Button.defaultProps = {
    buttonStyle: "btn__primary__solid",
    buttonSize: "btn__medium"   
}
export default Button;