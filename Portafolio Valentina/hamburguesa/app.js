function temaClaro(){
    let tema1 = document.getElementById('tema').value;

    if( tema1 == 'os'){
        document.getElementById('temas').classList.remove('claro');
        document.getElementById('temas').classList.add('oscuro');
    }else {
        document.getElementById('temas').classList.remove('oscuro');
        document.getElementById('temas').classList.add('claro');
    }
}
function idiomaIngles(){
    let idioma = document.getElementById("idioma").value;

    if(idioma == 'en'){
        document.getElementById('temas').innerHTML = `
        <section>
        <div class="container">
            <div class="row ">
                <div class="col-md-6">
                    <select onchange="idiomaIngles()" name="" class="form-select" id="idioma">
                        <option value="" > select</option>
                        <option value="en">1. english</option>
                        <option value="es">2. spanish</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <select onchange="temaClaro()" name="" class="form-select" id="tema">
                        <option value="" > select</option>
                        <option value="os">1. dark</option>
                        <option value="cla">2. Clear</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 my-4">
                    <div class="card h-100">
                        <img src="./images/hamburguesa-1.webp" alt="">
                        <div class="card-body">
                            <sap class="precio"><strong> $ 8900</strong></sap>
                            <h2 class="Nombreproducto"><strong>BBQ Crunch</strong></h2>
                            <p class="Descripcionproducto">1 BBQ Crunch Sandwich (1 Breaded chicken fillet)</p><br>
                            <button class="btn btn-danger" type="button"> Buy</button>
                        </div>                    
                    </div>
                </div>
                
                <div class="col-md-3 my-4">
                    <div class="card h-100">
                        <img src="./images/hamburguesa-2.webp"alt="">
                        <div class="card-body">
                            <sap class="precio"><strong> $ 15900</strong></sap>
                            <h2 class="Nombreproducto"><strong>Kentucky Sandwich</strong></h2>
                            <p class="Descripcionproducto">1 Kentucky burger/ sandwinch (1 Breaded chicken breast fillet, pickles,..)</p>
                            <button class="btn btn-danger" type="button"> Buy</button>
                            <br><br>
                        </div>
                        
                    </div>
                
                </div>
                <div class="col-md-3 my-4" >
                    <div class="card h-100">
                        <img src="./images/hamburguesa-3.webp"alt="">
                        <div class="card-body">
                            <sap class="precio"><strong> $ 15900</strong></sap>
                            <h2 class="Nombreproducto"><strong>BBQ Crunch Combo</strong></h2>
                            <p class="Descripcionproducto">1 BBQ Crunch Sandwich (1 Breaded chicken fillet) + 1 Small Potato + 1 Soda...</p>
                            <button class="btn btn-danger" type="button"> Buy</button>
                            <br><br>
                        </div>
                        
                    </div>
                </div>
                <div class="col-md-3  my-4">
                    <div class="card h-100">
                        <img src="./images/hamburguesa-4.webp"alt="">
                        <div class="card-body">
                            <sap class="precio"><strong> $ 16900</strong></sapp>
                            <h2 class="Nombreproducto"><strong>Kentucky Colonel Sandwich</strong></h2>
                            <p class="Descripcionproducto">1 Kentucky Colonel Burger / Sandwich (1 Breaded chicken breast fillet, salad... )</p>
                            <button class="btn btn-danger" type="button"> Buy</button>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 my-4">
                    <div class="card h-100">
                        <img src="./images/hamburguesa-5.webp" alt="">
                        <div class="card-body">
                            <sap class="precio"><strong> $ 21900</strong></sap>
                            <h2 class="Nombreproducto"><strong>Kentucky Sandwinch Combo</strong></h2>
                            <p class="Descripcionproducto">1 Kentucky Burger / Sandwich  (1 Breaded chicken fillet, pickles,...)</p>
                            <button class="btn btn-danger" type="button"> Buy</button>
                        </div>
                        
                    </div>
                </div>
                <div class="col-md-3 my-4">
                    <div class="card h-100">
                        <img src="./images/hamburguesa-6.webp"alt="">
                        <div class="card-body">
                            <sap class="precio"><strong> $ 22900</strong></sap>
                            <h2 class="Nombreproducto"><strong>Combo Kentucky Colonel Sandwich</strong></h2>
                            <p class="Descripcionproducto">1 Kentucky Colonel Burger / sandwinch (1 Breaded chicken breast fillet, Salad,..)</p>
                            <button class="btn btn-danger" type="button"> Buy</button>
                        </div>
                        
                    </div>
                </div>
                <div class="col-md-3 my-4" >
                    <div class="card h-100">
                        <img src="./images/hamburguesa-7.webp"alt="">
                        <div class="card-body">
                            <sap class="precio"><strong> $ 23900</strong></sap>
                            <h2 class="Nombreproducto"><strong>Crispy BBQ Sandwich </strong></h2>
                            <p class="Descripcionproducto">1 Crispy BBQ Sandwich (1 
                                Large extra breast fillet, triple breaded, crisp onion....)</p>
                            <button class="btn btn-danger" type="button"> Buy</button>
                        </div>
                        
                    </div>
                </div>
                <div class="col-md-3 my-4" >
                    <div class="card h-100">
                        <img src="./images/hamburguesa-8.webp"alt="">
                        <div class="card-body">
                            <sap class="precio"><strong> $ 29900</strong></sap>
                            <h2 class="Nombreproducto"><strong>Crispy BBQ Sandwich Combo</strong></h2>
                            <p class="Descripcionproducto">1 Crispy BBQ Sandwich (1 Extra large breast fillet, triple breaded, crisp onion...)</p>
                            <button class="btn btn-danger" type="button"> Buy</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>       
        </section>
        <footer class="foo">
            <div class="container">
                <div class="row">
                    <div class="col-4 ">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, aspernatur magnam velit aliquam minima sed ipsa dolorum nesciunt, aperiam, suscipit id fugit. Voluptatibus distinctio minima ducimus. Ex adipisci corporis dignissimos?</p>
    
                    </div>
                    <div class="col-4 ">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, aspernatur magnam velit aliquam minima sed ipsa dolorum nesciunt, aperiam, suscipit id fugit. Voluptatibus distinctio minima ducimus. Ex adipisci corporis dignissimos?</p>
    
                    </div>
                    <div class="col-4 ">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, aspernatur magnam velit aliquam minima sed ipsa dolorum nesciunt, aperiam, suscipit id fugit. Voluptatibus distinctio minima ducimus. Ex adipisci corporis dignissimos?</p>
    
                    </div>
                </div>
            </div>
        </footer>`
    }else {
        document.getElementById("temas").innerHTML =
        ` <section>
        <div class="container">
            <div class="row ">
                <div class="col-md-6">
                    <select onchange="idiomaIngles()" name="" class="form-select" id="idioma">
                        <option value="" > selecionar</option>
                        <option value="en">1. Ingles</option>
                        <option value="es">2. Español</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <select onchange="temaClaro()" name="" class="form-select" id="tema">
                        <option value="" > selcionar</option>
                        <option value="os">1. Oscuro</option>
                        <option value="cla">2. Claro</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 my-4">
                    <div class="card h-100">
                        <img src="./images/hamburguesa-1.webp" alt="">
                        <div class="card-body">
                            <sap class="precio"><strong> $ 8900</strong></sap>
                            <h2 class="Nombreproducto"><strong>
                            Crujiente de barbacoa</strong></h2>
                            <p class="Descripcionproducto">1 Sandwich BBQ Crunch (1 Filete de pollo apanado)</p><br>
                            <button class="btn btn-danger" type="button"> Comprar</button>
                        </div>                    
                    </div>
                </div>
                
                <div class="col-md-3 my-4">
                    <div class="card h-100">
                        <img src="./images/hamburguesa-2.webp"alt="">
                        <div class="card-body">
                            <sap class="precio"><strong> $ 15900</strong></sap>
                            <h2 class="Nombreproducto"><strong>Kentucky Sandwich</strong></h2>
                            <p class="Descripcionproducto">1 Kentucky hamburguesa / sandwinch (1 Filete de pechuga de pollo apanado, pepinillos,..)</p>
                            <button class="btn btn-danger" type="button"> Comprar</button>
                            <br><br>
                        </div>
                        
                    </div>
                
                </div>
                <div class="col-md-3 my-4" >
                    <div class="card h-100">
                        <img src="./images/hamburguesa-3.webp"alt="">
                        <div class="card-body">
                            <sap class="precio"><strong> $ 15900</strong></sap>
                            <h2 class="Nombreproducto"><strong>Combo BBQ Crunch</strong></h2>
                            <p class="Descripcionproducto">1 Sandwich bbq Crunch (1 Filete de pollo apanado) +  1 Papa Pequeña + 1 Gasesosa PET...</p>
                            <button class="btn btn-danger" type="button"> Comprar</button>
                            <br><br>
                        </div>
                        
                    </div>
                </div>
                <div class="col-md-3  my-4">
                    <div class="card h-100">
                        <img src="./images/hamburguesa-4.webp"alt="">
                        <div class="card-body">
                            <sap class="precio"><strong> $ 16900</strong></sapp>
                            <h2 class="Nombreproducto"><strong>Kentucky Coronel Sandwich</strong></h2>
                            <p class="Descripcionproducto">1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, ensalada... )</p>
                            <button class="btn btn-danger" type="button"> Comprar</button>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 my-4">
                    <div class="card h-100">
                        <img src="./images/hamburguesa-5.webp" alt="">
                        <div class="card-body">
                            <sap class="precio"><strong> $ 21900</strong></sap>
                            <h2 class="Nombreproducto"><strong>Combo Kentucky Sandwinch</strong></h2>
                            <p class="Descripcionproducto">1 Kentucky hamburguersa / Sandwich  (1 Filete de pollo apanado, pepinillos,...)</p>
                            <button class="btn btn-danger" type="button"> Comprar</button>
                        </div>
                        
                    </div>
                </div>
                <div class="col-md-3 my-4">
                    <div class="card h-100">
                        <img src="./images/hamburguesa-6.webp"alt="">
                        <div class="card-body">
                            <sap class="precio"><strong> $ 22900</strong></sap>
                            <h2 class="Nombreproducto"><strong>Combo Kentucky Coronel Sandwich</strong></h2>
                            <p class="Descripcionproducto">1 Kentucky Coronel hamburguesa / sandwinch (1 Filete de pechuga de pollo apanado, Ensalada,..)</p>
                            <button class="btn btn-danger" type="button"> Comprar</button>
                        </div>
                        
                    </div>
                </div>
                <div class="col-md-3 my-4" >
                    <div class="card h-100">
                        <img src="./images/hamburguesa-7.webp"alt="">
                        <div class="card-body">
                            <sap class="precio"><strong> $ 23900</strong></sap>
                            <h2 class="Nombreproducto"><strong>Sandwich Crispy BBQ </strong></h2>
                            <p class="Descripcionproducto">1 Sandwich Crispy BBQ (1 Filete de pechuga exta grande , triple empanizado, cebolla crisp....)</p>
                            <button class="btn btn-danger" type="button"> Comprar</button>
                        </div>
                        
                    </div>
                </div>
                <div class="col-md-3 my-4" >
                    <div class="card h-100">
                        <img src="./images/hamburguesa-8.webp"alt="">
                        <div class="card-body">
                            <sap class="precio"><strong> $ 29900</strong></sap>
                            <h2 class="Nombreproducto"><strong>Combo Sandwich Crispy BBQ</strong></h2>
                            <p class="Descripcionproducto">1 Sandwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crisp...)</p>
                            <button class="btn btn-danger" type="button"> Comprar</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>       
        </section>
        <footer class="foo">
            <div class="container">
                <div class="row">
                    <div class="col-4 ">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, aspernatur magnam velit aliquam minima sed ipsa dolorum nesciunt, aperiam, suscipit id fugit. Voluptatibus distinctio minima ducimus. Ex adipisci corporis dignissimos?</p>
    
                    </div>
                    <div class="col-4 ">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, aspernatur magnam velit aliquam minima sed ipsa dolorum nesciunt, aperiam, suscipit id fugit. Voluptatibus distinctio minima ducimus. Ex adipisci corporis dignissimos?</p>
    
                    </div>
                    <div class="col-4 ">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, aspernatur magnam velit aliquam minima sed ipsa dolorum nesciunt, aperiam, suscipit id fugit. Voluptatibus distinctio minima ducimus. Ex adipisci corporis dignissimos?</p>
    
                    </div>
                </div>
            </div>
        </footer>`
    }

}