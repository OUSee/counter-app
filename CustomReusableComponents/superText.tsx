import React from `react`
import styles from `./styles.module.css`
import classNames from `classNames` 

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;
export enum EColors{
    primary = '#1E90FF',
    secondary = `1E90FF`
}

interface IText {
    As?: `span` | `p` | `h1` | `h2` | `h3` | `h4` | `div`;
    children?: React.ReactNode;
    size: TSizes;
    mobileSize?: TSizes;
    tabletSize?: TSizes;
    desktopSize?: TSizes;
    color?: EColors;
}

export const Text = (props: IText) => {

    const { As = `span`, children, size, mobileSize, tabletSize, desktopSize, color = EColors.primary } = props;

    const classes = classNames(
        styles[`s${size}`],
        { [styles[`m${mobileSize}`]]: mobileSize },
        { [styles[`d${desktopSize}`]]: desktopSize },
        { [styles[`t${tabletSize}`]]: tabletSize },
        styles[color]
    )

    return (
        <As className={ classes }>
            { children }
        </As>
    )
}