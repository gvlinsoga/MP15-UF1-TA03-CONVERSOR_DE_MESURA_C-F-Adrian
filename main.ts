//  Pregunta al usuario por la selección de escala de temperatura
function elegir_escala(): number {
    return game.askForNumber("Escribe 1 para Celsius o 2 para Fahrenheit.", 1)
}

//  Obtiene el valor de temperatura del usuario
function obtener_valor(): number {
    let temperatura = game.askForNumber("Ingresa la temperatura:", 3)
    return temperatura
}

//  Crea el sprite para la escala Fahrenheit
function crear_sprite_fahrenheit(): Sprite {
    let sprite_f = sprites.create(img`ffffff...ffffffffff`, SpriteKind.Player)
    sprite_f.setPosition(76, 51)
    return sprite_f
}

//  Crea el sprite para la escala Celsius
function crear_sprite_celsius(): Sprite {
    let sprite_c = sprites.create(img`ffffff...ffffffffff`, SpriteKind.Player)
    sprite_c.setPosition(76, 51)
    return sprite_c
}

//  Realiza la conversión de temperatura según la escala elegida
function mostrar_conversion(escala: number, valor: number) {
    let valor_convertido: number;
    if (escala == 1) {
        //  Celsius a Fahrenheit
        valor_convertido = valor * 9 / 5 + 32
        crear_sprite_fahrenheit()
        //  Crea el sprite para Fahrenheit
        game.showLongText("La temperatura en Fahrenheit es: " + ("" + Math.roundWithPrecision(valor_convertido, 2)), DialogLayout.Bottom)
    } else {
        //  Fahrenheit a Celsius
        valor_convertido = (valor - 32) * 5 / 9
        crear_sprite_celsius()
        //  Crea el sprite para Celsius
        game.showLongText("La temperatura en Celsius es: " + ("" + Math.roundWithPrecision(valor_convertido, 2)), DialogLayout.Bottom)
    }
    
}

//  Selecciona la escala de temperatura
let escala_elegida = elegir_escala()
//  Obtiene la temperatura ingresada por el usuario
let temperatura_inicial = obtener_valor()
//  Muestra la conversión según la escala elegida y la temperatura ingresada
mostrar_conversion(escala_elegida, temperatura_inicial)
