# Sobre o projeto
Desenvolvimento de uma aplicacão de entrega de alimentos, o DSDelivery.
 - [x] API REST feita com Java Spring Boot.
 - [ ] Versão Web feito com ReactJS <i>(building)</i>.
 - [ ] Versão Mobile feito com React Native <i>(pendente)</i>.

# Casos de uso

## Registar Pedido
	1. [OUT] O sistema mostra uma listagem com nome, preco, descricao e foto de todos os produtos, ordenados por nome.
	2. [IN] O cliente seleciona os produtos desejados e informa a localizacao de entrega do pedido.
	3. [OUT] O sistema informa o código do produto.

## Entregar Pedido
	1. [OUT] O sistema informa uma listagem contendo código, valor total, tempo e itens dos pedidos pendentes, ordenados do mais antigo para o mais recente.
	2. [IN] O entregador seleciona um pedido.
	3. [OUT] O sistema informa um mapa com a rota até a localizacao de entrega.
	4. [IN] O entregador informa que o pedido foi entregue.

</br>

# Diagrama de classes
<p align="center">
  <img src="https://i.ibb.co/r4JF435/Diagram-Class.png" alt="Diagram-Class" border="0">
</p>
