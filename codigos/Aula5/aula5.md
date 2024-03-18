# CSS e HTML

## **Parte 1: Seletores**

### O que são seletores?

Seletores são padrões usados para selecionar os elementos HTML que você deseja estilizar com suas regras CSS. Eles são o elo entre o documento HTML e o CSS, permitindo que você aplique estilos específicos a elementos específicos, grupos de elementos ou elementos sob certas condições dentro do seu documento HTML.

### Tipos de Seletores

### **1. Seletor de Elemento (Tag)**

O seletor de elemento seleciona todos os elementos HTML correspondentes à tag especificada. Por exemplo, para estilizar todos os parágrafos (**`<p>`**), você usaria:

```css
p {
  color: blue;
  font-size: 16px;
}
```

### **2. Seletor de ID**

O seletor de ID usa o atributo **`id`** de um elemento HTML para selecionar um elemento específico. Cada ID deve ser único dentro de um documento HTML. Para selecionar um elemento com um ID específico, use o prefixo **`#`**. Por exemplo:

```css
#header {
  background-color: navy;
  color: white;
}
```

### **3. Seletor de Classe**

O seletor de classe seleciona elementos com um atributo **`class`** específico. Diferente dos IDs, várias tags podem compartilhar a mesma classe. Para selecionar elementos por classe, use o prefixo **`.`**. Por exemplo:

```css
.button {
  padding: 10px 15px;
  background-color: green;
  color: white;
}
```

### **4. Seletor de Atributo**

Seleciona elementos com base em um atributo e, opcionalmente, em seu valor. Por exemplo, para estilizar todos os elementos **`<input>`** do tipo **`text`**, você usaria:

```css
input[type="text"] {
  border: 2px solid #ccc;
}
```

### **5. Pseudo-Classes**

Pseudo-classes são usadas para definir um estado especial de um elemento. Por exemplo, **`:hover`** pode ser usado para mudar a cor de um botão quando o mouse está sobre ele:

```css
button:hover {
  background-color: red;
}
```

### **6. Pseudo-Elementos**

Pseudo-elementos permitem estilizar partes específicas de um elemento. Por exemplo, **`::first-letter`** aplica estilo à primeira letra de um parágrafo:

```css
p::first-letter {
  font-size: 200%;
  color: tomato;
}
```

### Exemplos Práticos de Como Usar Seletores

1. **Estilizando Links**: Use pseudo-classes para estilizar links de maneiras diferentes dependendo do seu estado:

```css
a:link {
  color: blue;
} /* Links não visitados */
a:visited {
  color: purple;
} /* Links visitados */
a:hover {
  color: red;
} /* Mouse sobre o link */
a:active {
  color: yellow;
} /* Link no momento do clique */
```

1. **Destacando Elementos com Classe**: Aplicar um estilo específico para destacar elementos importantes:

```css
.highlight {
  background-color: yellow;
  font-weight: bold;
}
```

1. **Formatando Formulários**: Estilizar diferentes tipos de campos de entrada usando seletores de atributo:

```css
input[type="text"] {
  background-color: #f0f0f0;
}
input[type="submit"] {
  border: none;
  color: white;
  background-color: black;
}
```

1. **Estilizando a Primeira Linha do Parágrafo**: Use o pseudo-elemento **`::first-line`** para adicionar um destaque especial à primeira linha de todos os parágrafos:

```css
p::first-line {
  font-weight: bold;
  font-size: 1.2em;
}
```

## **Parte 2: Propriedades**

### Introdução às Propriedades CSS

Propriedades CSS são os aspectos dos elementos HTML que você pode estilizar usando CSS. Cada propriedade controla uma característica específica, como cor, tamanho, espaçamento, layout, entre outros. Ao aplicar uma propriedade CSS a um elemento, você está definindo como esse elemento deve ser exibido na página web.

### Como as Propriedades Modificam os Elementos

Propriedades CSS modificam elementos HTML alterando seu layout, aparência ou comportamento. Quando um navegador renderiza uma página web, ele lê o código CSS associado e aplica as propriedades definidas aos elementos correspondentes. Isso inclui tudo, desde cores e tamanhos até posições e animações.

### Propriedades Comuns e Como Usá-las

### **Cor (`color` e `background-color`)**

- **`color`** altera a cor do texto de um elemento.
- **`background-color`** modifica a cor de fundo de um elemento.

Exemplo:

```css
p {
  color: darkblue;
  background-color: lightgrey;
}
```

### **Tamanho da Fonte (`font-size`)**

