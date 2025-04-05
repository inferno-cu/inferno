import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import type { HomeLayoutProps } from 'fumadocs-ui/layouts/home'
import Image from 'next/image'

import {
  Figma as BrandIcon,
    SquareKanban
} from 'lucide-react'

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image src="/Inferno Final.png" alt="Inferno Logo" height={48} width={48} />
        <span className="text-lg font-bold text-red-500">
          Inferno
          {' '}
          <span className="text-amber-500">Docs</span>
        </span>
      </>
    ),
    url: '/',
  },
  links: [
    {
      text: 'Skytrac Hackathon',
      url: 'https://www.skytrac.ca/skytrac-hack-a-thon/',
      external: true,
    },
    {
      type: 'icon',
      text: 'Brand',
      url: 'https://design.penpot.app/#/view?file-id=14b4ef9d-aa9c-815a-8005-e3d2794ec6e0&page-id=14b4ef9d-aa9c-815a-8005-e3d2794ec6e1&section=interactions&index=0&share-id=4bbd81c9-0a59-81dd-8005-ee44efe4f14e',
      external: true,
      icon: <BrandIcon />,
    },
    {
      type: 'icon',
      text: 'Project Board',
      url: 'https://github.com/users/MFarabi619/projects/27/views/1',
      external: true,
      icon: <SquareKanban />,
    },
  ],
  githubUrl: 'https://github.com/inferno-cu/inferno',
};

export const homeOptions: HomeLayoutProps = { ...baseOptions }
