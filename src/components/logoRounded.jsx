/* eslint-disable react/prop-types */
import logo from '/img/logoTransparent.png';
const LogoRounded = ({ width, height }) => {
    return (
        <div style={{ width, height }}>
            <img src={logo} width={width} height={height - 10} alt="" />
        </div>
    )
}
export default LogoRounded