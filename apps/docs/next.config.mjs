import { createMDX } from 'fumadocs-mdx/next';

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
]

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    remotePatterns: defaultImageHostnames.map(hostname => ({
      protocol: 'https',
      // eslint-disable-next-line node/prefer-global/process
      hostname,
    })),
  },
};

export default withMDX(config);
