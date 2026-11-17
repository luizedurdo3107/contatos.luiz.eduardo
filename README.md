# Luiz Eduardo — Lumos Connect | Link page

Página pessoal de contatos na identidade **Obsidian**, inspirada na gravação de referência. Responsiva e pronta para publicação como site estático.

## Rodar no VS Code

Sem bibliotecas externas ou instalação de dependências:

1. Abra a pasta `lumos-links` no VS Code.
2. Use a extensão **Live Server** para abrir `index.html`, ou rode `python3 -m http.server 5500` dentro da pasta.
3. Acesse `http://localhost:5500` no navegador.

É possível também abrir `index.html` diretamente no navegador.

## Configurar seus links

Edite **`config.js`** e substitua os valores `null` pelas URLs completas:

- `whatsapp`: `https://wa.me/55DDDNUMERO` (sem espaços, parênteses ou traços)
- `instagram`: `https://www.instagram.com/SEUUSUARIO/`
- `portfolio`: URL completa do portfólio
- `lumos`: URL completa do site da Lumos Connect

LinkedIn, GitHub e e-mail estão preenchidos com dados anteriormente informados, mas devem ser conferidos antes da publicação.

Cards sem link ficam visíveis como **Em breve** e não podem ser clicados. Quando a URL for configurada, eles se tornam clicáveis automaticamente.

## Salvar contato

O botão **Salvar meu contato** baixa um arquivo `.vcf` (vCard) com nome, empresa, cargo e os canais configurados. Seu visitante pode importar esse arquivo para a agenda.

## Publicar e usar o QR code

Hospede esta pasta em um serviço de sites estáticos, como GitHub Pages, Netlify ou Vercel. Depois que houver um endereço público, gere um QR code apontando para ele e coloque no slide da Lumos Connect.

## Arquivos

- `index.html`: estrutura da página
- `styles.css`: tema Obsidian e layout responsivo
- `config.js`: seus links e dados editáveis
- `main.js`: cards e geração do contato `.vcf`
- `assets/favicon.svg`: ícone da aba do navegador

## Cuidados antes de publicar

Confira os endereços de e-mail, GitHub e LinkedIn; confirme se deseja que essas informações fiquem públicas na página.
