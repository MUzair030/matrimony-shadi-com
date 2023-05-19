/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import "./BaseComonents.css"
import { Button } from "react-bootstrap"
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';


export const Paragraph = ({ text1, text2, textSeparator, icon, className, style }) => {


    return (
        <div className={`shadi_paragraph ${className}`} style={style}>
            {
                <div className="shadi_paragraph_icon">
                    {icon}
                </div>
            }
            <div className={`shadi_paragraph_text_box`}>
                <span className='shadi_paragraph_text_a'>{text1}</span>
                {
                    textSeparator && <span className="shadi_paragraph_text_separator me-1">{textSeparator}</span>
                }
                {
                    text2 && text1 && !textSeparator && <span className="shadi_paragraph_text_separator me-1">{","}</span>
                }
                {
                    text2 && <span className='shadi_paragraph_text_b'>{text2}</span>
                }
            </div>
        </div>
    )
}


















