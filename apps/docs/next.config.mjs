// @ts-check

import { composePlugins, withNx } from '@nx/next'
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX()

const defaultImageHostnames = [
  'avatars.githubusercontent.com',
  'raw.githubusercontent.com',
  'media.licdn.com',
  'www.linuxfoundation.org',
  'icons.veryicon.com',
  'logowik.com',
  'trunkbaseddevelopment.com',
  'feature-sliced.design',
  'diataxis.fr',
  'conventionalcomments.org',
  'lh3.googleusercontent.com',
  'res.cloudinary.com',
  'github.com',
  'automate.org',
  'assets.ubuntu.com',
  'freebsd.org',
  'caksoylar.github.io',
  'precondition.github.io',
  'keymapdb.com',
  '12factor.net',
  'uo.zone',
  'serenity-js.org',
  'huly.io',
]

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 */
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https:github.com/gregberge/svgr
    svgr: false,
  },
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    remotePatterns: defaultImageHostnames.map(hostname => ({
      protocol: 'https',
      // eslint-disable-next-line node/prefer-global/process
      hostname: process.env.ALLOWED_IMAGE_HOSTNAME || hostname,
    })),
  },
  output: "standalone"
}

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withMDX,
]

export default composePlugins(...plugins)(nextConfig)
