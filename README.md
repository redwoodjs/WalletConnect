Redwood WalletConnect Auth Integration
======================================

> **Warning**
>
> This package is no longer maintained

WalletConnect used to be an officially supported auth provider in RedwoodJS.
But, starting in v4, we decided that we needed to cut back on the number of
auth providers we maintain support for. Based on usage statistics, we decided
to stop maintaining the WalletConnect auth integration.

This was the PR that removed support for WalletConnect and a few more:
https://github.com/redwoodjs/redwood/pull/7138. That means this was the last
commit that had support for WalletConnect:
https://github.com/redwoodjs/redwood/commit/3d057db199487ea0b17240317d66ddde3f83f332.

If you want to use WalletConnect as your auth provider, we recommend that you
first check to see if anyone has forked this repo (by using the
[Network Graph](https://github.com/redwoodjs/auth-walletconnect/network)) and
has an active fork. If not, you can fork this repo and publish the packages to
NPM. That way, you and the rest of the community can keep using WalletConnect
auth. You can also get the community's help keeping the WalletConnect auth
integration maintained.

