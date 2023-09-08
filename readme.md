# This is Marvel

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

## Descrição

- Este app traz todo o universo Marvel na palma de sua mão, pesquise seus heróis favoritos, quadrinhos e até eventos com a maior facilidade.

## Tecnologias

![Badge Firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black) ![Badge React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Badge React ](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Badge Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white) ![Badge JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white) ![Badge Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white) ![Badge Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Badge Typescript](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![Badge Realm](https://img.shields.io/badge/Realm-39477F?style=for-the-badge&logo=realm&logoColor=white)

## Arquitetura

Para esse aplicativo, foi aplicado os conceitos de Clean Architecture + SOLID, para que assim toda parte de logica que faz conexão da camada de presentation com a camada de data, não tenham conhecimento de qual é o provedor ou framework utilizado na conexão, podendo assim ter um impacto muito menor no aplicativo quando o mesmo escalar, sendo assim, quando for necessário mudar uma técnologia de conexão, tipo de axios para alguma outra ferramenta de fetch, iremos apenas sofrer poucas alterações na camada infra e main, que é onde os factories são feitos para utilização na camada de data.

## Decisões

Para ter todas as funcionabilidades funcionando, foi levantado técnicologias como Firestore do Firebase para conexão ao banco de dados e salvamento do cadastro de usuário + envio de códigos para restauração de senha.
Para conexão com a API da Marvel, foi utilizado o axios como ferramenta.
Para salvamento dos token localmente, foi utilizado o Realmdb.

## Comunicação

Os componentes e telas não se comunicam diretamente com o axios ou firestore, eles se integram via factories na camada de main, que irá importar classes com implementações padrões de execução para aquele fim específico e injetar os serviços necessários para funcionamento.
Essa camada main que cria a factorie, junta os factories do httpclient ou databaseclient e injeta no usecase do data da função, fazendo assim ele estar habilitado a receber a execução da função, apóis isso, ele injeta no factory da tela para que a mesma use.

## Api Marvel

Para esse projeto, é necessário que você tenha chaves da API marvel que deverão estar informadas no arquivo .env, favor, informe de acordo as chaves utilizando o arquivo .env.example que está no repositório.

Para gerar as chaves, siga os passos nesse link [Marvel Documentation](https://developer.marvel.com/documentation/getting_started "Marvel Documentation")

## Firebase

Para esse projeto, é necessário ativar algumas funções do firebase como o firestore, além da extensão **Trigger Email from Firestore **

Para configurar o firebase, basta seguir os passos a passos do link [Google Firebase](https://firebase.google.com/?hl=pt "Google Firebase") no botão "Começar"

## UI

[![UI](https://raw.githubusercontent.com/jamesjlv/thisismarvel/main/src/assets/images/App.png)](https://raw.githubusercontent.com/jamesjlv/thisismarvel/main/src/assets/images/App.png)

## Ambiente

Para que tudo funcione como esperado, é necessário que seu dispositivo esteja com todos os recursos necessários, caso você não tenha certeza se seu dispositivo conseguirá rodar a aplicação, por favor, veja o link [Configuração do ambiente](https://react-native.rocketseat.dev/ "Configuração do ambiente")

## Como iniciar

- Baixe o projeto em seu dispositivo e instale todos os pacotes necessários

```shell
yarn
```

### Android

##### Desenvolvimento

Para o modo desenvolvimento, basta abrir um terminal na raiz do projeto e rodar o comando

```shell
yarn android
```

##### Produção/Release

Para criar uma versão de release do aplicativo, basta executar o comando

```shell
yarn build:android:production
```

### iOS

##### Desenvolvimento

Para iniciar o projeto em modo desenvolvimento, basta abrir um terminal na raiz do projeto e rodar o comando

```shell
yarn ios
```

O arquivo SDK estará salvo em ./android/app/build/outputs/apk/release/app-release.apk

**_ Caso deseje, já vai ter um arquivo .sdk salvo nesse diretório acima, para que assim você não precise fazer nenhuma configuração, para instalar, rode yarn install:apk _**

##### Production

Para gerar um apk, será necessário primeiro ter uma conta apple, com isso, siga os passo a passo do link [Publicação iOS](https://medium.com/timeless/adding-react-native-app-to-app-store-connect-c4d45571df0d "Publicação iOS")

## Testes? nós temos.

Constantemente melhorando os testes, é possível garantir um aplicativo funcional e com menos possibilidade de erros.

Para ver o coverage do aplicativo, basta rodar o comando abaixo na raiz do terminal

```shell
yarn test:ci
```

ele irá apresentar direto no console como está o coverage da aplicação, mas também irá criar os arquivos de coverage que poderá ser visto direto no seu navegador web.

Para abrir esse aquivo, navegue e abra o arquivo em coverage/lcov-report/index.html

##### Progresso dos testes

- Componentes: 100%
- Telas: 30%
- Camada de data: 5%

## Dependências

Nesse projeto, todas as dependências estão fixas para garantir que o mesmo será executado em sua maquina, mas enquanto em desenvolvimento, o mesmo será atualizado e testado para possiveis mudanças nas versões.

## Funcionamento

Abaixo você poderá ver o funcionamento da ferramenta, desde o cadastro até a visualização das informações

https://raw.githubusercontent.com/jamesjlv/thisismarvel/main/src/assets/public/AppShow.mp4
