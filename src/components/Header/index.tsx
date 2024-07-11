import IconButton from "../UI/IconButton";
import telegram from '../../assets/telegram.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';
import Button from "../UI/Button";
import {FC} from "react";

interface Links {
    [key: string]: string
}

enum SocialLinks {
    twitter,
    instagram,
    telegram
}

const links: Links = {
    [SocialLinks.twitter]: 'https://twitter.com/?lang=en',
    [SocialLinks.instagram]: 'https://www.instagram.com/',
    [SocialLinks.telegram]: 'https://web.telegram.org/'
}

type Props = {
    handleScroll: () => void
}

const Header: FC<Props> = ({handleScroll}) => {

    const handleClick = (to: SocialLinks) => {
        window.open(links[to], "_blank")
    }

    return (
        <header className="header">
            <div className="social">
                <IconButton onClick={() => handleClick(SocialLinks.telegram)} image={telegram} />
                <IconButton onClick={() => handleClick(SocialLinks.twitter)} image={twitter} />
                <IconButton onClick={() => handleClick(SocialLinks.instagram)} image={instagram} />
            </div>
            <div>
                <Button onClick={handleScroll} text="MENG LABORATORY" />
            </div>
        </header>
    )
}

export default Header
