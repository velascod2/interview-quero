# interview-quero

1- Criado uma aplicação em Node.js que traz o json apenas com o GET

2- Frase está vindo de um banco de dados Mysql hospedado na Umbler.

3- Primeiro escolhi uma linguagem que tinha uma familiaridade maior, montei um esboço de como gostaria que fosse a execução, levei em consideração os requesitos e fui criando a estrutura dando agilidade e sentido para a demanda.

4- Dockerfile da aplicação já versionada no Github com CI integrado no DockerHub

5- A execução e bem simples, é preciso ter um Node instalado na maquina, caso não possua, usar o seguinte comando para as destribuição baseadas em debian "sudo apt install nodejs -y", após isso, instalar dois modulos necessarios para a correta execução, para isso execute o comando "npm install express mysql" no terminal. O proximo passo e entrar na pasta "src" e executar o comando "node server.js" dessa forma executara localmente para fazer um rapido teste, para isso, abra o navegador e acessa a url "http://localhost:3000/response" para ter a mensagem exibida. Caso queira ir por um caminho mais simples, basta baixar a imagem docker disponibilizado no link no proximo passo e executar o seguinte comando "docker run -p 3000:3000 -it -d velascod2/projeto-quero:latest" e usar a mesma url para exibir a mensagem.

6- Link do projeto no GitHub https://github.com/velascod2/interview-quero.


2.1- Utilizando os serviços da AWS, colocaria um Application loadbalancer para fazer o encaminhamento da chamada baseado em path e aproveitando o serviço para fazer o SSL Offload. Seguindo o fluxo, as chamadas serão enviadas para o ECS utilizando a principio com duas EC2s Spots para receber a imagem Docker do App, a principio colocando duas tasks em cada maquina com o ASG em AZ diferentes. Um RDS com MultiAZ para garantir a alta disponibilidade da aplicação.

![Web App Reference Architecture](https://user-images.githubusercontent.com/79722515/110267129-ee53e280-7f9d-11eb-8ff4-a10525e4c808.png)


2.2- Com o ECS e o ASG, podemos aumentar o numero de tasks a principio e se for necessario, podemos aumentar a quantidade de maquinas no ASG, temos algumas abordagens que podem ser tomadas.

2.3- O CI/CD da aplicação seria feita com o CodeBuild, faria a conexão do repositorio do codigo do APP com o serviço da AWS, onde uma vez que fosse commitado na master/main, uma trigger seria disparada, fazendo o build da imagem, criando uma nova task definition e atualizando a versão em produção, podendo utilizar o Code Deploy para fazer o blue green para evitar downtime da aplicação.
