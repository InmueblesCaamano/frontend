import ws from '../../public/img/logo-ws.svg';
const WhatsappButton = () => {
    return (
        <a href='#' onClick={() => window.open('https://wa.me/04248261631', '_blank')} className='ws-button'>
            <img className='ws-img-btn' src={ws} width={50} height={50} alt='ws' />
        </a>
    )
}
export default WhatsappButton