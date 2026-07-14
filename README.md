# Playwright FastTrack

Este projeto é uma amostra prática de automação de testes web com Playwright, desenvolvida durante o treinamento Playwright FastTrack, ministrado por Paulo Oliveira. O objetivo principal é consolidar conhecimentos em testes automatizados, boas práticas de automação e estruturação de testes reutilizáveis.

## Objetivo do projeto

O repositório foi criado para demonstrar e praticar conceitos fundamentais de automação com Playwright, incluindo:

- Criação e execução de testes automatizados
- Uso de locators e assertions
- Testes em múltiplos navegadores e dispositivos
- Geração de dados dinâmicos com Faker
- Organização de testes com Page Object Model (POM)
- Geração e visualização de relatórios de execução

## Tecnologias utilizadas

- Node.js
- Playwright Test
- TypeScript
- Faker.js
- dotenv

## Estrutura do projeto

```text
.
├── tests/
│   ├── fixtures/
│   ├── support/
│   ├── home.spec.ts
│   └── registration.spec.ts
├── playwright.config.ts
├── devices.txt
├── package.json
├── playwright-report/
└── test-results/
```

## Aplicação utilizada nos testes

A suíte de automação foi executada na aplicação demo de e-commerce LambdaTest, disponível em https://ecommerce-playground.lambdatest.io. A aplicação oferece cenários reais de interação web, como login, cadastro de conta e validação de páginas de sucesso, o que torna o ambiente adequado para praticar automação com Playwright.

## Escopo da automação

A automação contemplou os principais cenários de teste abaixo:

- Verificação da disponibilidade da aplicação na página inicial de login
- Cadastro de novo usuário em diferentes abordagens de teste
- Validação de título e URL após o cadastro bem-sucedido
- Uso de dados dinâmicos gerados com Faker
- Organização dos cenários com modelagem de dados e Page Object Model (POM)
- Execução dos testes em múltiplos navegadores e dispositivos

Os casos automatizados incluem:

- Teste de disponibilidade da aplicação
- Cadastro de usuário em fluxo de registro
- Cadastro de usuário utilizando métodos built-in do Playwright
- Cadastro de usuário com geração automática de dados
- Cadastro de usuário com validações de assert
- Cadastro de usuário com modelagem de dados
- Cadastro de usuário utilizando Page Object Model

## Pré-requisitos

Antes de executar os testes, certifique-se de que sua máquina possui:

- Node.js 18 ou superior
- npm instalado

## Instalação

No diretório raiz do projeto, execute os comandos abaixo:

```bash
npm install
npx playwright install
```

## Executando os testes

### Executar todos os testes

```bash
npx playwright test
```

### Executar um arquivo específico

```bash
npx playwright test tests/home.spec.ts
```

### Executar em um navegador específico

```bash
npx playwright test --project=chromium
```

### Executar em modo visual

```bash
npx playwright test --headed
```

### Executar testes filtrando por nome

```bash
npx playwright test --grep "Aplicação deve estar no ar"
```

## Relatórios

Os testes estão configurados para gerar relatórios em HTML. Para visualizá-los após a execução, use:

```bash
npx playwright show-report
```

## Exemplos de comandos úteis

```bash
# Executar todos os testes
npx playwright test

# Executar apenas um teste específico
npx playwright test --grep "registrar novo usuário"

# Executar em modo visual no navegador Chromium
npx playwright test --headed --project=chromium

# Abrir o relatório HTML
npx playwright show-report
```

## Ambientes cobertos

A configuração atual do projeto contempla execução em diferentes ambientes, incluindo:

- Chromium
- Firefox
- WebKit
- Mobile Chrome
- Mobile Safari

## Conclusão

Este README serve como ponto de entrada para entender, executar e manter os testes automatizados deste projeto de forma organizada e profissional.
