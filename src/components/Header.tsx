import React from 'react';
import { Button } from '@mantine/core';
import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { Sun, MoonStars } from 'tabler-icons-react';
import LogoHeader from './../assets/LogoHeader.svg';
import '../styles/Header.css';

import Resume from './../assets/resume.pdf';

export default function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  return (
    <header className="header">
      <img src={LogoHeader} alt="arturholiv-logo" className="logo-header"/>

      <nav>
        <a href="#home" className={ dark ? 'dark link' : 'menu link'} >
          Home
        </a>
        <a href="#about" className={ dark ? 'dark link' : 'menu link'}>
          Sobre mim
        </a>

        <a href="#skills" className={ dark ? 'dark link' : 'menu link'}>
          Minhas habilidades
        </a>

        <a href="#projetos" className={ dark ? 'dark link' : 'menu link'}>
          Meus projetos
        </a>
        <a href="#contato" className={ dark ? 'dark link' : 'menu link'}>
          Contato
        </a>
      </nav>
      <Button >
        <a href={Resume} download className='button'>Download CV</a>
      </Button>
      <ActionIcon
        variant="outline"
        color={dark ? 'yellow' : 'blue'}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
      >
        {dark ? <Sun size={18} /> : <MoonStars size={18} />}
      </ActionIcon>
    </header>
  );
}
