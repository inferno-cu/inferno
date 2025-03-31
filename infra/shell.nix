{ pkgs ? import <nixpkgs> {}, DB ? "" }:

let

in pkgs.mkShell {
  name = "mira-dev-env";

  buildInputs = [
    pkgs.zellij
    pkgs.neovim
    pkgs.nerd-fonts.jetbrains-mono
    pkgs.ascii-image-converter
    pkgs.postgresql
    pkgs.lazysql
    pkgs.lazygit
    pkgs.btop
    pkgs.atac
    pkgs.yazi
    pkgs.bat
    pkgs.browsh
    pkgs.firefox
    pkgs.zsh
    pkgs.lolcat
    pkgs.libcaca
    pkgs.systemctl-tui
    pkgs.tgpt
    pkgs.termshark
    pkgs.terminaltexteffects
    pkgs.netscanner
  ];

  shellHook = ''
zellij --config zellij.config.kdl -n zellij.layout.kdl

# trap 'echo "🚪 Exiting Nix shell..."; zellij da;' EXIT
 '';
}
