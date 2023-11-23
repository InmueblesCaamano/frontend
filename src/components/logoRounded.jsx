/* eslint-disable react/prop-types */
const LogoRounded = ({width,height}) => {
    return (
        <div className="logoRounded" style={{width,height}}>
            <img src="./img/logo.png" width={width} height={height} alt="" />
        </div>
    )
}
export default LogoRounded