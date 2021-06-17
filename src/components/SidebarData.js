import React from 'react';
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from "react-icons/io";

export const SidebarData = [
{
    title:'Home',
    path:'/',
    icon:<AiIcons.AiFillHome/>,
    cName:'nav-text'
},
{
    title:'Cadastro Cliente',
    path:'/CadastroCliente',
    icon:<IoIcons.IoIosPaper/>,
    cName:'nav-text'
},
{
    title:'Cadastro Veterinaria',
    path:'/CadastroVet',
    icon:<IoIcons.IoIosPaper/>,
    cName:'nav-text'
},
{
    title:'Cadastro Secretaria',
    path:'/CadastroSec',
    icon:<IoIcons.IoIosPaper/>,
    cName:'nav-text'
},
{
    title:'Fila',
    path:'/Fila',
    icon:<IoIcons.IoIosPaper/>,
    cName:'nav-text'
},
]

