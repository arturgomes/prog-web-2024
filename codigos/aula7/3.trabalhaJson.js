const comments = require("./comments.json")
const posts = require("./posts.json")
// console.log("🚀 ~ todos:", todos)

/**
 * Vamos criar um outro objeto que conterá:
 * 1 -  uma lista de postagens
 *    - para cada postagem, teremos alguns comentários
 * */
const minhaPostagem = {
  userId: 1,
  id: 1,
  title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
// desestruturação de objetos
const { userId: usuarioId, title: tituloDoPost, body: corpoDoPost } = minhaPostagem;

function retornaDois() {
  return [1,2]
}
const [primeiro, segundo] = retornaDois();
console.log("🚀 ~ primeiro, segundo:", primeiro, segundo)

// console.log("minhaPostagem.userId", minhaPostagem.userId)
// console.log('userId', userId)
// console.log(`Então, "O usuario" ${usuarioId} tem postagem de titulo: ${tituloDoPost} e o conteudo é "${corpoDoPost}"`)

// spread operator

const vetorDeAnimais = ["gato", "cachorro", "papagaio"]
console.log("🚀 ~ vetorDeAnimais:", vetorDeAnimais)

const fazendinha = ["galinha", "galo", ...vetorDeAnimais]
console.log("🚀 ~ fazendinha:", fazendinha)

const novaPostagemComComentarios = {
  ...minhaPostagem,
  comentarios: comments.filter(comment => comment.postId === minhaPostagem.id)
};
// console.log("🚀 ~ novaPostagemComComentarios:", novaPostagemComComentarios)


const todasPostagens = posts.map(post => ({...post, comments: comments.filter(comment => comment.postId === post.id)}))
console.log("🚀 ~ todasPostagens:", JSON.stringify(todasPostagens))


/**
 * Postagem
 * {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },

  Comentario

  {
    "postId": 2,
    "id": 8,
    "name": "et omnis dolorem",
    "email": "Mallory_Kunze@marie.org",
    "body": "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
  },
 */

// const feed = posts.map((post,index) => ({}))