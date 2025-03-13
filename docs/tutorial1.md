# 🚀 **Tutorial Completo: Criando um "Hello World" com Angular**

Este tutorial vai te guiar passo a passo na criação de um **projeto Angular do zero** seguindo as **boas práticas** da tecnologia. Vamos garantir que o código seja **limpo, modular e bem estruturado**.

---

## 📌 **1. Pré-requisitos**

Antes de começar, você precisa ter instalado:  
✅ **Node.js** (versão LTS recomendada) → [Baixar Node.js](https://nodejs.org/)  
✅ **Angular CLI** (Interface de Linha de Comando do Angular)

Se o Angular CLI não estiver instalado, rode:

```sh
npm install -g @angular/cli
```

Verifique se a instalação foi bem-sucedida:

```sh
ng version
```

Se tudo estiver certo, vamos criar nosso projeto! 🚀

---

## 📌 **2. Criando o Projeto Angular**

Agora, vamos criar um novo projeto Angular chamado `hello-world`:

```sh
ng new hello-world
```

📌 Durante a criação, o CLI perguntará:

- **Would you like to add Angular routing?** → `No` (não precisamos de rotas agora)
- **Which stylesheet format would you like to use?** → Escolha `CSS` (ou outro se preferir)

Aguarde a instalação e entre na pasta do projeto:

```sh
cd hello-world
```

Agora, rode o servidor de desenvolvimento:

```sh
ng serve
```

Acesse **http://localhost:4200/** no navegador e verá a página inicial do Angular! 🎉

---

## 📌 **3. Criando um Componente "Hello World"**

O Angular trabalha com **componentes**, que são blocos reutilizáveis de código. Vamos criar um componente chamado `hello-world`:

```sh
ng generate component components/hello-world
```

Isso cria automaticamente:

```plaintext
src/app/components/hello-world/
│── hello-world.component.ts     # Código do componente
│── hello-world.component.html   # Template HTML
│── hello-world.component.css    # Estilos do componente
│── hello-world.component.spec.ts # Testes unitários
```

Agora, vamos editar esses arquivos!

---

## 📌 **4. Implementando o "Hello World"**

### 🔹 **4.1. Editando `hello-world.component.ts`**

Abra `src/app/components/hello-world/hello-world.component.ts` e edite:

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-hello-world",
  templateUrl: "./hello-world.component.html",
  styleUrls: ["./hello-world.component.css"],
})
export class HelloWorldComponent {
  message: string = "Hello, Angular World!";
}
```

📌 **Explicação:**  
✅ **`@Component`** → Define um componente Angular.  
✅ **`selector: 'app-hello-world'`** → Permite usar `<app-hello-world></app-hello-world>` no HTML.  
✅ **`message`** → Criamos uma variável para armazenar o texto.

---

### 🔹 **4.2. Editando `hello-world.component.html`**

Agora, edite `src/app/components/hello-world/hello-world.component.html`:

```html
<h1>{{ message }}</h1>
```

📌 **Explicação:**  
✅ As chaves `{{ }}` são **interpolação**, permitindo exibir variáveis no HTML.

---

### 🔹 **4.3. Editando `hello-world.component.css`**

Estilize o texto em `src/app/components/hello-world/hello-world.component.css`:

```css
h1 {
  color: #007bff;
  text-align: center;
  font-family: Arial, sans-serif;
}
```

---

## 📌 **5. Adicionando o Componente no App Principal**

Agora, precisamos exibir o `HelloWorldComponent` na página principal do projeto.

Abra `src/app/app.component.html` e substitua o conteúdo por:

```html
<app-hello-world></app-hello-world>
```

📌 **Explicação:**  
✅ O Angular já registrou o componente no `AppModule`, então podemos chamá-lo diretamente com `<app-hello-world></app-hello-world>`.

---

## 📌 **6. Testando a Aplicação**

Agora, rode novamente o servidor Angular:

```sh
ng serve
```

Acesse **http://localhost:4200/** e veja **"Hello, Angular World!"** estilizado na tela! 🎉

---

## 📌 **7. Melhorando a Estrutura do Código**

Para manter a organização, vamos separar a **lógica de dados** em um **serviço**.

### 🔹 **7.1. Criando um Serviço**

Vamos criar um serviço chamado `message.service.ts`:

```sh
ng generate service services/message
```

Isso cria `src/app/services/message.service.ts`.

Agora, edite o arquivo para retornar a mensagem do serviço:

```typescript
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MessageService {
  getMessage(): string {
    return "Hello, Angular World!";
  }
}
```

📌 **Explicação:**  
✅ **`@Injectable({ providedIn: 'root' })`** → Indica que o serviço pode ser injetado em qualquer lugar.  
✅ **`getMessage()`** → Método que retorna a mensagem.

---

### 🔹 **7.2. Usando o Serviço no Componente**

Agora, vamos injetar o serviço no `hello-world.component.ts`:

```typescript
import { Component } from "@angular/core";
import { MessageService } from "../../services/message.service";

@Component({
  selector: "app-hello-world",
  templateUrl: "./hello-world.component.html",
  styleUrls: ["./hello-world.component.css"],
})
export class HelloWorldComponent {
  message: string;

  constructor(private messageService: MessageService) {
    this.message = this.messageService.getMessage();
  }
}
```

📌 **Explicação:**  
✅ **Injetamos o `MessageService` no construtor**.  
✅ **Chamamos `getMessage()` para definir `message`**.

Agora, rode o projeto novamente e o resultado será o mesmo, mas com **melhor organização do código!** 🚀

---

## 📌 **8. Conclusão**

🎉 **Parabéns! Você criou seu primeiro projeto Angular do jeito certo!**

🔹 **Resumo do que aprendemos:**  
✅ Criamos um **projeto Angular** do zero.  
✅ Criamos um **componente reutilizável**.  
✅ Implementamos um **serviço para centralizar a lógica**.  
✅ Aplicamos boas práticas como **modularização e injeção de dependência**.

🚀 **Próximos Passos:**  
👉 Criar **interatividade** com botões e eventos.  
👉 Trabalhar com **inputs e outputs** entre componentes.  
👉 Criar **requisições HTTP** para buscar dados.

Quer que eu continue com o próximo nível? 😃
