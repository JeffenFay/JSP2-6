//Récupération des éléments par leur type
var tags = document.getElementsByTagName('img');
var i = 0;
//Liste des images de remplacement
var imgReplaceIn = ['./images/image1_2.jpg','./images/image2_2.jpg','./images/image3_2.jpg','./images/image4_2.jpg','./images/image5_2.jpg'];
//Liste des images de remplacement
var imgReplaceOut = ['./images/image1.jpg','./images/image2.jpg','./images/image3.jpg','./images/image4.jpg','./images/image5.jpg'];
//Boucle pour parcourir tout les champs à surcharger
for(i = 0; i < tags.length; i++) {
  //Variable d'initialisation pour chaque image
  var imgHover = document.getElementById(tags[i].id);
  //écouteur qui change l'image
  imgHover.addEventListener('mouseover', function() {
    //change l'image en entrant
    document.getElementById(this.id).src=imgReplaceIn[this.id.charAt(this.id.length-1)-1];
  });
  //écouteur qui change l'image
  imgHover.addEventListener('mouseout', function() {
    //change l'image en entrant
    document.getElementById(this.id).src=imgReplaceOut[this.id.charAt(this.id.length-1)-1];
  });
};
