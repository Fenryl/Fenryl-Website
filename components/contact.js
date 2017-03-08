import React from 'react'

import Link from 'next/link'

import Icon from './icon'

export default () => (
    <div id="contact">
        <ul className="contactList col16">
            <li className="contactItem">
                <a href="mailto:bastien.cailhol@gmail.com">
                    <Icon
                        path={`M12,13L2,6.76V6C2,4.89 2.89,4 4,4H20A2,2 0 0,1 22,6V6.75L12,13M22,18A2,2 0 0,1 20,20H4C2.89,20 2,19.1 2,18V9.11L4,10.36V18H20V10.36L22,9.11V18Z`}
                        size="4em"
                    />
                </a>
                <span>bastien.cailhol@gmail.com</span>
            </li>
            <li className="contactItem">
                <a href="https://www.linkedin.com/in/BastienCailhol/" target="_blank">
                    <Icon
                        path={`M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 
                        15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z`}
                        size="4em"
                    />
                </a>
                <span>linkedin.com/in/BastienCailhol</span>
            </li>
            <li className="contactItem">
                <a href="https://github.com/Fenryl" target="_blank">
                    <Icon
                        path={`M20.38,8.53C20.54,8.13 21.06,6.54 20.21,4.39C20.21,4.39 18.9,4 15.91,6C14.66,5.67 13.33,5.62 
                            12,5.62C10.68,5.62 9.34,5.67 8.09,6C5.1,3.97 3.79,4.39 3.79,4.39C2.94,6.54 3.46,8.13 3.63,8.53C2.61,9.62 
                            2,11 2,12.72C2,19.16 6.16,20.61 12,20.61C17.79,20.61 22,19.16 22,12.72C22,11 21.39,9.62 20.38,8.53M12,19.38C7.88,19.38 
                            4.53,19.19 4.53,15.19C4.53,14.24 5,13.34 5.8,12.61C7.14,11.38 9.43,12.03 12,12.03C14.59,12.03 16.85,11.38 
                            18.2,12.61C19,13.34 19.5,14.23 19.5,15.19C19.5,19.18 16.13,19.38 12,19.38M8.86,13.12C8.04,13.12 7.36,14.12 
                            7.36,15.34C7.36,16.57 8.04,17.58 8.86,17.58C9.69,17.58 10.36,16.58 10.36,15.34C10.36,14.11 9.69,13.12 
                            8.86,13.12M15.14,13.12C14.31,13.12 13.64,14.11 13.64,15.34C13.64,16.58 14.31,17.58 15.14,17.58C15.96,17.58 
                            16.64,16.58 16.64,15.34C16.64,14.11 16,13.12 15.14,13.12Z`}
                        size="4em"
                    />
                </a>
                <span>github.com/Fenryl</span>
            </li>
            <li className="contactItem">
                <a href="https://twitter.com/BastienCailhol" target="_blank">
                    <Icon
                        path={`M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 
                        20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 
                        11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 
                        3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 
                        3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 
                        6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 
                        5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z`}
                        size="4em"
                    />
                </a>
                <span>twitter.com/BastienCailhol</span>
            </li>
        </ul>
        <style jsx>{`
            #contact {
                display: flex;
                justify-content: center;
                background: #f6f6f6;
            }

            .contactList {
                display: flex;
                padding: 20px 0;
                align-items: baseline;
            }

            .contactItem {
                display: flex;
                flex: 1;
                flex-direction: column;
                padding: 20px 0;
                align-items: center;
                border-right: 2px solid #e6e6e6;
            }

            .contactItem:first-child {
                border-left: 2px solid #e6e6e6;
            }

            .contactItem a {
                color: #000;
                text-decoration: none;
            }

            .contactItem a:hover {
                transform: rotate(5deg) scale(1.1);
            }

            .contactItem span {
                color: #888;
            }

            ul {
                padding: 0;
                list-style: none;
            }

            .menu li {
                display: inline-block;
                margin: 0 10px;
                text-transform: uppercase;
            }

            .menu li a {
                color: white;
                text-decoration: none;
            }
        `}</style>
    </div>
)