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
    title: 'Blog Post',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
    icon: '🚨',
  },
  {
    title: '¿Que hay de nuevo?',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
    icon: '🃏',
  },
  {
    title: 'Documentación',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
    icon: '📊',
  },
];

const navigationItems = [
  {
    title: 'Resumidor de Articulos',
    href: '/docs',
    description: 'Resumir articulos grandes en puntos clave',
    icon: '📄',
  },
  {
    title: 'Resumidor de Youtube',
    href: '/docs/installation',
    description: 'How to install dependencies and structure your app.',
    icon: '🎥',
  },
  {
    title: 'Resumir vídeos MP4',
    href: '/docs/primitives/typography',
    description: 'Resumir vídeos largos en puntos clave',
    icon: '📹',
  },
  {
    title: 'Resumir audios MP3',
    href: '/docs/primitives/typography',
    description:
      'Resumir audios largos en puntos clave y transcribirlos a texto',
    icon: '🔊',
  },
  {
    title: 'Resumir PDFs',
    href: '/docs/primitives/typography',
    description: 'Resumir PDFs largos en puntos clave y transcribirlos a texto',
    icon: '📄',
  },
  {
    title: 'Resumir Archivos DOCX',
    href: '/docs/primitives/typography',
    description:
      'Resumir archivos DOCX largos en puntos clave y transcribirlos a texto',
    icon: '📄',
  },
  {
    title: 'Resumir Archivos TXT',
    href: '/docs/primitives/typography',
    description:
      'Resumir archivos TXT largos en puntos clave y transcribirlos a texto',
    icon: '📄',
  },
];

export function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} bg-accent`}
            >
              Empezar
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Caracteristicas</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-auto lg:grid-cols-[.75fr_1fr]">
              {navigationItems.map((item) => (
                <ListItem href={item.href} title={item.title} icon={item.icon}>
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
                <ListItem href={item.href} title={item.title} icon={item.icon}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Precios
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
