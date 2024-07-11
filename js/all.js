"use strict";var swiper=new Swiper(".mySwiper",{effect:"fade",pagination:{el:".swiper-pagination"},autoplay:{delay:5e3,disableOnInteraction:!1}}),cardPokemon=document.querySelectorAll(".js-open-details-pokemon"),closePokemon=document.querySelector(".js-close-modal-details-pokemon"),closeOverlay=document.querySelector(".js-overlay-modal-details-pokemon"),btnCustomSelect=(cardPokemon.forEach(function(e){e.addEventListener("click",openDetailsPokemon)}),closePokemon.addEventListener("click",closeDetailsPokemon),closeOverlay.addEventListener("click",closeDetailsPokemon),document.querySelector(".js-open-select-custom")),areaPokemons=(btnCustomSelect.addEventListener("click",function(){btnCustomSelect.parentElement.classList.toggle("active")}),document.getElementById("js-list-pokemons")),countPokemons=document.getElementById("js-count-pokemons");function primeiraLetraMaiuscula(e){return e.charAt(0).toUpperCase()+e.slice(1)}function createCardPokemons(e,t,n,o){var a=document.createElement("button"),s=(a.classList="card-pokemon js-open-details-pokemon ".concat(o),a.setAttribute("code-pokemon",t),areaPokemons.appendChild(a),document.createElement("div")),c=(s.classList="image",a.appendChild(s),document.createElement("img")),n=(c.classList="thumb-img",c.setAttribute("src",n),s.appendChild(c),document.createElement("div")),s=(n.classList="info",a.appendChild(n),document.createElement("div")),c=(s.classList="text",n.appendChild(s),document.createElement("span")),a=(c.textContent=(t<10?"#00":t<100?"#0":"#").concat(t),s.appendChild(c),document.createElement("h3")),t=(a.textContent=primeiraLetraMaiuscula(e),s.appendChild(a),document.createElement("div")),c=(t.classList="icon",n.appendChild(t),document.createElement("img"));c.setAttribute("src","img/icon-types/".concat(o,".svg")),t.appendChild(c)}function listingPokemons(e){axios({method:"GET",url:e}).then(function(e){var e=e.data,t=e.results,e=(e.next,e.count);countPokemons.innerText=e,t.forEach(function(e){e=e.url;axios({method:"GET",url:"".concat(e)}).then(function(e){var e=e.data,t=e.name,n=e.id,o=e.sprites,e=e.types,t={nome:t,code:n,image:o.other.dream_world.front_default,type:e[0].type.name};createCardPokemons(t.nome,t.code,t.image,t.type),document.querySelectorAll(".js-open-details-pokemon").forEach(function(e){e.addEventListener("click",openDetailsPokemon)})})})})}function openDetailsPokemon(){document.documentElement.classList.add("open-modal");var e=this.getAttribute("code-pokemon"),t=this.querySelector(".thumb-img"),n=this.querySelector(".info .icon img"),o=this.querySelector(".info h3").textContent,a=this.querySelector(".info span").textContent,s=document.getElementById("js-type-pokemon-modal"),c=document.getElementById("js-type-pokemon-modal-details"),i=document.getElementById("js-image-pokemon-modal"),m=document.getElementById("js-name-pokemon-modal"),l=document.getElementById("js-code-pokemon-modal"),d=document.getElementById("js-height-pokemon"),r=document.getElementById("js-weight-pokemon"),p=document.getElementById("js-main-abilities");i.setAttribute("src",t.getAttribute("src")),c.setAttribute("type-pokemon-modal",this.classList[2]),s.setAttribute("src",n.getAttribute("src")),m.textContent=o,l.textContent=a,axios({method:"GET",url:"https://pokeapi.co/api/v2/pokemon/".concat(e)}).then(function(e){e=e.data,e={mainAbilities:primeiraLetraMaiuscula(e.abilities[0].ability.name),types:e.types,weight:e.weight,height:e.height,abilities:e.abilities,stats:e.stats,urlType:e.types[0].type.url};d.textContent="".concat(e.height/10,"m"),r.textContent="".concat(e.weight/10,"kg"),p.textContent=e.mainAbilities;var o,a,t=document.getElementById("js-status-hp"),n=document.getElementById("js-status-attack"),s=document.getElementById("js-status-defense"),c=document.getElementById("js-status-sp-attack"),i=document.getElementById("js-status-sp-defense"),m=document.getElementById("js-status-speed");t.style.width="".concat(e.stats[0].base_stat,"%"),n.style.width="".concat(e.stats[1].base_stat,"%"),s.width="".concat(e.stats[2].base_stat,"%"),c.style.width="".concat(e.stats[3].base_stat,"%"),i.style.width="".concat(e.stats[4].base_stat,"%"),m.style.width="".concat(e.stats[5].base_stat,"%"),(o=document.getElementById("js-type")).innerHTML="",e.types.forEach(function(e){var t=document.createElement("li"),n=(o.appendChild(t),document.createElement("span"));n.classList="tag-type ".concat(e.type.name),n.textContent=primeiraLetraMaiuscula(e.type.name),t.appendChild(n)}),(a=document.getElementById("js-weak")).innerHTML="",axios({method:"GET",url:"".concat(e.urlType)}).then(function(e){e.data.damage_relations.double_damage_from.forEach(function(e){var t=document.createElement("li"),n=(a.appendChild(t),document.createElement("span"));n.classList="tag-type ".concat(e.name),n.textContent=primeiraLetraMaiuscula(e.name),t.appendChild(n)})})})}function closeDetailsPokemon(){document.documentElement.classList.remove("open-modal")}listingPokemons("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0.");var areaTypes=document.getElementById("js-type-area"),areaTypesMobile=document.querySelector(".dropdown-select"),btnLoadMore=(axios({method:"GET",url:"https://pokeapi.co/api/v2/type"}).then(function(e){e.data.results.forEach(function(e,t){var n,o,a;t<18&&(o=document.createElement("li"),areaTypes.appendChild(o),(n=document.createElement("button")).classList="type-filter ".concat(e.name),n.setAttribute("code-type",t+1),o.appendChild(n),(o=document.createElement("div")).classList="icon",n.appendChild(o),(a=document.createElement("img")).setAttribute("src","img/icon-types/".concat(e.name,".svg")),o.appendChild(a),(o=document.createElement("span")).textContent=primeiraLetraMaiuscula(e.name),n.appendChild(o),a=document.createElement("li"),areaTypesMobile.appendChild(a),(n=document.createElement("button")).classList="type-filter ".concat(e.name),n.setAttribute("code-type",t+1),a.appendChild(n),(o=document.createElement("div")).classList="icon",n.appendChild(o),(t=document.createElement("img")).setAttribute("src","img/icon-types/".concat(e.name,".svg")),o.appendChild(t),(a=document.createElement("span")).textContent=primeiraLetraMaiuscula(e.name),n.appendChild(a),document.querySelectorAll(".type-filter").forEach(function(e){e.addEventListener("click",filterByTypes)}))})}),document.getElementById("js-btn-load-more")),countPagination=10;function showMorePokemon(){listingPokemons("https://pokeapi.co/api/v2/pokemon?limit=9&offset=".concat(countPagination)),countPagination+=9}function filterByTypes(){var e=this.getAttribute("code-type"),t=document.getElementById("js-list-pokemons"),n=document.getElementById("js-btn-load-more"),o=document.querySelectorAll(".type-filter"),a=document.querySelector(".select-custom");t.innerHTML="",n.style.display="none";var s=document.querySelector(".s-all-info-pokemons").offsetTop;o.forEach(function(e){e.classList.remove("active"),a.classList.remove("active")}),window.scrollTo({top:s+288,behavior:"smooth"}),this.classList.add("active"),e?axios({method:"GET",url:"https://pokeapi.co/api/v2/type/".concat(e)}).then(function(e){e=e.data.pokemon;countPokemons.textContent=e.length,console.log(e.length),e.forEach(function(e){e=e.pokemon.url;console.log(e),axios({method:"GET",url:"".concat(e)}).then(function(e){var e=e.data,t=e.name,n=e.id,o=e.sprites,e=e.types,t={nome:t,code:n,image:o.other.dream_world.front_default,type:e[0].type.name};t.image&&createCardPokemons(t.nome,t.code,t.image,t.type),document.querySelectorAll(".js-open-details-pokemon").forEach(function(e){e.addEventListener("click",openDetailsPokemon)})})})}):(t.innerHTML="",listingPokemons("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0."),n.style.display="block")}btnLoadMore.addEventListener("click",showMorePokemon);var btnSearch=document.getElementById("js-btn-search"),inputSearch=document.getElementById("js-input-search");function searchPokemon(){var e=inputSearch.value.toLowerCase();document.querySelectorAll(".type-filter").forEach(function(e){e.classList.remove("active")}),axios({method:"GET",url:"https://pokeapi.co/api/v2/pokemon/".concat(e)}).then(function(e){areaPokemons.innerHTML="",btnLoadMore.style.display="none",countPokemons.textContent=1;var e=e.data,t=e.name,n=e.id,o=e.sprites,e=e.types,t={nome:t,code:n,image:o.other.dream_world.front_default,type:e[0].type.name};t.image&&createCardPokemons(t.nome,t.code,t.image,t.type),document.querySelectorAll(".js-open-details-pokemon").forEach(function(e){e.addEventListener("click",openDetailsPokemon)})}).catch(function(e){e.response&&(areaPokemons.innerHTML="",btnLoadMore.style.display="none",countPokemons.textContent=0,alert("Não foi encontrado nenhum resultado para essa pesquisa!"))})}btnSearch.addEventListener("click",searchPokemon),inputSearch.addEventListener("keyup",function(e){"Enter"==e.code&&searchPokemon()});