import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from "react-icons/io";
import * as CgIcons from "react-icons/cg";
import * as GiIcons from 'react-icons/gi'

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
    icon:<AiIcons.AiOutlineUserAdd/>,
    cName:'nav-text'
},
{
    title:'Tabela Clientes',
    path:'/TabelaCliente',
    icon:<CgIcons.CgUserList/>,
    cName:'nav-text'
},
{
    title:'Cadastro Veterinaria',
    path:'/CadastroVet',
    icon:<IoIcons.IoIosPaper/>,
    cName:'nav-text'
},
{
    title:'Tabela Veterinario',
    path:'/TabelaVet',
    icon:<CgIcons.CgUserList/>,
    cName:'nav-text'
},
{
    title:'Cadastro Secretaria',
    path:'/CadastroSec',
    icon:<IoIcons.IoIosPaper/>,
    cName:'nav-text'
},
{
    title:'Tabela Secretaria',
    path:'/TabelaSec',
    icon:<CgIcons.CgUserList/>,
    cName:'nav-text'
},
{
    title:'Fila',
    path:'/Fila',
    icon:<GiIcons.GiPlayerNext/>,
    cName:'nav-text'
},
]

