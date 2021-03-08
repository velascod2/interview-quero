# interview-quero




1- Desenvolva uma aplicação web que responde apenas o verbo GET com um JSON {"data": "hello world"} em uma dessas linguagens: Ruby, Node.js, Elixir ou Go.
2- A frase deve vir de um banco de dados relacional.
3- Escreva o processo de construção da aplicação, pode ser um script sh por exemplo.
4- Escreva o container para a aplicação.
5- Faça uma documentação simples de como construímos a aplicação e executamos.
6- Envie para um repositório git, dê preferência ao GitHub. Compartilhe com a gente ;)

1- Criado uma aplicação em Node.js que traz o json apenas com o GET
2- Frase está vindo de um banco de dados Mysql hospedado na Umbler.
3- Primeiro escolhi uma linguagem que tinha uma familiaridade maior, montei um esboço de como gostaria que fosse a execução, levei em consideração os requesitos e fui criando a estrutura dando agilidade e sentido para a demanda.
4- Dockerfile da aplicação já versionada no Github com CI integrado no DockerHub
5- A execução e bem simples, é preciso ter um Node instalado na maquina, caso não possua, usar o seguinte comando para as destribuição baseadas em debian "sudo apt install nodejs -y", após isso, instalar dois modulos necessarios para a correta execução, para isso execute o comando "npm install express mysql" no terminal. O proximo passo e entrar na pasta "src" e executar o comando "node server.js" dessa forma executara localmente para fazer um rapido teste, para isso, abra o navegador e acessa a url "http://localhost:3000/response" para ter a mensagem exibida. Caso queira ir por um caminho mais simples, basta baixar a imagem docker disponibilizado no link no proximo passo e executar o seguinte comando "docker run -p 3000:3000 -it -d velascod2/projeto-quero:latest"
6- 