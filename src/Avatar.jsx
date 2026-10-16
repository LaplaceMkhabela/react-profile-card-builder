import './Styles.css'

export function Avatar({image}) {
    return (
        <picture>
            <source srcSet={image.webp} type="image/webp"/>
            <img
                src={image.image}
                alt={image.alt}
                width={120}
                height={120}
                decoding="async"
                className="profile-avatar"
            />
        </picture>
    );
}