- **`font-size`** define o tamanho do texto de um elemento. Pode ser especificado em unidades como pixels (**`px`**), em (**`em`**), pontos (**`pt`**), entre outros.

Exemplo:

```css
p {
  font-size: 16px;
}
```

### **Margem (`margin`)**

- **`margin`** controla o espaço ao redor de um elemento. Pode ser definido para cada lado do elemento (top, right, bottom, left) individualmente ou todos juntos.

Exemplo:

```css
.box {
  margin: 20px; /* Todos os lados */
  margin-top: 10px; /* Apenas topo */
}
```

### **Preenchimento (`padding`)**

- **`padding`** é o espaço entre o conteúdo de um elemento e sua borda. Assim como a margem, pode ser definido para cada lado especificamente ou todos de uma vez.

Exemplo:

```css
.box {
  padding: 15px; /* Todos os lados */
  padding-bottom: 5px; /* Apenas base */
}
```

### **Largura e Altura (`width` e `height`)**

- **`width`** e **`height`** definem a largura e a altura de um elemento, respectivamente. Podem ser fixos (em **`px`**, **`cm`**, etc.) ou flexíveis (em **`%`**, **`vw`**/**`vh`**).

Exemplo:

```css
.box {
  width: 100px;
  height: 200px;
}
```

### **Bordas (`border`)**

- **`border`** define a borda ao redor de um elemento, incluindo estilo, cor e largura. É uma maneira de adicionar definição e separação entre os elementos.

Exemplo:

```css
.box {
  border: 2px solid black;
}
```

### **Propriedade `display` no CSS**

A propriedade **`display`** no CSS é fundamental para controlar o layout dos elementos na página web. Ela determina como um elemento é exibido no documento e influencia o layout dos elementos ao redor. Aqui estão os valores mais comuns para a propriedade **`display`** e o que cada um faz:

### **`block`**

- Elementos **`block`** sempre começam em uma nova linha e ocupam toda a largura disponível, independentemente de sua largura necessária. Exemplos de elementos que são **`block`** por padrão incluem **`<div>`**, **`<p>`**, e **`<h1>`** a **`<h6>`**.
- **Exemplo de uso:** Ideal para seções de conteúdo, contêineres, e qualquer lugar onde você deseja que o elemento se estenda pela largura total.

### **`inline`**

- Elementos **`inline`** não começam em uma nova linha e apenas ocupam a largura que seu conteúdo necessita. Eles não podem ter largura e altura definidas. Exemplos incluem **`<span>`**, **`<a>`**, e **`<img>`**.
- **Exemplo de uso:** Útil para elementos dentro de um bloco de texto, como links ou ênfase em palavras.

### **`inline-block`**

- Combina comportamentos dos tipos **`inline`** e **`block`**. Elementos **`inline-block`** ficam na mesma linha se houver espaço, mas também podem ter largura e altura definidas.
- **Exemplo de uso:** Bom para criar uma lista de itens que são dispostos lado a lado, mas cada um precisa ter dimensões específicas.

### **`none`**

- Elementos com **`display: none`** são completamente removidos do layout da página. Eles não ocupam espaço e, essencialmente, ficam invisíveis, mas ainda existem no DOM.
- **Exemplo de uso:** Útil para ocultar elementos sem removê-los completamente, permitindo que sejam exibidos novamente com JavaScript.

### **`flex`**

- Ativa o layout Flexbox para um contêiner e seus filhos. O Flexbox é um modelo de layout unidimensional que permite que os itens dentro do contêiner sejam distribuídos, alinhados e espaçados de maneira flexível.
- **Exemplo de uso:** Excelente para criar layouts responsivos, alinhar itens horizontal ou verticalmente, e distribuir espaço dentro de um contêiner.

### **`grid`**

- Ativa o layout Grid para um contêiner e seus filhos. O Grid é um sistema de layout bidimensional que permite criar layouts complexos com linhas e colunas.
- **Exemplo de uso:** Ideal para construir designs de página inteira com áreas complexas, como cabeçalhos, rodapés, seções principais e barras laterais.

### **`table`**, **`table-row`**, **`table-cell`**

- Esses valores fazem com que o elemento se comporte como tabelas, linhas de tabela ou células de tabela, respectivamente. Embora tabelas HTML devam ser usadas para dados tabulares, esses valores de display podem ser úteis para estilização específica.
- **Exemplo de uso:** Pode ser útil para alinhar conteúdo de maneira tabular sem usar a marcação de tabela **`<table>`**.

Cada um desses valores de **`display`** oferece diferentes possibilidades para manipulação do layout dos elementos em uma página web, permitindo que os desenvolvedores criem interfaces ricas e responsivas com facilidade. A escolha do valor depende do comportamento de layout desejado para os elementos.

Exemplo:

```css
.container {
  display: flex;
}
```

### Exemplo de um cartão de apresentação

Aqui está um exemplo de HTML que utiliza as classes CSS do exemplo do cartão de perfil que discutimos anteriormente. Este HTML deve ser usado em conjunto com o CSS fornecido para criar um cartão de perfil estilizado.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemplo de cartão de perfil</title>
    <style>
      body * {
        font-family: "Roboto", sans-serif;
      }

      .profile-card {
        width: 300px;
        padding: 20px;
        margin: auto;
        background-color: #f9f9f9;
        border: 1px solid #ddd;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .profile-name {
        font-size: 20px;
        color: #333;
      }

      .profile-description {
        font-size: 14px;
        color: #666;
      }

      .profile-button {
        display: block;
        width: 100%;
        padding: 10px;
        margin-top: 20px;
        border-radius: 12px;
        background-color: darkblue;
        color: white;
        text-align: center;
        border: none;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div class="profile-card">
      <h2 class="profile-name">Fulano da Silva</h2>
      <p class="profile-description">
        Vivamus ante velit, cursus a nisi ac, pharetra fringilla odio. Curabitur
        ut dui ipsum. Vestibulum et massa semper, dapibus est at, venenatis
        tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia curae; Aenean nec erat tincidunt, posuere est dapibus,
        consequat urna. Morbi scelerisque nisl id luctus porta. Duis vitae
        aliquet mi.
      </p>
      <button class="profile-button">Contato</button>
    </div>
  </body>
</html>
```

Esse código cria um cartão de perfil simples com um título, descrição e um botão. O CSS está embutido dentro da tag **`<style>`** no cabeçalho do documento para simplificar a implementação. Você pode copiar e colar este código em um arquivo HTML para visualizar o cartão de perfil em seu navegador.

Se preferir manter o CSS em um arquivo separado, você pode mover o CSS para um arquivo **`.css`** externo e referenciá-lo no seu documento HTML usando a tag **`<link>`**.

## **Parte 3: Flexbox**

### Introdução ao Flexbox

Flexbox, ou Flexible Box Layout, é um modelo de layout unidimensional projetado para distribuir espaço e alinhar itens em contêineres, mesmo quando o tamanho dos itens é desconhecido ou dinâmico. Ele proporciona uma maneira mais eficiente de organizar, alinhar e distribuir espaço entre itens em um contêiner, especialmente quando o layout deve se ajustar a diferentes tamanhos de tela.

### Principais Propriedades do Flexbox

### **`display: flex`**

- Ativa o Flexbox em um contêiner, tornando-o um contêiner flexível e seus filhos diretos em itens flexíveis.
- **Exemplo:**
  ```css
  .container {
    display: flex;
  }
  ```

### **`justify-content`**

- Alinha os itens flexíveis horizontalmente e distribui espaço extra quando os itens não ocupam todo o contêiner.
- Valores comuns: **`flex-start`**, **`flex-end`**, **`center`**, **`space-between`**, **`space-around`**.
- **Exemplo:**
  ```css
  .container {
    justify-content: space-between;
  }
  ```

### **`align-items`**

- Alinha os itens flexíveis verticalmente dentro do contêiner.
- Valores comuns: **`flex-start`**, **`flex-end`**, **`center`**, **`baseline`**, **`stretch`**.
- **Exemplo:**
  ```css
  .container {
    align-items: center;
  }
  ```

### **`flex-direction`**

- Define a direção dos itens flexíveis dentro do contêiner.
- Valores: **`row`** (padrão), **`row-reverse`**, **`column`**, **`column-reverse`**.
- **Exemplo:**
  ```css
  .container {
    flex-direction: column;
  }
  ```

### Exemplos Práticos de Layout com Flexbox

1. **Centrar um item no contêiner:**

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.item {
  width: 100px;
  height: 100px;
  background-color: coral;
}
```

1. **Criar um cabeçalho com logotipo à esquerda e itens de navegação à direita:**

```css
.header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.logo {
  flex: 1;
}
.nav {
  display: flex;
  gap: 10px;
}
```

1. **Distribuir igualmente três cartões em uma linha:**

```css
.container {
  display: flex;
  justify-content: space-around;
}
.card {
  width: 30%;
  /* Estilizações adicionais */
}
```

### Games para Praticar o Flexbox

- **Flexbox Froggy**: Um jogo divertido onde você ajuda o Froggy e seus amigos encontrando o caminho para os nenúfares usando propriedades Flexbox. Disponível em [flexboxfroggy.com](http://flexboxfroggy.com/).
- **Flexbox Defense**: Outro jogo interativo onde você usa Flexbox para posicionar torres de defesa contra invasores. Acesse em [flexboxdefense.com](http://www.flexboxdefense.com/).

Esses jogos são excelentes recursos para aprender e praticar o Flexbox de maneira divertida e interativa. Eles cobrem uma ampla gama de propriedades e casos de uso, ajudando a solidificar o entendimento do modelo Flexbox.

### **Parte 4: CSS Grid Layout**

### Introdução ao CSS Grid Layout

CSS Grid Layout é um sistema de layout bidimensional que oferece uma maneira poderosa e flexível de organizar elementos em linhas e colunas. Diferentemente do Flexbox, que é mais adequado para layouts unidimensionais (ou seja, uma coluna ou uma linha), o Grid foi projetado para lidar com ambos os eixos simultaneamente, tornando-o ideal para construir designs complexos de página inteira.

### Principais Propriedades do Grid

### **`display: grid` ou `display: inline-grid`**

- Ativa o Grid Layout em um contêiner. **`grid`** faz o contêiner se comportar como um bloco, enquanto **`inline-grid`** o faz se comportar como um elemento inline.
- **Exemplo:**
  ```css
  .container {
    display: grid;
  }
  ```

### **`grid-template-columns` e `grid-template-rows`**

- Define o tamanho das colunas e linhas no grid. Você pode especificar o tamanho de cada coluna/linha usando unidades como **`px`**, **`%`**, **`fr`** (frações do espaço disponível), etc.
- **Exemplo:**
  ```css
  .container {
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 100px auto 200px;
  }
  ```

### **`grid-column` e `grid-row`**

- Define a posição e o espaço que um item de grid ocupa nas colunas e linhas. Aceita valores de início/término para estender itens através de várias colunas ou linhas.
- **Exemplo:**
  ```css
  .item {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
  ```

### **`justify-items`, `align-items`, `place-items`**

- Controla o alinhamento dos itens dentro de suas células de grid no eixo horizontal (**`justify-items`**), vertical (**`align-items`**) ou ambos (**`place-items`**).
- **Exemplo:**
  ```css
  .container {
    justify-items: center;
    align-items: start;
  }
  ```

### **`justify-content`, `align-content`, `place-content`**

- Controla o alinhamento do próprio grid dentro do contêiner em que está, similar a como **`justify-content`** e **`align-items`** funcionam no Flexbox, mas para todo o grid.
- **Exemplo:**
  ```css
  .container {
    justify-content: space-around;
    align-content: center;
  }
  ```

### **`gap`, `row-gap`, `column-gap`**

- Define o espaço entre as linhas (**`row-gap`**), colunas (**`column-gap`**) ou ambos (**`gap`**) dentro do grid. Isso ajuda a criar espaçamento consistente entre os itens de grid.
- **Exemplo:**
  ```css
  .container {
    gap: 20px;
    row-gap: 15px;
  }
  ```

### Exemplos Práticos de Layout com Grid

1. **Layout de Galeria de Imagens:**

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.image {
  width: 100%;
  /* Estilizações adicionais */
}
```

1. **Página Principal com Cabeçalho, Conteúdo, Barra Lateral e Rodapé:**

```css
.page {
  display: grid;
  grid-template-areas:
    "header header header"
    "content sidebar sidebar"
    "footer footer footer";
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto 1fr auto;
}

.header {
  grid-area: header;
}
.content {
  grid-area: content;
}
.sidebar {
  grid-area: sidebar;
}
.footer {
  grid-area: footer;
}
```

1. **Cards de Produtos com Alturas Uniformes:**

```css
.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.product {
  display: grid;
  /* Estilizações adicionais */
}
```

### Games para Praticar o CSS Grid

- **CSS Grid Garden**: Um jogo onde você usa CSS Grid para regar seu jardim, ajudando a entender como funciona o posicionamento e alinhamento de grid. Disponível em [cssgridgarden.com](https://cssgridgarden.com/).
- **Grid Critters**: Um jogo de aventura que ensina CSS Grid de maneira interativa e divertida. Informações

## Vamos ver os exemplos de código

Exemplo para Grid e Flex
