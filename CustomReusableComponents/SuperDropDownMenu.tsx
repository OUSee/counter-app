import React from `react`
import styles from `./styles.module.css`

interface IDropDownProps{
    button: React.ReactNode;
    children: React.ReactNode;
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}   

const noop = () => { }

export const DropDown = ({button, children, isOpen, onOpen = noop, onClose = noop}: IDropDownProps) => {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);

    React.useEffect(() => {
        setIsDropdownOpen(isOpen)
    }, [isOpen])
    
    React.useEffect(() => { isDropdownOpen ? onOpen() : onClose()  }, [isDropdownOpen])
    React.useEffect(()=>{},[])


    const handleOpen = () => {
        if (isOpen === undefined) {
            setIsDropdownOpen(!isDropdownOpen)
        }
    }

    return (
        <div className={styles.container}>
            <div onClick={() => handleOpen}>
                { button }
            </div>
            {isDropdownOpen && (
                <div className={styles.listContainer}>
                    <div className={styles.list} onClick={()=>{setIsDropdownOpen(false)}}>
                        {children}
                    </div>
                </div>
            )}
        </div>  
    )
}


// use as
//        <DropDown
//            button = {<button> Click Me</button>}
//        >
//            <ul><li>1</li></ul>
//        </DropDown>