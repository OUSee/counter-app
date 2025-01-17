import styles from "./styles.module.css"


interface IPlusIcon{
    width?: string;
    height?: string;
}

export const PlusIcon = ({ width = `18`, height = `18`}: IPlusIcon) => {
    return (
        <svg className={styles.svg} width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM10 10V14H8V10H4V8H8V4H10V8H14V10H10Z" fill="#343d3f"/>
        </svg>
    )
}