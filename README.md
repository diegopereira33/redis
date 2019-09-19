#	REDIS



```
Testing Technology Applicability.
```



## BASIC EXAMPLE



#### 1. Criar Container

*mkdir redis*  

#### 2. Baixa a imagem

​	*Obs: Estou utilizando Windows*

 *docker pull redis:windowsservercore*

#### 3. Executa Container

*docker run --name redis -p 6379:6379 -d redis:windowsservercore* 

####	4. Cria um projeto através do npm

*npm init -y*

#### 5. Instala o npm

*npm install* 

#### 6. Salva o pacote Redis

*npm install redis --save* 

### 7. Crie um arquivo .js

```js
var redis = require('redis');
var client = redis.createClient();

client.on('connect', function () {
    console.log('connected Test');
});

// ESTRUTURA  DE DADOS STRINGS
client.set('Nome', 'Diego Pereira');

```

### 8. Executa o Arquivo .js

*node app.js*

### 9. Executa o Redis

*docker exec -it redis redis-cli*

#### 10. Apresenta o valor da Chave



![1568924730262](C:\Users\diego.pereira\AppData\Roaming\Typora\typora-user-images\1568924730262.png)









