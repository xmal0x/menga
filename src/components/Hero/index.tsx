import logo from '../../assets/logo.png'
import Button from "../UI/Button";
import monkey from '../../assets/monkey.png'
import leaf from '../../assets/leaf.png'
import leafBg from '../../assets/leaf-bg.png'
import hands from '../../assets/monkeyHands.png'
import bybit from '../../assets/partners/bybit.png'
import okx from '../../assets/partners/okx.png'
import raydium from '../../assets/partners/raydium.png'

const TextContent = () => (
    <div className="text">
        <p>HI, I'M $MENG!</p>
        <p>INSPIRED BY AH MENG, HERE TO BRING SMILES AND SWAY INTO YOUR HEARTS!</p>
        <p>I AM JUST A SWINGIN' ORANGUTAN!</p>
    </div>
)

const MonkeyContent = () => (
    <>
        <img src={monkey} alt="monkey" className="monkey"/>
        <img src={hands} alt="hands" className="monkey-hands"/>
        <img src={leafBg} alt="leafBg" className="leaf-bg"/>
        <img src={leaf} alt="leaf" className="leaf"/>
    </>
)

const PartnersContent = () => (
    <div className="our-partners">
        <p>OUR PARTNERS</p>
        <div className="partners-icons">
            <img src={okx} alt="okx" style={{maxWidth: '140px'}}/>
            <img src={bybit} alt="bybit" style={{maxWidth: '150px'}} />
            <img src={raydium} alt="raydium"  style={{maxWidth: '170px'}}/>
        </div>
    </div>
)

const Hero = () => {

    const handleClick = () => {
        console.log('Clock 2')
    }

    return (
        <div className="hero">
            <img src={logo} alt="logo" className="logo" style={{maxWidth: '960px'}}/>
            <TextContent />
            <Button onClick={handleClick} text="JOIN COMMUNITY"/>
            <MonkeyContent />
            <PartnersContent />
        </div>
    )
}

export default Hero
