# grupo-a-tienda

## Rutas del Backend

| Ruta                 | Pública/Privada | Método  | Body                                                                 | Posibles Respuestas                                                                 |
|----------------------|----------------|---------|----------------------------------------------------------------------|------------------------------------------------------------------------------------|
| `/api/auth/register`   | Pública        | POST    | `{ "name": "John Doe", "email": "user@example.com", "password": "password123" }` | `201 Created` (Usuario registrado), `400 Bad Request`                             |
| `/api/auth/login`    | Pública        | POST    | `{ "email": "user@example.com", "password": "password123" }`         | `200 OK` (Token de autenticación), `401 Unauthorized`                             |
| `/api/products`      | Pública        | GET     | N/A                                                                  | `200 OK` (Lista de productos)                                                     |
| `/api/products/:id`  | Pública        | GET     | N/A                                                                  | `200 OK` (Detalles del producto), `404 Not Found` (Producto no encontrado)        |
| `/api/products`      | Privada        | POST    | `{ "name": "Product Name", "price": 100, "description": "Details" }` | `201 Created` (Producto registrado), `400 Bad Request`, `401 Unauthorized`        |
| `/api/products/:id`  | Privada        | PUT     | `{ "name": "Updated Name", "price": 120, "description": "Updated" }` | `200 OK` (Producto actualizado), `400 Bad Request`, `401 Unauthorized`, `404 Not Found` |
| `/api/cart`          | Privada        | GET     | N/A                                                                  | `200 OK` (Carrito del usuario), `401 Unauthorized`                                |
| `/api/cart`          | Privada        | POST    | `{ "productId": "123", "quantity": 2 }`                              | `201 Created` (Producto agregado), `400 Bad Request`, `401 Unauthorized`          |
| `/api/orders`        | Privada        | GET     | N/A                                                                  | `200 OK` (Lista de órdenes del usuario), `401 Unauthorized`                       |
| `/api/orders`        | Privada        | POST    | `{ "cartId": "456", "paymentMethod": "credit_card" }`                | `201 Created` (Orden creada), `400 Bad Request`, `401 Unauthorized`               |
## Rutas del Frontend

| Ruta               | Descripción                              | Pública/Privada | Componentes Asociados         |
|--------------------|------------------------------------------|----------------|--------------------------------|
| `/`                | Página principal con lista de productos | Pública        | `HomePage`, `ProductList`     |
| `/login`           | Página de inicio de sesión              | Pública        | `LoginPage`, `AuthForm`       |
| `/register`        | Página de registro de usuario           | Pública        | `RegisterPage`, `AuthForm`    |
| `/products/:id`    | Detalles de un producto específico      | Pública        | `ProductDetailPage`           |
| `/cart`            | Página del carrito de compras           | Privada        | `CartPage`, `CartItemList`    |
| `/checkout`        | Página de checkout                      | Privada        | `CheckoutPage`, `OrderForm`   |
| `/orders`          | Historial de órdenes del usuario        | Privada        | `OrdersPage`, `OrderList`     |
| `/admin/products`  | Gestión de productos (admin)            | Privada        | `AdminProductsPage`, `ProductForm` |
| `/admin/products/:id/edit` | Edición de un producto (admin)   | Privada        | `EditProductPage`, `ProductForm` |