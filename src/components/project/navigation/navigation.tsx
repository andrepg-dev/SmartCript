'use client';

import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { ListItem } from './list-item';

const components: {
  title: string;
  href: string;
  description: string;
  icon?: string;
}[] = [
    {
      title: 'Blog',
      href: '#',
      description:
        'Lee las últimas noticias sobre IA y educación.',
      icon: '📝',
    },
    {
      title: '¿Que hay de nuevo?',
      href: '#',
      description:
        'Descubre las últimas actualizaciones de la plataforma.',
      icon: '✨',
    },
    {
      title: 'Ayuda',
      href: '#',
      description:
        '¿Tienes dudas? Consulta nuestra sección de ayuda.',
      icon: '❓',
    },
  ];

const navigationItems = [
  {
    title: 'Resumidor de Youtube',
    href: '/dashboard',
    description: 'Obtén transcripciones y resúmenes de videos de YouTube.',
    icon: '🎥',
  },
  {
    title: 'Resumir PDFs',
    href: '/dashboard',
    description: 'Extrae los puntos clave de tus documentos PDF.',
    icon: '📄',
  },
  {
    title: 'Resumir Archivos DOCX',
    href: '/dashboard',
    description:
      'Analiza y resume tus documentos Word rápidamente.',
    icon: '📄',
  },
  {
    title: 'Resumir Archivos TXT',
    href: '/dashboard',
    description:
      'Convierte textos largos en resúmenes concisos.',
    icon: '📄',
  },
];

export function Navigation() {
  return (
    <NavigationMenu className='text-muted-foreground z-[3000]'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Caracteristicas</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-auto lg:grid-cols-[.75fr_1fr] z-[3000]">
              {navigationItems.map((item) => (
                <ListItem href={item.href} key={item.title} title={item.title} icon={item.icon}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Recursos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-auto lg:grid-cols-[.75fr_1fr]">
              {components.map((item) => (
                <ListItem href={item.href} key={item.title} title={item.title} icon={item.icon}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pricing" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Precios
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
