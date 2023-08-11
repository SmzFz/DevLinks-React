import "./social-links.module.css";

const SocialLinks = ({icon, href}) => {
    return(
<a href={href} targe="_blank">
    <ion-icon name={icon} />
</a>
 
    )
}

export default SocialLinks;