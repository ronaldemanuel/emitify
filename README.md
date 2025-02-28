# Emitify

## Sobre o Projeto

**Emitify** é um sistema web desenvolvido com **Angular** e **Supabase** para automatizar a criação e emissão de recibos de diferentes tipos, como:
- Recibo de entrega de pagamentos
- Recibo de combustível
- Recibo de recebimento de mercadoria

O objetivo é facilitar a geração e organização de recibos, permitindo ao usuário personalizar modelos e emitir documentos de forma rápida e intuitiva.

## Tecnologias Utilizadas
- **Angular 19** (Frontend)
- **Supabase** (Backend "no code")
- **NG-ZORRO** (Componentes)

## Instalação e Configuração

### 1. Clone o Repositório
```sh
git clone https://github.com/seu-usuario/emitify.git
cd emitify
```

### 2. Instale as Dependências
```sh
npm install
```

### 3. Configure o Supabase
- Crie uma conta no [Supabase](https://supabase.com/)
- Configure um novo projeto e obtenha as chaves de API
- Crie um arquivo `.env` na raiz do projeto e adicione suas credenciais:
  ```ini
  SUPABASE_URL=your_supabase_url
  SUPABASE_KEY=your_supabase_key
  ```

### 4. Execute o Projeto
```sh
ng serve
```
O sistema estará disponível em `http://localhost:4200/`

## Como Usar
1. **Crie um Modelo de Recibo**: Defina os campos necessários, como nome do pagador, valor, data, etc.
2. **Preencha os Dados**: Insira as informações do recibo.
3. **Gere o Documento**: O sistema gera um PDF pronto para download e impressão.

## Contribuição
Se você deseja contribuir com melhorias no **Emitify**, siga os passos abaixo:

### 1. Fork o Repositório
Clique no botão "Fork" no GitHub e clone o repositório forkado:
```sh
git clone https://github.com/seu-usuario/emitify.git
cd emitify
```

### 2. Crie uma Branch para Sua Feature
```sh
git checkout -b minha-nova-feature
```

### 3. Desenvolva e Teste
- Implemente sua feature ou correção de bug
- Teste localmente

### 4. Faça um Commit
```sh
git add .
git commit -m "Adiciona nova feature X"
```

### 5. Envie suas Mudanças
```sh
git push origin minha-nova-feature
```

### 6. Abra um Pull Request
- Acesse o repositório original no GitHub
- Clique em "New Pull Request"
- Descreva sua contribuição e envie

## Contato
Caso tenha dúvidas ou sugestões, entre em contato:
- 📧 Email: emronald15el@gmail.com
- 🔗 GitHub: [ronaldemanuel](https://github.com/ronaldemanuel)

---

📜 **Licença**: Este projeto está sob a licença MIT.

