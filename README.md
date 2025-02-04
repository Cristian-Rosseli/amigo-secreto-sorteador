<h1>Amigo Secreto</h1>

<h2>Visão Geral</h2>
<p>
  O <strong>Amigo Secreto</strong> é uma aplicação web interativa e simples para organizar sorteios de amigo secreto.
  Com uma interface amigável e intuitiva, o sistema permite que você adicione nomes de participantes e realize sorteios aleatórios,
  garantindo que cada nome seja sorteado apenas uma vez por ciclo.
</p>

<h2>Funcionalidades</h2>
<ul>
  <li>
    <strong>Adição de Participantes:</strong> Insira nomes únicos para participar do sorteio. O sistema valida para evitar entradas vazias e nomes duplicados.
  </li>
  <li>
    <strong>Exibição Dinâmica:</strong> Visualize instantaneamente a lista de nomes adicionados à medida que eles são inseridos.
  </li>
  <li>
    <strong>Sorteio Aleatório:</strong> Realiza o sorteio de forma aleatória. Cada participante só pode ser sorteado uma vez até que a lista seja reiniciada.
  </li>
  <li>
    <strong>Reset da Lista:</strong> Permite limpar a tela e reiniciar a lista de nomes, possibilitando novos sorteios.
  </li>
  <li>
    <strong>Acessibilidade:</strong> 
    <ul>
      <li>Pressione <strong>Enter</strong> para adicionar um novo nome.</li>
      <li>Utilize a tecla <strong>Ctrl</strong> como atalho para realizar o sorteio.</li>
    </ul>
  </li>
</ul>

<h2>Tecnologias Utilizadas</h2>
<ul>
  <li><strong>HTML5:</strong> Estrutura e marcação da página, garantindo semântica e acessibilidade.</li>
  <li><strong>CSS3:</strong> Responsável pela estilização e layout da interface (referenciado via <code>style.css</code>).</li>
  <li><strong>JavaScript:</strong> Lógica para manipulação do DOM, validação dos nomes, atualização das listas e execução do sorteio.</li>
</ul>

<h2>Instalação</h2>
<ol>
  <li>
    <p><strong>Clone o repositório:</strong></p>
    <pre><code>git clone https://github.com/seu-usuario/amigo-secreto.git</code></pre>
  </li>
  <li>
    <p><strong>Navegue até o diretório do projeto:</strong></p>
    <pre><code>cd amigo-secreto</code></pre>
  </li>
  <li>
    <p><strong>Abra o arquivo <code>index.html</code> no seu navegador:</strong></p>
    <p>Basta abrir o arquivo diretamente no seu navegador preferido para utilizar a aplicação.</p>
  </li>
</ol>

<h2>Uso</h2>
<ul>
  <li>
    <strong>Adicionar Nome:</strong> Digite o nome do participante no campo de texto e clique em <em>"Adicionar"</em> ou pressione a tecla <strong>Enter</strong>.
  </li>
  <li>
    <strong>Limpar Nomes:</strong> Clique no botão <em>"Limpar nomes"</em> para resetar a lista de participantes e os resultados do sorteio.
  </li>
  <li>
    <strong>Realizar Sorteio:</strong> Clique no botão <em>"Sortear amigo"</em> ou utilize o atalho <strong>Ctrl</strong> para sortear um amigo secreto de forma aleatória.
    Caso todos os nomes já tenham sido sorteados, uma mensagem informativa será exibida solicitando a adição de novos nomes ou a reinicialização da lista.
  </li>
</ul>

<h2>Estrutura do Projeto</h2>
<ul>
  <li>
    <strong><code>index.html</code>:</strong> Contém a estrutura principal da interface, definindo a organização dos elementos e a inclusão dos recursos (CSS e JavaScript).
  </li>
  <li>
    <strong><code>app.js</code>:</strong> Implementa a lógica da aplicação, incluindo:
    <ul>
      <li>Validação e adição de nomes.</li>
      <li>Atualização dinâmica da lista de participantes.</li>
      <li>Lógica do sorteio e controle para que cada nome seja sorteado uma única vez.</li>
      <li>Eventos para interação com o usuário (teclas <strong>Enter</strong> e <strong>Ctrl</strong>).</li>
    </ul>
  </li>
</ul>

<h2>Contribuição</h2>
<p>
  Contribuições são sempre bem-vindas! Se você deseja colaborar com este projeto, por favor, siga as diretrizes:
</p>
<ol>
  <li>Faça um <strong>Fork</strong> do repositório.</li>
  <li>Crie uma <strong>branch</strong> com sua feature (<code>git checkout -b minha-feature</code>).</li>
  <li>Realize suas modificações e faça um <strong>commit</strong> das alterações (<code>git commit -m "Adiciona nova feature"</code>).</li>
  <li>Envie sua branch (<code>git push origin minha-feature</code>).</li>
  <li>Abra um <strong>Pull Request</strong> para revisão.</li>
</ol>


<h2>Contato</h2>
<p>
  Para dúvidas, sugestões ou contribuições, entre em contato:
</p>
<ul>
  <li><strong>Email:</strong> cristianhsilvarosseli@gmail.com</li>
</ul>

<p>
  Desenvolvido com dedicação para tornar os sorteios de amigo secreto uma experiência prática e divertida!
</p>
