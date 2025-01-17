import styles from "./styles.module.css"

interface IMinusIcon{
    width?: string;
    height?: string;
}

export const MinusIcon = ({ width = `18`, height = `18`}: IMinusIcon) => {
    return (
        <svg className={styles.svg}  width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path  fill-rule="evenodd" clip-rule="evenodd" d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM4 10H14V8H4V10Z" fill="#343d3f"/>
        </svg>
    )
}
