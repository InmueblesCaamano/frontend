/* eslint-disable react/prop-types */
import logo from '/img/logo.png';
const LogoRounded = ({width,height}) => {
    return (
        <div className="logoRounded" style={{width,height}}>
            <img src={logo} width={width} height={height} alt="" />
        </div>
    )
}
export default LogoRounded