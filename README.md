# Desafío: Amigo Secreto

Este proyecto tiene como objetivo fortalecer tus habilidades en lógica de programación mediante la implementación de una aplicación sencilla que permite gestionar una lista de amigos y realizar un sorteo para seleccionar un amigo secreto al azar.

## Descripción del Proyecto

El proyecto consiste en una aplicación web que permite:

1. **Agregar amigos** a una lista.
2. **Mostrar la lista** de amigos agregados.
3. **Sortear un amigo secreto** de la lista.

### Funcionalidades Principales

- **Agregar Amigos**: Permite al usuario ingresar nombres de amigos y agregarlos a una lista.
- **Mostrar Lista**: Muestra la lista actual de amigos en la interfaz.
- **Sortear Amigo**: Selecciona un amigo al azar de la lista y lo muestra en la pantalla.

## Código Explicado

### Variables y Funciones

- **`secretList`**: Un array que almacena los nombres de los amigos.
- **`agregarAmigo()`**: Función que agrega un amigo a la lista y actualiza la interfaz.
- **`resetLista()`**: Función que actualiza la lista de amigos en la interfaz.
- **`sortearAmigo()`**: Función que selecciona un amigo al azar de la lista y lo muestra en la pantalla.

### Flujo del Programa

1. **Agregar Amigos**:
   - El usuario ingresa un nombre en el campo de texto.
   - Si el campo no está vacío, el nombre se agrega a `secretList`.
   - La lista se actualiza en la interfaz llamando a `resetLista()`.

2. **Mostrar Lista**:
   - La función `resetLista()` recorre `secretList` y muestra cada nombre en la interfaz.

3. **Sortear Amigo**:
   - La función `sortearAmigo()` selecciona un índice aleatorio de `secretList`.
   - El nombre correspondiente al índice seleccionado se muestra en la interfaz.

## Instrucciones de Uso

1. **Agregar Amigos**:
   - Ingresa el nombre de un amigo en el campo de texto.
   - Haz clic en el botón "Agregar" para agregarlo a la lista.

2. **Ver la Lista**:
   - Los nombres agregados se mostrarán en una lista en la pantalla.

3. **Sortear Amigo**:
   - Haz clic en el botón "Sortear" para seleccionar un amigo al azar de la lista.
   - El nombre del amigo seleccionado se mostrará en la pantalla.
