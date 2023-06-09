# Aplicativo de Tarefas com React Native e Expo

Este é um aplicativo de tarefas simples desenvolvido com React Native e Expo. Ele permite que os usuários salvem suas tarefas e sejam notificados quando a hora de conclusão se aproximar.

## Recursos

- Adicionar uma nova tarefa com título, descrição, data e hora de conclusão.
- Visualizar todas as tarefas salvas em uma lista.
- Marcar tarefas como concluídas.
- Receber notificações quando a hora de conclusão da tarefa estiver próxima.
- Excluir tarefas.

## Instalação

1. Certifique-se de ter o Node.js instalado em seu computador. Você pode baixá-lo em [https://nodejs.org](https://nodejs.org).

2. Instale o Expo CLI globalmente executando o seguinte comando no terminal:

   ```
   npm install -g expo-cli
   ```

3. Clone o repositório do aplicativo de tarefas:

   ```
   git clone <URL_DO_REPOSITORIO>
   ```

4. Navegue até o diretório do projeto:

   ```
   cd nome-do-projeto
   ```

5. Instale as dependências do projeto:

   ```
   npm install
   ```

## Executando o Aplicativo

1. Certifique-se de estar no diretório do projeto.

2. Execute o seguinte comando para iniciar o aplicativo:

   ```
   npx expo start
   ```

3. Isso abrirá o painel de controle do Expo no navegador. A partir daí, você pode escolher executar o aplicativo em um emulador/simulador ou em um dispositivo físico conectado.

4. Siga as instruções fornecidas no painel de controle do Expo para executar o aplicativo em seu ambiente escolhido.

## Imagens do Aplicativo

### Telas

| <img src="https://github.com/vinicius4006/super-duper-memory/assets/28130158/bc94a323-16a4-4b08-87e0-cd5986a5a2dc" alt="Login" width="300"> | <img src="https://github.com/vinicius4006/super-duper-memory/assets/28130158/c5b771a2-678d-4cc5-99be-f836cde406d9" alt="Dashboard" width="300"> 

| <img src="https://github.com/vinicius4006/super-duper-memory/assets/28130158/7dc3b9df-46aa-4f1f-8d1e-68891b3b9beb" alt="Filtro" width="300"> | <img src="https://github.com/vinicius4006/super-duper-memory/assets/28130158/b6d011f6-3726-40fc-a213-e7cc5286ef07" alt="CriacaoDeTarefas" width="300">
          
## Funcionamento

> Login está funcionando com o Firebase

> Armazenamento em um .json

### Login

![login](https://github.com/vinicius4006/super-duper-memory/assets/28130158/f907428c-1825-424b-bee1-28ef1b26f298)

#### Usuário não cadastrado

![login_fail](https://github.com/vinicius4006/super-duper-memory/assets/28130158/346c8294-36b4-46f1-bf35-867a8a663340)

### Registro

![register](https://github.com/vinicius4006/super-duper-memory/assets/28130158/73cb6a8c-fd79-49bd-b5d2-8ff7b5912817)

### Filtro

![filtro](https://github.com/vinicius4006/super-duper-memory/assets/28130158/8bb9b6dc-2e34-48ea-80f4-3f51d52f457c)

### Criação de Tarefas

![criacao](https://github.com/vinicius4006/super-duper-memory/assets/28130158/3568f8b4-45a6-4601-8ea6-362e442cad2c)

## To Do

* Push notification
* Atualizar card para persistir o "checked"
* Remoçao do card
* Divisão entre tarefas futuras e as de "hoje"

## É preciso melhorar

* Responsividade
* Hora limite
* Ajustes de layout como input.
* Com certeza há mais...

## Contribuição

Se você quiser contribuir para este projeto, fique à vontade para criar um pull request com suas melhorias. Será um prazer revisar suas contribuições.

