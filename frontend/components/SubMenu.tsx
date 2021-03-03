// import React from 'react'
// import { NavItem } from 'react-bootstrap'
// import Link from 'next/link'
// import styled from 'styled-components'

// function SubMenu({ item }: any) {
//     const SidebarLink = styled(Link)`
//     display: flex;
//     color: #ele9fc;
//     justify-content: space-between;
//     align-items: center;
//     padding: 20px;
//     list-style: none;
//     height: 60px;
//     text-decoration: none;

//     &:hover {
//         background: #252831;
//         border-left: 4px solid #632ce4;
//         cursor: pointer;
//     }
//     `;

//     const SidebarLabel = styled.span`
//     margin-left: 16px;
//     `;

//     return (
//         <>
//            <SidebarLink href={item.path} >
//                <div>
//                     {item.icon}
//                     <SidebarLabel>
//                         {item.title}
//                     </SidebarLabel>
//                </div>
//                <div>
//                    {item.subNav && subNav ? item.iconOpened : item.subNav ? item.iconClosed : null}
//                </div>

//            </SidebarLink>
//         </>
//     )
// }

// export default SubMenu
