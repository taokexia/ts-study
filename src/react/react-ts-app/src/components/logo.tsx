import { ReactNode } from "react";
import React from "react";

interface IProps {
    /** 
     * logo的地址
     */
    logo?: string
    className?: string
    alt?: string
    children?: ReactNode
}

export const Logo: React.SFC<IProps> = props => {
    const { logo, className, alt} = props
    return (
        <img src={logo} className={className} alt={alt}></img>
    )
}