# Projeto2

# Connect Lab

# Módulo 1 - Projeto Avaliativo 2

## INTRODUÇÃO

A **LAB Things Corporation**, uma renomada empresa do ramo IOT, está expandindo sua operação. Por conta da expansão, novos produtos inovadores estão sendo criados, dentre eles, um sistema inovador para interface de dispositivos conectados, intitulado **Connect Lab**. O seu perfil chamou a atenção dos gestores para a criação do protótipo **front-end** do sistema que deverá ser codificado em **React**. Mãos à obra!

## REQUISITOS DA APLICAÇÃO
A aplicação que deverá ser realizada **individualmente** deve contemplar os seguintes requisitos:

1. Uma página de cadastro de usuário, contendo os campos:
-Nome Completo (obrigatório)
-URL de uma foto (opcional)
-E-Mail (obrigatório)
-Senha (obrigatório)
*Mínimo de 8 caracteres (letras, números e/ou caracteres especiais)
-Validação de Senha (obrigatório)
-Telefone (opcional)
-Endereço
*CEP (obrigatório)
*Logradouro/Endereço (obrigatório)
*Número (obrigatório)
*Bairro (obrigatório)
*Cidade (obrigatório)
*Estado (obrigatório)
*Complemento (opcional)
-Os dados de endereço devem ser pré-preenchidos através da consulta do CEP pela API ViaCEP do IBGE Brasil.
-Os campos obrigatórios e opcionais devem ser validados no método onSubmit.
-Ao cadastrar o usuário, mostrar uma mensagem de feedback de usuário cadastrado com sucesso. Dica: Utilize o método onSubmit com Try/Catch.
-Salve os dados utilizando a api disponibilizada API.


2. Uma página de login contendo um campo de email e senha.
-O evento onSubmit deverá validar se os campos foram preenchidos, sendo:
*E-Mail (obrigatório)
*Senha (obrigatório)
-Ao validar os campos de input, o usuário é redirecionado para a página de Início.
*Valide se o campo de e-mail recebeu um e-mail verdadeiro, e se o campo de senha possui 8 ou mais caracteres.

3. Um menu de navegação a ser utilizado nas rotas para as páginas de:
-Início
-Adição de Dispositivos
-Perfil do usuário

4. Uma página de Início, contendo:
-Um componente de previsão do tempo mostrando temperatura, estado (ensolarado, nublado, chuvoso etc), umidade e demais informações que você achar relevante. Utilize os dados de endereço do usuário para trazer as informações climáticas.
-Lista de dispositivos adicionados ao local (casa, escritório, fábrica etc) do usuário.
*Adicione filtros para os agrupamentos que o usuário possui cadastrado. Ex:
--Todos os dispositivos
--Quarto
--Sala
--Cozinha
--Etc.

5. Uma forma de detalhar os dispositivos que deverá aparecer quando um dispositivo é clicado na página de listagem.
-Você deve criar uma página de detalhes.
-Todas as informações do dispositivo adicionado ao perfil de usuário devem ser exibidas, por exemplos:
*Nome do Dispositivo
--Exemplos: Lâmpada da Sala, Fita Led do Escritório, Sensor de Temperatura, Ar Condicionado do Quarto e etc
-Tipo de Dispositivo
*Exemplos: Lâmpada, Fita Led, Sensor, Ar Condicionado e etc
-Fabricante do Dispositivo:
*Exemplo: Intelbras
-Estado do Dispositivo
*Estados: Ligado, Desligado, Desconectado
-Informações do Dispositivo:
*Exemplos:
--Lâmpada: 10 Watts
--Fita Led: 5 Watts
--Sensor de Temperatura: 23  ºC
--Ar Condicionado: Gelando (se ligado)
--Etc
*IP do dispositivo
*Endereço MAC do dispositivo
-Consuma os dados da API disponibilizada.
Uma página de adição de dispositivos onde todos os dispositivos cadastrados no sistema devem ser listados.
Na parte superior deve existir uma barra de busca para buscar por algum dispositivo.
Dica: Você também pode implementar um botão de filtro para filtrar por tipo.
Consuma os dados da API disponibilizada.
Ao clicar no dispositivo o usuário poderá através de um modal ou página vincular o dispositivo.
Dentre as informações deve haver um botão para vincular/adicionar o dispositivo ao perfil de usuário.
Quando o botão de vincular/adicionar for clicado, deverá simular um tempo de pareamento (dica: utilize setTimeOut com tempos gerados randomicamente entre 5 e 20 segundos) e adicione o dispositivo ao perfil do usuário.
O usuário deverá escolher o local e agrupamento (sala, cozinha, quarto e etc) do dispositivo na hora de vincular.

6. Uma página de perfil de usuário, contendo:
-Foto do usuário
*Usar a imagem da URL do cadastro caso exista, ou colocar um avatar genérico caso não exista
-Nome do usuário
-E-mail do usuário
-Telefone do usuário
*Colocar o telefone caso exista, ou esconder o campo caso não exista
-Endereço do usuário
-Botão/chave para habilitar a edição de todos os dados do usuário
*Caso ativado, o usuário poderá editar suas informações. 
-Botão para realizar logout na aplicação.

8. Criação de uma **estilização (identidade visual) do sistema**. Na sequência do documento será apresentado um exemplo da aplicação proposta, contento wireframes (Protótipo de baixa fidelidade) e links do figma (Protótipo de alta fidelidade). Utilize o exemplo apenas para entender o modelo a ser desenvolvido, porém fique livre para criar sua identidade visual única com cores e formatos que achar mais interessante e intuitivo.

## PLANO DE PROJETO

Ao construir a aplicação proposta, o aluno estará colocando em prática os aprendizados em:
\*Fundamentos da Programação Web:
- Arquitetura cliente-servidor, introdução ao HTML e CSS
- HTML e CSS: HTML5 (elementos semânticos) e CSS (seletores, principais estilos, layouts e flexbox)
- Organização: Kanban Board com Trello e Versionamento com GitHub
  \*JavaScript:
- Variáveis e tipos de dados, Operadores (aritméticos, lógicos e relacionais) e Manipulação do DOM (utilização de seletores)
- Objetos, Array, Funções, Arrow Functions, Funções de Arrays (forEach, map, filter, find, reduce e every), JSON e LocalStorage
- Estrutura de Controle de Fluxo (condicional e repetição), Eventos, Apresentação do ES6+, Operadores Rest e Spread, Escopo (let, var e const)
- Módulos (export e import), Funções Assíncronas (Promises, Async e Await), Interval, Timeout e fetch

\*React:
-Renderização de componentes, Renderização de listas, Props e Proptypes
-Hooks Principais (useState e useEffect), eventos e lifecycles
-Context API, Hooks Avançados (useReducer e useContext), React Router e Prop Drilling
-Composition, Formulários (React Hook Form), Yup, 
-Organização de projeto e melhores práticas com React
-Estilos (Styled Components), Developer Tools e Deploy

