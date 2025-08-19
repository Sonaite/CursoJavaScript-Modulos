let amigo = {nome: "sonayte",
     peso: 53,
      engordar(p){
        console.log("engordou")
        this.peso += p;
      }}


amigo.engordar(3)
console.log(`Nome: ${amigo.nome} , peso: ${amigo.peso} kg`)