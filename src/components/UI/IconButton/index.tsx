import {FC} from "react";

type Props = {
    onClick: () => void
    image: string
}

const IconButton: FC<Props> = ({onClick, image}) => {
    return <img src={image} alt={image} onClick={onClick} className="icon-button"/>
}

export default IconButton
