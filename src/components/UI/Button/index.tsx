import {FC} from "react";

type Props = {
    onClick: () => void
    text: string
}

const Button: FC<Props> = ({onClick, text}) => {
    return (
        <button className="button" onClick={onClick}>{text}</button>
    )
}

export default Button
