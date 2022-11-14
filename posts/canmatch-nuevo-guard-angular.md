---
title: 'CanMatch, el nuevo guard de Angular'
metaTitle: 'CanMatch, el nuevo guard de Angular'
author: 'Alberto Tejero'
metaDesc: 'En este pequeño post podemos ver una implementación sencilla del nuevo guard 🛡️ que tenemos disponible en Angular 14. Hacemos un acceso a un perfil de usuario según el rol que tiene el usuario autenticado.'
image: tinywow_canmatch-nuevo-guard.webp
date: '2022-11-14'
tags:
  - angular
  - guard
---

¿Siempre has querido utilizar una misma ruta en angular pero renderizar componentes diferentes... según rol, un test a/b de alguna version nueva de tu aplicación?... ¿y siempre andabas haciendo redirecciones según las condiciones?

## Angular 14 + CanMatch

En la última versión de **Angular** disponemos de este nuevo guard con el que podremos decidir que ruta y que componente renderizamos. Si la implementación de **CanMatch** devuelve true continua con la navegación y el enrutador utilizará el primer componente que haga "match".

## Podemos hacer ruta según rol de manera sencilla

Para verlo mejor podemos ver el siguiente código:

```typescript
const isRole = (role: string) => {
  const roleLogged = localStorage.getItem('role')

  return roleLogged === role
}

const routes: Routes = [
  {
    path: 'profile',
    children: [
      {
        path: '',
        canMatch: [() => isRole('admin')],
        component: AdminProfileComponent
      },
      {
        path: '',
        canMatch: [() => isRole('register')],
        component: RegisterProfileComponent
      },
      {
        path: '',
        canMatch: [() => isRole('guest')],
        component: GuestProfileComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

En este pequeño fragmento de código hacemos una implementación sencilla para comprobar el rol del usuario guardado en el localstorage.

```typescript
const isRole = (role: string) => {
  const roleLogged = localStorage.getItem('role')

  return roleLogged === role
}
```

En la definición de rutas ya vemos como se está implementado el canMatch, llamando a nuestra función _isRole_.

```typescript
const routes: Routes = [
  {
    path: 'profile',
    children: [
      {
        path: '',
        canMatch: [() => isRole('admin')],
        component: AdminProfileComponent
      },
      {
        path: '',
        canMatch: [() => isRole('register')],
        component: RegisterProfileComponent
      },
      {
        path: 'profile',
        canMatch: [() => isRole('guest')],
        component: GuestProfileComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }
]
```

### ¿Que hará esto?

Cuando accedemos a la pantalla de _/profile_ comprobará el rol guardado en el localStorage y lo comparará contra el rol que pasamos por parámetro. Irá pasando por todas las "rutas" hijas y la que primero devuelva true será a la que el enrutador entrará y renderizará ese componente. Si el rol no es encontrado irá al _NotFoundComponent_.

Es un ejemplo bastante sencillo pero conciso de como puedo usar este **CanMatch**.

Enlace documentación:
[Angular - CanMatch](https://angular.io/api/router/CanMatch)

## Demo

![Video de como funciona la implementación de CanMatch](/img/posts/demo-canmatch-angular.gif)

Alberto Tejero - Senior frontend - Bravent

[Github](https://github.com/albertot-dev) -
[Instagram](https://www.instagram.com/albertot_dev/) -
[Twitter](https://twitter.com/albertot_dev)
