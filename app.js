// const express = require('express');
// const { createConnection } = require('mysql');
// const { json, urlencoded } = require('body-parser');
// const loginRoutes = require('./routes/loginRoutes');
// const cadastroRoutes = require('./routes/cadastroRoutes');

// const app = express();
// const port = 3306;

// // Configuração do MySQL
// const db = createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: '',
//     database: 'green_oak'
// });

// // Conectar ao MySQL
// db.connect((err) => {
//     if (err) {
//         console.error('Erro ao conectar ao MySQL: ' + err.stack);
//         return;
//     }
//     console.log('Conectado ao MySQL como ID ' + db.threadId);
// });

// // Middleware para analisar o corpo da solicitação
// app.use(json());
// app.use(urlencoded({ extended: false }));

// // Rotas
// app.use('/login', loginRoutes);
// app.use('/cadastro', cadastroRoutes);

// // Iniciar o servidor
// app.listen(port, () => {
//     console.log(`Servidor rodando em http://localhost:${port}`);
//     console.log('Para acessar o formulário: http://localhost:3306');
// });
