module.exports = {

    posts: [
        {
         id:'gdsgsdgdsdgsd',
         title: "Aumento da gasolina supera margem histórica",
         description: "descrição do mural"
        },
   ],


   getAll(){

    return this.posts

   },
  


   getNew(title, description, generateId){
    
   this.posts.push({id:generateID(), title, description});

   },


   deletePost(id){
         for(let i = 0; i < this.posts.length; i++){
             if(this.posts[i].id == id){
             this.posts.splice(i, 1)
             }
         }
   }



}

function generateID(){
    
    return Math.random().toString(36).substr(2,9);


}
