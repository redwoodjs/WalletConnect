import fs from 'fs'
import path from 'path'

import { standardAuthHandler } from '@redwoodjs/cli-helpers'

import { Args } from './setup'

const { version } = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../package.json'), 'utf-8')
)

export async function handler({ force: forceArg }: Args) {
  standardAuthHandler({
    basedir: __dirname,
    forceArg,
    provider: 'ethereum',
    authDecoderImport:
      "import { authDecoder } from '@redwoodjs/auth-walletconnect-api'",
    apiPackages: [
      `@redwoodjs/auth-walletconnect-api@${version}`,
      'ethereumjs-util',
      'eth-sig-util',
      'jsonwebtoken',
    ],
    webPackages: [
      `@redwoodjs/auth-walletconnect-web@${version}`,
      '@oneclickdapp/ethereum-auth',
      '@apollo/client',
    ],
    notes: [
      'There are a couple more things you need to do!',
      'Please see the readme for instructions:',
      'https://github.com/oneclickdapp/ethereum-auth',
      'This is a FOSS community-maintained package.',
      'Help us make it better!',
    ],
  })
}
