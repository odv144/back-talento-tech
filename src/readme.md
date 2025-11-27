# 📚 Documentación API - Gestión de Productos

**Gestión de Productos - Back-Talento Tech**
*Virili Omar Dario Back con NodeJs 2025*

---

## Endpoints

### GET /api/products
- **Descripción:** Obtiene la lista de todos los productos.
- **Autenticación:** Opcional
- **Parámetros:** Ninguno
- **Respuesta (200 OK):**
  ```json
  [
    {
      "id": 1,
      "name": "Camisa",
      "price": 29.99,
      "category": "Ropa"
    },
    {
      "id": 2,
      "name": "Pantalón",
      "price": 49.99,
      "category": "Ropa"
    }
  ]