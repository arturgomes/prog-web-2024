# Migrando de JavaScript para TypeScript

## Introdução

**Data de Lançamento**: Outubro de 2012.

**Desenvolvedor**: Microsoft.

**Líder do Projeto**: Anders Hejlsberg.

**Motivação Primária**: Superar as limitações do JavaScript em aplicações de grande escala, proporcionando uma solução que pudesse melhorar a estruturação do código, facilitar a detecção de erros em tempo de compilação e suportar ferramentas de refatoração e navegação de código mais sofisticadas.

## Benefícios do TypeScript

**Tipagem Estática e Inferência de Tipo**: TypeScript adiciona tipos estáticos opcionais ao JavaScript, que podem ser verificados em tempo de compilação. Isso não apenas ajuda a identificar problemas antes da execução, mas também melhora a documentação do código e a autocompletação em IDEs.

**Compatibilidade com JavaScript**: O TypeScript é uma superset do JavaScript, o que significa que qualquer código JavaScript válido também é válido em TypeScript. Isso facilita a migração de projetos existentes para TypeScript, permitindo que desenvolvedores comecem a se beneficiar da tipagem estática sem uma reescrita completa.

**Recursos Avançados**: Além da tipagem estática, o TypeScript introduz recursos como enums, interfaces, classes, namespaces, e módulos, que não estavam disponíveis no JavaScript padrão na época do lançamento do TypeScript ou que são implementados de forma mais robusta pelo TypeScript.

**Suporte à Evolução do JavaScript**: TypeScript evolui em paralelo com o JavaScript, adicionando suporte para novas funcionalidades do ECMAScript logo após serem propostas. Isso permite que os desenvolvedores utilizem as últimas características do JavaScript de maneira segura e compatível.

## Impacto e Adoção

Desde seu lançamento, TypeScript ganhou rápida adoção entre desenvolvedores e empresas devido à sua capacidade de aprimorar a qualidade do código, a produtividade do desenvolvedor e a manutenção de projetos de software. Grandes frameworks e bibliotecas, como Angular da Google, adotaram TypeScript como sua linguagem de escolha, solidificando ainda mais sua posição no ecossistema de desenvolvimento web.

A adoção do TypeScript reflete uma tendência maior na comunidade de desenvolvimento: um reconhecimento crescente do valor da tipagem estática em linguagens dinâmicas como JavaScript, especialmente no contexto de desenvolvimento de aplicações complexas e em larga escala. Com o suporte contínuo da Microsoft e uma comunidade ativa, o TypeScript continua a evoluir, adicionando novas funcionalidades e melhorias que mantêm a linguagem relevante e poderosa para o desenvolvimento moderno de aplicações web.

## ECMAScript

ECMAScript é o padrão de scripting que serve como base para o JavaScript, além de influenciar outras linguagens de programação como JScript e ActionScript. Desenvolvido e mantido pela Ecma International através do comitê técnico TC39, ECMAScript define as regras, detalhes e diretrizes que as implementações da linguagem devem seguir, garantindo assim uma consistência entre diferentes plataformas e navegadores.

### História e Desenvolvimento

A história do ECMAScript começa em meados dos anos 90, quando a Netscape Communications Corporation, criadora do navegador Netscape Navigator, introduziu o JavaScript. Logo depois, a Netscape apresentou a linguagem à Ecma International para padronização, resultando na primeira edição do ECMAScript em 1997 (ECMA-262).

Desde então, o _ECMAScript passou por várias revisões_, com a atualização mais significativa sendo o _ECMAScript 2015 (conhecido como ES6)_. Esta versão introduziu uma série de novos recursos, como **classes, módulos, promessas, funções de seta, novos tipos de dados (como Map e Set) e sintaxe para operações assíncronas**, entre outros. Essas mudanças tiveram um grande impacto na escrita de JavaScript, tornando o código mais limpo, mais compreensível e mais fácil de manter.

### Versões do ECMAScript

A padronização do ECMAScript segue um ciclo anual de atualização, o que significa que novas funcionalidades são adicionadas à linguagem todo ano. Isso marca uma mudança em relação às atualizações mais espaçadas do passado, permitindo uma evolução mais rápida e constante da linguagem. **Cada versão é identificada pelo ano de sua publicação, como ECMAScript 2016 (ES7), ECMAScript 2017 (ES8), e assim por diante.**

### Importância do ECMAScript

A padronização do ECMAScript desempenha um papel crucial no desenvolvimento web, garantindo que o código JavaScript funcione de maneira consistente em diferentes navegadores e ambientes de execução. Isso permite que os desenvolvedores criem aplicações web complexas e interativas que podem ser usadas por uma ampla audiência, sem se preocupar com incompatibilidades específicas de plataforma.

Além disso, o ECMAScript serve como uma base sólida para o futuro do desenvolvimento web, introduzindo constantemente novos recursos que respondem às necessidades dos desenvolvedores modernos. Por exemplo, o suporte a módulos ECMAScript permite a criação de aplicações JavaScript grandes e bem estruturadas, enquanto os recursos de programação assíncrona facilitam o trabalho com operações que dependem de I/O ou outras atividades que levam tempo.

# Prática

## Configuração do Ambiente

Para começar a usar TypeScript, primeiro precisamos instalá-lo. Você pode fazer isso via npm:

```bash
npm install -g typescript
```

Após a instalação, você pode compilar seus arquivos .ts para .js usando o comando tsc:

```bash

tsc meuArquivo.ts
```

## Tipos Básicos

TypeScript fornece vários tipos básicos que ajudam você a definir o tipo de variáveis. Aqui estão alguns exemplos:

### String

```typescript
let nome: string = "Alice";
```

### Number

```typescript
let idade: number = 30;
```

### Boolean

```typescript
let isAtivo: boolean = true;
```

### Any

O tipo any permite que qualquer tipo de valor seja atribuído, semelhante ao JavaScript:

```typescript
let naoSei: any = 4;
naoSei = "talvez uma string";
naoSei = false; // ok, definitivamente um boolean
```

## Interfaces

As interfaces são uma forma poderosa de definir contratos dentro do seu código, bem como contratos com código externo:

```typescript
interface Usuario {
  nome: string;
  idade: number;
}

function imprimirUsuario(usuario: Usuario) {
  console.log(`Nome: ${usuario.nome}, Idade: ${usuario.idade}`);
}

imprimirUsuario({ nome: "Alice", idade: 30 });
```

## Classes

TypeScript suporta classes e herança, similar ao JavaScript ES6+:

```typescript
class Animal {
  nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }

  mover(distanciaEmMetros: number = 0) {
    console.log(`${this.nome} moveu ${distanciaEmMetros}m.`);
  }
}

class Cobra extends Animal {
  constructor(nome: string) {
    super(nome);
  }
  mover(distanciaEmMetros = 5) {
    console.log("Rastejando...");
    super.mover(distanciaEmMetros);
  }
}

let sam = new Cobra("Sammy a Cobra");
sam.mover();
```

## Conclusão

A migração de JavaScript para TypeScript pode parecer desafiadora no início, mas os benefícios a longo prazo na manutenção do código, na prevenção de erros e no suporte ao desenvolvimento em equipe são inestimáveis. Comece pequeno, aplicando tipos aos seus arquivos JavaScript existentes, e gradualmente explore os recursos avançados que o TypeScript oferece.
