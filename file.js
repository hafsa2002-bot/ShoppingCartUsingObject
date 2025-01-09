const sections = {
    Earings : [
        {img_src : 'boucle1.jpg', item_name : "Fleur boucles d\'oreilles", price : 260, qte_id : 'bcl1', icon_id : 'icon_bcl1',},
        {img_src : 'boucle2.jpg', item_name : 'Glowy boucles d\'orielles', price : 390, qte_id : 'bcl2', icon_id : 'icon_bcl2',},
        {img_src : 'boucle3.jpg', item_name : 'Ajourée main de fatma boucles d\'oreilles', price : 140, qte_id : 'bcl3', icon_id : 'icon_bcl3',}, 
        {img_src : 'boucle4.jpg', item_name : 'Round boucles d\'oreilles', price : 570, qte_id : 'bcl4', icon_id : 'icon_bcl4',},
        {img_src : 'boucle5.jpg', item_name : 'Little rose boucles d\'oreilles', price : 200, qte_id : 'bcl5', icon_id : 'icon_bcl5',},
        {img_src : 'boucle6.jpg', item_name : 'Purity boucles d\'oreilles', price : 190, qte_id : 'bcl6', icon_id : 'icon_bcl6',},
    ],
    Rings : [
        {img_src : 'baguef1.jpg', item_name : 'Bague ouverte Idyllia', price : 129, qte_id : 'bg1', icon_id : 'icon_bg1',},
        {img_src : 'baguef2.jpg', item_name : 'Bague cocktail Hyperbola', price : 220, qte_id : 'bg2', icon_id : 'icon_bg2',},
        {img_src : 'baguef3.jpg', item_name : 'Bague Idyllia', price : 200, qte_id : 'bg3', icon_id : 'icon_bg3',},
    ],
    Necklaces : [
        {img_src : 'collier1.jpg', item_name : 'Prestige collier', price : 260, qte_id : 'col1', icon_id : 'icon_col1',},
        {img_src : 'collier2.jpg', item_name : 'Eye collier', price : 220, qte_id : 'col2', icon_id : 'icon_col2',},
        {img_src : 'collier3.jpg', item_name : 'Little lily collier', price : 245, qte_id : 'col3', icon_id : 'icon_col3',},
        {img_src : 'collier4.jpg', item_name : 'Elegent collier', price : 225,  qte_id : 'col4',  icon_id : 'icon_col4',},
        {img_src : 'collier5.jpg', item_name : 'Zelij Tiny Collier', price : 300, qte_id : 'col5', icon_id : 'icon_col5',},
        {img_src : 'collier6.jpg', item_name : 'Beauty collier', price : 370, qte_id : 'col6', icon_id : 'icon_col6',},
    ],
    Watches : [
        {img_src : 'montref1.jpg', item_name : 'Montre Octea Chrono', price : 430, qte_id : 'mtr1', icon_id : 'icon_mtr1',},
        {img_src : 'montref2.jpg', item_name : 'Montre Certa', price : 350, qte_id : 'mtr2', icon_id : 'icon_mtr2',},
        {img_src : 'montref3.png', item_name : 'Montre Octea Lux Sport', price : 430, qte_id : 'mtr3', icon_id : 'icon_mtr3',},
        {img_src : 'montref4.jpg', item_name : 'Montre Cosmopolitan', price : 250, qte_id : 'mtr4', icon_id : 'icon_mtr4',},
        {img_src : 'montref5.jpg', item_name : 'Montre Crystalline Aura', price : 430, qte_id : 'mtr5', icon_id : 'icon_mtr5',},
        {img_src : 'montref6.jpg', item_name : 'Montre Crystalline Delight', price : 350, qte_id : 'mtr6', icon_id : 'icon_mtr6',},
    ]
}

    for(var section in sections){
        var divSection = document.getElementById(section)
        divSection.setAttribute('class', 'flex flex-wrap  gap-14')
        for(var x of sections[section]){
            console.log("x: ", x['item_name'])
            let safeItemName = x['item_name'].replace(/'/g, "\\'");
            var div_cart = document.createElement('div')
            div_cart.setAttribute('class', 'col relative  hover:shadow-xl  w-1/4 m-auto text-[#212529] border-[0.3px] bg-gray-50  rounded-md overflow-hidden')
            div_cart.innerHTML = `
                <img src="images/${x['img_src']}" class="card-img-top w-full h-80 border-b " alt="">
                <div onclick="addToFvrt('images/${x['img_src']}', '${safeItemName}', ${x['price']}, '${x['icon_id']}')" class="flex justify-center items-center absolute top-3 right-3 bg-gray-100 hover:bg-pink-200 cursor-pointer w-10 h-10 rounded-full">
                    <i id="${x['icon_id']}" class=" fa-regular fa-heart fa-xl" style="color: #e6447a;"></i>
                </div>
                <div class="card_body flex flex-col items-center pt-3">
                    <h5 class="card-title h-14  text-lg font-semibold text-center leading-6 text-[#212529] mb-2 px-2">${x['item_name']}</h5>
                    <h5 class="card-title  text-lg font-semibold text-center leading-6 text-[#212529] mb-2">${x['price']} dh</h5>
                    <div class="w-full h-9 py-5 px-16 bg-[#e6447a] text-white text-base flex justify-between items-center mt-2">
                        <button onclick="minus('images/${x['img_src']}', ${x['price']}, '${x['qte_id']}')" class="text-white font-semibold text-xl">-</button>
                        <p id="${x['qte_id']}" class="text-white font-semibold text-xl">0</p>
                        <button type="submit" onclick="plus('images/${x['img_src']}', '${safeItemName}', ${x['price']}, '${x['qte_id']}')" class="text-white font-semibold text-xl">+</button>
                    </div>
                </div>
            `
            divSection.appendChild(div_cart)
        }
    }
    

    function navigateToSection(id) {
        if (id !== "#") {
            window.location.hash = id; // Navigate to the section with the specified ID
        }
    }

    function createDiv(img_src, item_name, qty, price, pQtID){ 
        var newDiv = document.createElement('div')
        var divID = 'div_' + img_src
        var div_panier = document.getElementById('panier')
        var qte_id = 'qte_' + img_src
        var price_id = 'price_' + img_src  
        newDiv.setAttribute('id', divID) 
        newDiv.setAttribute('class', 'flex justify-between px-5 py-3 border-t border-b')
        newDiv.innerHTML = `
        <img src= "${img_src}" class="item_img w-20 h-20 border">
        <div class="divOne text-right w-3/5">
            <p class="pName font-semibold">${item_name}</p>
            <p class="pQte"><span class="spanQte pr-4" id=${qte_id}>${qty}</span>pcs</p>
            <p class="pPrice"><span class="spanPrice pr-4" id="${price_id}">${qty * price}</span>dh</p>
        </div>
        <div class="divTwo">
            <i class="icon cursor-pointer fa-solid fa-trash" style="color: #e6447a;" onclick="deleteItem(' ${divID}', '${img_src}', '${pQtID}')"></i>
        </div>
        `
        div_panier.appendChild(newDiv)
    }

    function plus(image_src, item_name, item_price, qty_id){
        var qte = document.getElementById(qty_id)
        var span_qteID = 'qte_' + image_src
        var span_priceID = 'price_' + image_src
        if(qte.innerHTML == "0"){
            qte.innerHTML = (parseInt(qte.innerHTML) + 1).toString()
            createDiv(image_src, item_name, qte.innerHTML, item_price, qty_id)
            var total = document.getElementById('total')
            total.innerHTML = parseInt(total.innerHTML) + (item_price * parseInt(qte.innerHTML))
            console.log("total.innerHTML : ", total.innerHTML) 
        }else if(parseInt(qte.innerHTML) > 0 && parseInt(qte.innerHTML) < 7){
            qte.innerHTML = (parseInt(qte.innerHTML) + 1).toString()
            var span_qt = document.getElementById(span_qteID)
            span_qt.innerHTML = (parseInt(span_qt.innerHTML) + 1).toString()
            var span_price = document.getElementById(span_priceID)
            span_price.innerHTML = item_price * parseInt(qte.innerHTML)
            var total = document.getElementById('total')
            total.innerHTML = parseInt(total.innerHTML) + item_price
            console.log("total.innerHTML : ", total.innerHTML)
        }
    }

    function minus(image_src, item_price, qty_id){
        var qte = document.getElementById(qty_id)
        var divID = 'div_' + image_src
        if(parseInt(qte.innerHTML) > 1){
            var span_qteID = 'qte_' + image_src
            var span_priceID = 'price_' + image_src
            var spanQte = document.getElementById(span_qteID)
            var spanPrice = document.getElementById(span_priceID)
            spanQte.innerHTML = (parseInt(spanQte.innerHTML) - 1).toString()
            qte.innerHTML = (parseInt(qte.innerHTML) - 1).toString()
            spanPrice.innerHTML = (parseInt(spanPrice.innerHTML) - item_price).toString()
            var total = document.getElementById('total')
            total.innerHTML = parseInt(total.innerHTML) - item_price
        }else if(parseInt(qte.innerHTML) == 1){
            qte.innerHTML = "0"
            deleteItem(divID, image_src, qty_id)
        }
    }

    function deleteItem(div_id, image_src, qty_id){
        var span_qteID = 'qte_' + image_src
        var span_priceID = 'price_' + image_src
        var spanQte = document.getElementById(span_qteID)
        var spanPrice = document.getElementById(span_priceID)
        var ele = document.getElementById(div_id)
        var divAttr = ele.getAttribute('class') + ' hidden'
        ele.setAttribute('class', divAttr)
        console.log(ele)
        // update_totale
        var total = document.getElementById('total')
        total.innerHTML = parseInt(total.innerHTML) - parseInt(spanPrice.innerHTML)
        // update qte of the item
        spanQte.innerHTML = "0"
        // update price in span
        spanPrice.innerHTML = "0"
        var parent = document.getElementById('panier')
        parent.removeChild(ele)
        var qte = document.getElementById(qty_id)
        qte.innerHTML = "0"
    }

    function createDivFav(img_src, item_name, price, iconID){  
        var newDiv = document.createElement('div')
        var divID = 'fav_' + img_src
        var div_panier = document.getElementById('favoriteItems')
        var price_id = 'priceFav_' + img_src  
        newDiv.setAttribute('id', divID) 
        newDiv.setAttribute('class', 'flex justify-between px-5 py-3 border-t border-b')
        newDiv.innerHTML = `
        <img src= "${img_src}" class="item_img w-20 h-20 border">
        <div class="divOne text-right w-3/5">
            <p class="pName font-semibold">${item_name}</p>
            <p class="pPrice"><span class="spanPrice pr-4" id="${price_id}">${price}</span>dh</p>
        </div>
        <div class="divTwo">
            <i class="icon cursor-pointer fa-solid fa-trash" style="color: #e6447a;" onclick="deleteFromFvrt('${img_src}' , '${iconID}')"></i>
        </div>
        `
        div_panier.appendChild(newDiv)
    }

    function addToFvrt(imageSrc, itemName, itemPrice, iconID){
            var divFav = document.getElementById('favoriteItems')
            var divID = 'fav_' + imageSrc
            console.log('divId : ', divID, "her type: ", typeof divID)
            var favItem = document.getElementById(divID)
            var icon = document.getElementById(iconID)
            console.log(favItem)
            if(!divFav.contains(favItem)){
                createDivFav(imageSrc, itemName, itemPrice, iconID)
                icon.setAttribute('class', 'fa-solid fa-heart fa-xl')
                // var div_onclick = "deleteFromFvrt('" + imageSrc + "' , '" + iconID + "')"
                // icon.setAttribute('onclick', div_onclick)
            }
    }

    function deleteFromFvrt(img_src, iconID){
        var divID = 'fav_' + img_src
        var divfav = document.getElementById(divID)
        var divAttr = divfav.getAttribute('class') + ' hidden'
        divfav.setAttribute('class', divAttr)
        var icon = document.getElementById(iconID)
        icon.setAttribute('class', 'fa-regular fa-heart fa-xl')
        // remove the child from the favorite div
        var parent = document.getElementById('favoriteItems')
        parent.removeChild(divfav)
    }

    function myFunction(e){
        e.preventDefault();
    }


