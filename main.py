# Pregunta al usuario por la selección de escala de temperatura
def elegir_escala():
    return game.ask_for_number("Escribe 1 para Celsius o 2 para Fahrenheit.", 1)

# Obtiene el valor de temperatura del usuario
def obtener_valor():
    temperatura = game.ask_for_number("Ingresa la temperatura:", 3)
    return temperatura

# Crea el sprite para la escala Fahrenheit
def crear_sprite_fahrenheit():
    sprite_f = sprites.create(img("""ffffff...ffffffffff"""), SpriteKind.Player)  
    sprite_f.set_position(76, 51)  
    return sprite_f

# Crea el sprite para la escala Celsius
def crear_sprite_celsius():
    sprite_c = sprites.create(img("""ffffff...ffffffffff"""), SpriteKind.Player)  
    sprite_c.set_position(76, 51)  
    return sprite_c

# Realiza la conversión de temperatura según la escala elegida
def mostrar_conversion(escala, valor):
    if escala == 1:  # Celsius a Fahrenheit
        valor_convertido = (valor * 9 / 5) + 32
        crear_sprite_fahrenheit()  # Crea el sprite para Fahrenheit
        game.show_long_text("La temperatura en Fahrenheit es: " + str(Math.round_with_precision(valor_convertido, 2)), DialogLayout.BOTTOM)
    else:  # Fahrenheit a Celsius
        valor_convertido = (valor - 32) * 5 / 9
        crear_sprite_celsius()  # Crea el sprite para Celsius
        game.show_long_text("La temperatura en Celsius es: " + str(Math.round_with_precision(valor_convertido, 2)), DialogLayout.BOTTOM)

# Selecciona la escala de temperatura
escala_elegida = elegir_escala()
# Obtiene la temperatura ingresada por el usuario
temperatura_inicial = obtener_valor()

# Muestra la conversión según la escala elegida y la temperatura ingresada
mostrar_conversion(escala_elegida, temperatura_inicial)
