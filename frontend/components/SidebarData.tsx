import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as GiIcons from 'react-icons/gi'

export const SidebarData = [
    {
        title: 'Home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
        path: '/admin',
    },
    {
        title: 'Students',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
        path: '/admin/students',
    },
    {
        title: 'Meal Choices',
        icon: <GiIcons.GiMeal />,
        cName: 'nav-text',
        path: '/admin/students/meals',
    },
    {
        title: 'Meals',
        icon: <GiIcons.GiMeal />,
        cName: 'nav-text',
        path: '/admin/meals'
    }
]