const WhatsappButton = () => {
    return (
        <a href='#' onClick={() => window.open('https://wa.me/04248261631', '_blank')} className='ws-button'>
            <img className='ws-img-btn' src='./img/logo-ws.svg' width={50} height={50} alt='ws' />
        </a>
    )
}
export default WhatsappButton