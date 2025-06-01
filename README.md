# Projeto de Testes Automatizados - AdoPet

Este é um projeto de testes automatizados desenvolvido com Cypress para testar a aplicação AdoPet, uma plataforma de adoção de pets.

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Suítes de Testes](#-suites-de-testes)
- [Como Executar](#-como-executar)
- [Relatórios](#-relatórios)

## 🐾 Sobre o Projeto

O projeto consiste em uma suíte de testes automatizados para validar as funcionalidades da aplicação AdoPet (https://adopet-frontend-cypress.vercel.app/). Os testes cobrem várias funcionalidades, incluindo cadastro, login, navegação e integração com API.

## 🛠 Tecnologias Utilizadas

- Cypress v14.4.0
- Node.js
- Mochawesome para relatórios

## 📁 Estrutura do Projeto

```
cypress/
├── e2e/                    # Arquivos de testes
├── fixtures/               # Dados para testes
├── downloads/              # Downloads gerados durante testes
├── results/               # Relatórios de execução
├── screenshots/           # Capturas de tela de falhas
├── support/              # Arquivos de suporte
└── videos/               # Gravações das execuções
```

## 🧪 Suítes de Testes

### Testes de Cadastro
- `cadastro-correto.cy.js`: Testa o fluxo de cadastro com dados válidos
- `cadastro-incorreto.cy.js`: Valida mensagens de erro no cadastro
- `cadastro-massa.cy.js`: Testes com diferentes conjuntos de dados

### Testes de Login
- `login-correto.cy.js`: Valida o login com credenciais corretas
- `login-incorreto.cy.js`: Testa cenários de erro no login
- `fluxo-de-login.cy.js`: Testa o fluxo completo de login

### Testes de API
- `api-mensagens.cy.js`: Testa endpoints de mensagens
- `api-perfil.cy.js`: Testa endpoints relacionados ao perfil

### Testes de Interface
- `teste-pagina-principal.cy.js`: Testa elementos da página inicial
- `teste-imagens-dos-animais.cy.js`: Valida exibição de imagens
- `teste-quem-ama-adota.cy.js`: Verifica mensagens e textos
- `teste-de-pagina.cy.js`: Testa navegação entre páginas

### Outros Testes
- `delete-pagina-exemplo.cy.js`: Exemplo de teste de deleção

## ▶️ Como Executar

1. Instale as dependências:
```bash
npm install
```

2. Existem várias maneiras de executar os testes:

### Execução em Modo Headless (Terminal)
```bash
# Executar todos os testes
npx cypress run

# Executar um arquivo de teste específico
npx cypress run --spec "cypress/e2e/login-correto.cy.js"

# Executar todos os testes de uma pasta específica
npx cypress run --spec "cypress/e2e/login-*.cy.js"

# Executar em um navegador específico
npx cypress run --browser chrome
npx cypress run --browser firefox

# Executar e gerar relatório
npx cypress run --reporter mochawesome
```

### Execução em Modo Interativo (Interface Gráfica)
```bash
# Abrir o Cypress Test Runner
npx cypress open

# Abrir em um navegador específico
npx cypress open --browser chrome
npx cypress open --browser firefox
```

### Execução com Variáveis de Ambiente
```bash
# Definir variáveis de ambiente na linha de comando
CYPRESS_BASE_URL=https://exemplo.com npx cypress run

# Usar arquivo de configuração específico
npx cypress run --config-file qa.config.js
```

### Scripts NPM Personalizados
```bash
# Adicione estes scripts ao seu package.json
npm run cy:open    # Abre o Cypress Test Runner
npm run cy:run     # Executa todos os testes em modo headless
npm run cy:chrome  # Executa testes no Chrome
npm run cy:firefox # Executa testes no Firefox
```

Para adicionar os scripts acima, adicione ao seu package.json:
```json
{
  "scripts": {
    "cy:open": "cypress open",
    "cy:run": "cypress run",
    "cy:chrome": "cypress run --browser chrome",
    "cy:firefox": "cypress run --browser firefox"
  }
}
```

## 📊 Relatórios

Os relatórios são gerados usando Mochawesome e podem ser encontrados no diretório `cypress/results/`. Cada execução gera:
- Relatório HTML detalhado
- Arquivo JSON com dados da execução
- Screenshots de falhas (quando ocorrem)
- Vídeos das execuções

### Configurações de Relatório

O projeto está configurado para:
- Gerar relatórios HTML e JSON
- Não sobrescrever relatórios anteriores
- Incluir timestamp nos nomes dos arquivos
- Salvar screenshots e vídeos das execuções

### 📊 Relatórios Mochawesome

Os relatórios detalhados das execuções dos testes estão disponíveis em `cypress/results/`. Aqui estão os últimos relatórios gerados:

#### Relatórios de 01/06/2025
- `mochawesome_06012025_153141.html/json`: Execução de massa de testes de cadastro (10 testes)
- `mochawesome_06012025_153145.html/json`: Testes de deleção (2 testes)
- `mochawesome_06012025_153149.html/json`: Fluxo de login
- `mochawesome_06012025_153153.html/json`: Login correto
- `mochawesome_06012025_153159.html/json`: Login incorreto
- `mochawesome_06012025_153204.html/json`: Testes de navegação (6 testes)
- `mochawesome_06012025_153207.html/json`: Testes de imagens
- `mochawesome_06012025_153210.html/json`: Testes da página principal
- `mochawesome_06012025_153212.html/json`: Testes de mensagens (2 testes)

#### Relatórios de 30/05/2025
- `mochawesome_05302025_160825.html/json`: Testes de cadastro correto
- `mochawesome_05302025_160833.html/json`: Testes de cadastro incorreto
- `mochawesome_05302025_160838.html/json`: Fluxo de login
- `mochawesome_05302025_160846.html/json`: Login correto
- `mochawesome_05302025_160854.html/json`: Login incorreto
- `mochawesome_05302025_160903.html/json`: Testes de navegação
- `mochawesome_05302025_160909.html/json`: Testes de imagens
- `mochawesome_05302025_160913.html/json`: Testes da página principal
- `mochawesome_05302025_160919.html/json`: Testes de mensagens

Cada relatório inclui:
- Status de cada teste (passou/falhou)
- Duração da execução
- Screenshots de falhas (quando ocorrem)
- Logs detalhados da execução
- Estatísticas de execução (% de sucesso, testes pendentes, etc.)

Para abrir os relatórios HTML, use o comando:
```bash
# Para Linux/Mac
open cypress/results/mochawesome_*.html

# Para Windows
start cypress/results/mochawesome_*.html
```

### 📹 Vídeos das Execuções

Os seguintes vídeos de testes estão disponíveis em `cypress/videos/`:

#### Testes de Cadastro
- `cadastro-correto.cy.js.mp4`: Demonstração do fluxo de cadastro bem-sucedido
- `cadastro-incorreto.cy.js.mp4`: Demonstração das validações de erro no cadastro
- `cadastro-massa.cy.js.mp4`: Demonstração dos testes com diferentes dados

#### Testes de Login
- `login-correto.cy.js.mp4`: Demonstração do login bem-sucedido
- `login-incorreto.cy.js.mp4`: Demonstração das validações de erro no login
- `fluxo-de-login.cy.js.mp4`: Demonstração do fluxo completo de login

#### Testes de API
- `api-mensagens.cy.js.mp4`: Demonstração dos testes de API de mensagens
- `api-perfil.cy.js.mp4`: Demonstração dos testes de API de perfil

#### Testes de Interface
- `teste-pagina-principal.cy.js.mp4`: Demonstração dos testes da página inicial
- `teste-imagens-dos-animais.cy.js.mp4`: Demonstração dos testes de imagens
- `teste-quem-ama-adota.cy.js.mp4`: Demonstração dos testes de textos e mensagens
- `teste-de-pagina.cy.js.mp4`: Demonstração dos testes de navegação

#### Outros Testes
- `delete-pagina-exemplo.cy.js.mp4`: Demonstração do teste de deleção

Os vídeos são gerados automaticamente durante a execução dos testes em modo headless (`npx cypress run`) e podem ser utilizados para:
- Análise de falhas
- Documentação do comportamento esperado
- Treinamento de novos membros da equipe
- Demonstração das funcionalidades testadas

## 🎯 Principais Funcionalidades Testadas

1. **Cadastro de Usuários**
   - Validação de campos obrigatórios
   - Mensagens de erro
   - Cadastro com sucesso

2. **Login**
   - Autenticação com credenciais válidas
   - Tratamento de credenciais inválidas
   - Mensagens de erro

3. **Navegação**
   - Acesso às diferentes páginas
   - Elementos visuais
   - Links e botões

4. **API**
   - Integração com endpoints
   - Validação de respostas
   - Tratamento de erros

5. **Interface**
   - Elementos visuais
   - Responsividade
   - Mensagens do sistema
