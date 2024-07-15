import styles from "./styles.module.css"




export const CloseIcon = ({ height = "1em", width = "1em", color = "#393939" }: iIcon) => {

    return (
        <svg width={width} height={height} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 30.625C24.7487 30.625 30.625 24.7487 30.625 17.5C30.625 10.2513 24.7487 4.375 17.5 4.375C10.2513 4.375 4.375 10.2513 4.375 17.5C4.375 24.7487 10.2513 30.625 17.5 30.625Z" stroke={color}/>
            <path d="M13.1251 21.8746L21.8751 13.1245" stroke={color}/>
            <path d="M21.875 21.875L13.125 13.125" stroke={color}/>
        </svg>

    )
}