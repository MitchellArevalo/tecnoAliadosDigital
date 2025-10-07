// Mock de servicios
const servicios = [
  {
    id: 1,
    nombre: "Desarrollo Web",
    precio: 1200,
  imagen: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    cantidad: 10,
    descripcion: "Creación de sitios web modernos y responsivos.",
    promocion: true
  },
  {
    id: 2,
    nombre: "Soporte Técnico",
    precio: 800,
  imagen: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    cantidad: 15,
    descripcion: "Asistencia técnica presencial y remota.",
    promocion: false
  },
  {
    id: 3,
    nombre: "Consultoría IT",
    precio: 1500,
  imagen: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    cantidad: 8,
    descripcion: "Análisis y mejora de procesos tecnológicos.",
    promocion: false
  },
  {
    id: 4,
    nombre: "Ciberseguridad",
    precio: 2000,
  imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    cantidad: 5,
    descripcion: "Protección de datos y sistemas informáticos.",
    promocion: true
  },
  {
    id: 5,
    nombre: "Cloud Computing",
    precio: 1800,
  imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    cantidad: 12,
    descripcion: "Migración y gestión de servicios en la nube.",
    promocion: false
  },
  {
    id: 6,
    nombre: "Desarrollo Apps",
    precio: 2500,
  imagen: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80",
    cantidad: 7,
    descripcion: "Aplicaciones móviles para iOS y Android.",
    promocion: true
  },
  {
    id: 7,
    nombre: "Redes y Comunicaciones",
    precio: 1100,
  imagen: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    cantidad: 20,
    descripcion: "Instalación y mantenimiento de redes empresariales.",
    promocion: false
  },
  {
    id: 8,
    nombre: "Automatización",
    precio: 1700,
  imagen: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80",
    cantidad: 9,
    descripcion: "Soluciones de automatización de procesos.",
    promocion: false
  },
  {
    id: 9,
    nombre: "Inteligencia Artificial",
    precio: 3000,
  imagen: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&q=80",
    cantidad: 4,
    descripcion: "Implementación de sistemas inteligentes.",
    promocion: true
  },
  {
    id: 10,
    nombre: "Capacitación",
    precio: 600,
  imagen: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=400&q=80",
    cantidad: 25,
    descripcion: "Cursos y talleres tecnológicos.",
    promocion: false
  }
];

// Renderizar servicios en index.html
if (document.getElementById('servicios-list')) {
  const contenedor = document.getElementById('servicios-list');
  servicios.forEach(servicio => {
    const card = document.createElement('div');
    card.className = 'servicio-card';
    card.innerHTML = `
      <img src="${servicio.imagen}" alt="${servicio.nombre}">
      <h3>${servicio.nombre}</h3>
      <div class="precio">$${servicio.precio}</div>
    `;
    card.onclick = () => {
      window.location.href = `servicio.html?id=${servicio.id}`;
    };
    contenedor.appendChild(card);
  });
}

// Renderizar detalle de servicio en servicio.html
if (document.getElementById('servicio-detalle')) {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const servicio = servicios.find(s => s.id === id);
  if (servicio) {
    document.getElementById('servicio-detalle').innerHTML = `
      <div class="servicio-card" style="width:350px;margin:auto;">
        <img src="${servicio.imagen}" alt="${servicio.nombre}">
        <h2>${servicio.nombre}</h2>
        <div class="precio">$${servicio.precio}</div>
        <p><strong>Cantidad disponible:</strong> ${servicio.cantidad}</p>
        <p>${servicio.descripcion}</p>
        ${servicio.promocion ? '<span style="color:#d00;font-weight:bold;">En promoción</span>' : ''}
      </div>
    `;
  }
}

// Slider funcionalidad
if (document.querySelector('.slider')) {
  let current = 0;
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.slider-btn.prev');
  const nextBtn = document.querySelector('.slider-btn.next');
  function showSlide(idx) {
    slides.forEach((s, i) => s.classList.toggle('active', i === idx));
  }
  prevBtn.onclick = () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  };
  nextBtn.onclick = () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  };
  showSlide(current);
}

// Login administrador (mock)
if (document.getElementById('login-form')) {
  document.getElementById('login-form').onsubmit = function(e) {
    e.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;
    if (usuario === 'admin' && password === 'admin123') {
      window.location.href = 'admin.html';
    } else {
      document.getElementById('login-error').textContent = 'Usuario o contraseña incorrectos.';
    }
  };
}

