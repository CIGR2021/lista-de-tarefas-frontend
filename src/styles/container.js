import BgImage from '../images/fundo.png';

const styles = {
    boxShadow: 10,
    backgroundImage: `url(${BgImage})`,
    backgroundRepeat: 'no-repeat',
    color: 'text.primary',
    p: 2,
    gap: 2,
    minWidth: (theme) => theme.spacing(100),
    borderRadius: '1%'
}

export default styles;