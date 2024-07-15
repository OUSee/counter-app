import styles from "./styles.module.css"




export const UserIcon = ({ height = "1em", width = "1em", color = "#393939" }: iIcon) => {

    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35 37.9166C39.8325 37.9166 43.75 33.9991 43.75 29.1666C43.75 24.3341 39.8325 20.4166 35 20.4166C30.1675 20.4166 26.25 24.3341 26.25 29.1666C26.25 33.9991 30.1675 37.9166 35 37.9166Z" stroke={ color} stroke-linecap="round"/>
            <path d="M35 61.25C49.4975 61.25 61.25 49.4975 61.25 35C61.25 20.5025 49.4975 8.75 35 8.75C20.5025 8.75 8.75 20.5025 8.75 35C8.75 49.4975 20.5025 61.25 35 61.25Z" stroke={ color}/>
            <path d="M52.5 54.5589C51.4678 51.4579 49.1931 48.718 46.0291 46.7635C42.8651 44.8093 38.9883 43.75 35 43.75C31.0118 43.75 27.1349 44.8093 23.9709 46.7635C20.8068 48.718 18.5322 51.4579 17.5 54.5589" stroke={ color} stroke-linecap="round"/>
        </svg>
    )
}