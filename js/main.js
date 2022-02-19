let product1 = {
  name: "Dress",
  desc: "All-Over Floral Print Tiered Dress with Elbow Sleeves and Tie-Up",
  price: 580,
  id: 1,
};
let product2 = {
  name: "Pants",
  desc: "Colour Block Jog Pants with Pockets and Drawstring Closure",
  price: 300,
  id: 2,
};

let product3 = {
  name: "Sweatshirt",
  desc: "Dumbo Print Sweatshirt with Crew Neck and Long Sleeves",
  price: 360,
  id: 3,
};

let product4 = {
  name: "Top",
  desc: "All-Over Floral Print High Neck Top with Short Sleeves",
  price: 240,
  id: 4,
};

let product5 = {
  name: "Top",
  desc: "Textured Crew Neck Top with Elbow Sleeves",
  price: 280,
  id: 5,
};

let product6 = {
  name: "Sweatshirt",
  desc: "All-Over Mickey Mouse and Friends Print Sweatshirt with Round Neck and Long Sleeves",

  price: 280,
  id: 6,
};

let product7 = {
  name: "Top",
  desc: "Solid Top with Round Neck and Drop Shoulder Sleeves",

  price: 330,
  id: 7,
};

let product8 = {
  name: "Jeans",
  desc: "All-Over Floral Print High-Rise Denim Jeans with Pockets and Zip Closure",

  price: 280,
  id: 8,
};

// array of product objects 
let products_opjs = [  product1,  product2,  product3,  product4,  product5,  product6,  product7,  product8,];

/**
 * function that takes : * 
 * @param {*} p_num  is the product number
 * @param {*} btn  is the button  html element
 * 
 * and show the details of this product
 *
 */
function showDetails(p_num, btn) {
  for (let index = 0; index < products_opjs.length; index++) {
  
    if (p_num === products_opjs[index].id && btn.innerHTML === "Show Details") {
      document.getElementById(`p${p_num}-name`).innerHTML = products_opjs[index].name;
      document.getElementById(`p${p_num}-discrip`).innerHTML = products_opjs[index].desc;
      document.getElementById(`p${p_num}-price`).innerHTML = products_opjs[index].price + " EGP";

      btn.innerHTML = "Hide Details";
      btn.style.color = "#fff";
      btn.style.backgroundColor = "#f05a5b";

      return;
    } else if (btn.innerHTML === "Hide Details") {
      document.getElementById(`p${p_num}-name`).textContent = "";
      document.getElementById(`p${p_num}-discrip`).textContent = "";
      document.getElementById(`p${p_num}-price`).textContent = "";
      btn.innerHTML = "Show Details";

      btn.style.color = "#ffffff80";
      btn.style.backgroundColor = "#2B2D42";

      return;
    }
  }
}

/**
 * function is called when the product is hoverd(onmouseenter())
 * @param {*} img 
 * change the img src path to another img
 */
function changePic(img) {
 
  let str = img.src.slice(0, img.src.length - 4);

  img.src = str + "back.jpg";
}

/**
 * function is called when the mouse leave the product img (onmouseout())
 * @param {*} img 
 * get back the orignal img
 */

function picBack(img) {
  let arr = img.src.split("back");
  let newSrc = "";
  for (const item of arr) {
    newSrc += item;
  }


  img.src = newSrc;
}

// **********************************************************************88
//     js fuction of (product.html)
//********************************************************************* */
let currentPic_path = "img/product1.jpg";
let old_path = "";


/**
 * function is called when click the small images to show in the big image
 * @param {*} new_pic 
 */
function changeCurrent(new_pic) {
  

  old_path = currentPic_path;
 

  currentPic_path = new_pic.src;

  document.getElementById("current").src = currentPic_path;
  new_pic.src = old_path;
}

/**
 * function to show and hide div 
 * @param {*}  a span element 
 */
function hide_showText(element) {
 
  if (element.innerHTML === "See less") {
    document.getElementById("see-more").style.display = "none";
    document.getElementById("dots").innerHTML = "....";
    element.innerHTML = "See more >>>";
  } else {
    document.getElementById("see-more").style.display = "block";
    document.getElementById("dots").innerHTML = "";
    element.innerHTML = "See less";
  }
}


/**
 * function that color the chozen size
 * @param {*} chosen_size 
 */
function chooseSize(chosen_size) {
  let newSize = chosen_size.innerHTML;

  let sizeList = document.getElementById("sizes").children;
  for (const item of sizeList) {
    if (newSize === item.innerHTML) {
      item.style.backgroundColor = "#f05a5b";
    } else {
      item.style.backgroundColor = "#2B2D42";
    }
  }
}
