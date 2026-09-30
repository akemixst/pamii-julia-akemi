# pamii-julia-akemi
Aulas de programação Mobile

## 🧰 1. Requisitos

Antes de começar, certifique-se de que você possui:

* 🟢 **Node.js (LTS)** instalado
* 💻 Um sistema operacional compatível:

  * Windows (PowerShell ou WSL 2)
  * macOS
  * Linux

### 📥 Instalar o Node.js

Você pode baixar a versão LTS diretamente no site oficial:

https://nodejs.org/

Para verificar se o Node.js está instalado corretamente:

```bash
node --version
```

E para verificar o npm:

```bash
npm --version
```

---

## ⚙️ 2. Criando o projeto Expo

### ▶️ Passo 1 — Abra o terminal

No Windows, abra o **PowerShell**.

No macOS ou Linux, utilize o terminal de sua preferência.

### ▶️ Passo 2 — Crie o projeto

Execute:

```bash
npx create-expo-app@latest
```

O Expo irá iniciar o processo de criação do projeto.

---

## ✏️ 3. Definindo o nome do projeto

Durante a criação, será solicitado o nome da aplicação:

```text
What is your app named?
```

Digite o nome desejado. Por exemplo:

```text
my-app
```

Aguarde a instalação das dependências e a criação dos arquivos do projeto.

---

## 📂 4. Acessando o projeto

Depois que o projeto for criado, entre na pasta:

```bash
cd my-app
```

> 🔄 Substitua `my-app` pelo nome que você escolheu para o projeto.

---

## ▶️ 5. Executando o aplicativo

Para iniciar o projeto, você pode utilizar diferentes plataformas.

### 📱 Android

```bash
npm run android
```

### 🍎 iOS

```bash
npm run ios
```

> ℹ️ Para desenvolvimento iOS, normalmente é necessário utilizar macOS com o ambiente adequado.

### 🌐 Web

```bash
npm run web
```

---

## 📲 6. Testando no celular

Uma das formas mais simples de testar o projeto é utilizando o **Expo Go**.

Instale o aplicativo **Expo Go** no seu dispositivo Android ou iOS e, depois, inicie o servidor de desenvolvimento:

```bash
npx expo start
```

O terminal exibirá um **QR Code** que pode ser utilizado para abrir o projeto no dispositivo.

---

## 💡 Dicas úteis

### 🔄 Instalar as dependências novamente

Se encontrar algum problema relacionado às dependências, tente:

```bash
npm install
```

### 🧹 Limpar o cache do Expo

Caso o projeto apresente comportamentos inesperados, você pode iniciar o Expo limpando o cache:

```bash
npx expo start -c
```

### 📦 Instalar dependências

Para adicionar uma nova biblioteca ao projeto, prefira:

```bash
npx expo install nome-do-pacote
```

Isso ajuda a instalar uma versão compatível com o SDK do Expo utilizado pelo projeto.

---

## 🎯 Resultado

Depois de iniciar o projeto, você poderá desenvolver e testar sua aplicação em tempo real utilizando **Android, iOS ou Web**.

Agora você já tem a estrutura inicial para começar a desenvolver seu aplicativo com **Expo + React Native**! 🚀

---

### 📚 Tecnologias utilizadas

* [React Native](https://reactnative.dev/)
* [Expo](https://expo.dev/)
* [Node.js](https://nodejs.org/)

---



