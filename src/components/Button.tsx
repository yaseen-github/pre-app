const Button = ({text="submit"}) => {
    if(!text){
        text = 'submit';
    }
    return <button>{text}</button>;
}

export default Button