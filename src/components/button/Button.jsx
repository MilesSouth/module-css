import ButonStyle from "./Button.module.css"

const Button = ({ btnText }) => {
  return (
    <>
      <button className={ButonStyle["button-text"]}>{btnText}</button>
      <button className={ButonStyle.button}>{btnText}</button>
    </>
  )
}

export default Button
