# Introducción al Test Driven Development (TDD)

[![wakatime](https://wakatime.com/badge/user/8ef73281-6d0a-4758-af11-fd880ca3009c/project/126bf05d-d2ee-4002-8626-911bf861ccd1.svg?style=for-the-badge)](https://wakatime.com/badge/user/8ef73281-6d0a-4758-af11-fd880ca3009c/project/126bf05d-d2ee-4002-8626-911bf861ccd1)

## ¿Qué es y por qué usar TDD?

El Desarrollo Guiado por Test (TDD por sus siglas en inglés), es una forma de desarrollar código, en el cual los test son escritos primero y entonce el código se construye para que el test pueda pasar.

El TDD se conforma de 3 pasos:

- Test fallidos
- Test pasados
- Refactorización

![TDD - Cicle of Life](./assets/tdd-cicle-of-life.webp)

Básicamente podemos decir que:

1. Se escribe un test y se encuentra que ha fallado
2. Se implementa el código necesario para que el test pase
3. Se refactorea el código para que sea más limpio y eficiente
4. Se repite el ciclo para cada función o método que se quiera implementar.

## Preparación del entorno

Nuestro primer paso será crear el proyecto, y para ello podemos crear el archivo `package.json` de forma manual, o, utilizar el siguiente comando que lo crea por nosotros con la estructura básica:

```bash
npm init -y
```

En nuestro ejemplo solo necesitaremos la instalación de dependencias para el modo de desarrollo, dado que el plan de TDD es ir implementando a medida que desarrollamos el código.

```bash
pnpm install --save-dev jest nyc
```

Por último, configuramos los scripts para ejecutar el proyecto desde consola (`start`), y para correr los test (`test`):

```json
{
    ...
    "main": "src/index.js",
    ...
    "scripts": {
        "start": "node src/index.js",
        "test": "nyc npx jest"
    },
    ...
}
```
