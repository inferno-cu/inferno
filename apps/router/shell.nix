{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "router-yocto-env";

  buildInputs = with pkgs; [
    python3
    git
    diffstat
    gawk
    wget
    cpio
    unzip
    texinfo
    gcc
    glibc
    gnumake
    libtool
    gperf
    patch
    which
    bison
    flex
    perl
    xz
    file
    ncurses
    zlib
    openssl
    util-linux
    chrpath
    socat
  ];

  shellHook = ''
    echo "🚀 Yocto development environment loaded"
  '';
}