// Panel administrador: CRUD de servicios
if (document.getElementById('admin-content')) {
  let vista = 'listar';
  let serviciosAdmin = [...servicios];
  function renderListar() {
    document.getElementById('admin-content').innerHTML = `
      <h2>Servicios registrados</h2>
      <button id="nuevo-servicio-btn">Nuevo servicio</button>
      <input type="text" id="busqueda" placeholder="Buscar por nombre..." style="margin-left:2rem;">
      <table class="crud-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody id="tabla-servicios">
        </tbody>
      </table>
    `;
    renderTabla(serviciosAdmin);
    document.getElementById('nuevo-servicio-btn').onclick = () => renderCrear();
    document.getElementById('busqueda').oninput = function() {
      const val = this.value.toLowerCase();
      renderTabla(serviciosAdmin.filter(s => s.nombre.toLowerCase().includes(val)));
    };
  }
  function renderTabla(servs) {
    const tbody = document.getElementById('tabla-servicios');
    tbody.innerHTML = '';
    servs.forEach(s => {
      tbody.innerHTML += `
        <tr>
          <td>${s.id}</td>
          <td>${s.nombre}</td>
          <td>$${s.precio}</td>
          <td>${s.promocion ? 'Activo' : 'Inactivo'}</td>
          <td class="crud-actions">
            <button class="edit" onclick="editarServicio(${s.id})">Editar</button>
            <button class="delete" onclick="eliminarServicio(${s.id})">Eliminar</button>
          </td>
        </tr>
      `;
    });
  }
  window.editarServicio = function(id) {
    const serv = serviciosAdmin.find(s => s.id === id);
    renderEditar(serv);
  };
  window.eliminarServicio = function(id) {
    const serv = serviciosAdmin.find(s => s.id === id);
    renderModalEliminar(serv);
  };
  function renderCrear() {
    document.getElementById('admin-content').innerHTML = `
      <form class="crud-form" id="form-servicio">
        <h2>Crear servicio</h2>
        <label>Nombre</label>
        <input type="text" name="nombre" required>
        <label>Descripción</label>
        <textarea name="descripcion" required></textarea>
        <label>Precio</label>
        <input type="number" name="precio" required>
        <label>Categoría</label>
        <input type="text" name="categoria">
        <label>Estado</label>
        <select name="estado">
          <option value="activo">Activo</option>
          <option value="inactivo">Inactivo</option>
        </select>
        <button type="submit">Guardar</button>
        <button type="button" class="cancel" id="cancelar-btn">Cancelar</button>
      </form>
    `;
    document.getElementById('form-servicio').onsubmit = function(e) {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(this));
      serviciosAdmin.push({
        id: serviciosAdmin.length + 1,
        nombre: data.nombre,
        precio: parseFloat(data.precio),
        imagen: "assets/default.jpg",
        cantidad: 0,
        descripcion: data.descripcion,
        promocion: data.estado === 'activo'
      });
      renderListar();
    };
    document.getElementById('cancelar-btn').onclick = () => renderListar();
  }
  function renderEditar(serv) {
    document.getElementById('admin-content').innerHTML = `
      <form class="crud-form" id="form-editar-servicio">
        <h2>Editar servicio</h2>
        <label>Nombre</label>
        <input type="text" name="nombre" value="${serv.nombre}" required>
        <label>Descripción</label>
        <textarea name="descripcion" required>${serv.descripcion}</textarea>
        <label>Precio</label>
        <input type="number" name="precio" value="${serv.precio}" required>
        <label>Categoría</label>
        <input type="text" name="categoria" value="">
        <label>Estado</label>
        <select name="estado">
          <option value="activo" ${serv.promocion ? 'selected' : ''}>Activo</option>
          <option value="inactivo" ${!serv.promocion ? 'selected' : ''}>Inactivo</option>
        </select>
        <button type="submit">Guardar</button>
        <button type="button" class="cancel" id="cancelar-btn">Cancelar</button>
      </form>
    `;
    document.getElementById('form-editar-servicio').onsubmit = function(e) {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(this));
      serv.nombre = data.nombre;
      serv.precio = parseFloat(data.precio);
      serv.descripcion = data.descripcion;
      serv.promocion = data.estado === 'activo';
      renderListar();
    };
    document.getElementById('cancelar-btn').onclick = () => renderListar();
  }
  function renderModalEliminar(serv) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <h3>¿Eliminar servicio "${serv.nombre}"?</h3>
        <p>Esta acción es irreversible.</p>
        <button class="delete" id="confirmar-eliminar">Eliminar</button>
        <button class="cancel" id="cancelar-eliminar">Cancelar</button>
      </div>
    `;
    document.body.appendChild(modal);
    document.getElementById('confirmar-eliminar').onclick = () => {
      serviciosAdmin = serviciosAdmin.filter(s => s.id !== serv.id);
      document.body.removeChild(modal);
      renderListar();
    };
    document.getElementById('cancelar-eliminar').onclick = () => {
      document.body.removeChild(modal);
    };
  }
  // Navegación menú admin
  document.getElementById('listar-servicios-link').onclick = () => renderListar();
  document.getElementById('crear-servicio-link').onclick = () => renderCrear();
  // Render inicial
  renderListar();
}
